"use server";

import { getTwoFactorConfirmationByUserId } from "@/data/twoFactorConfirmation";
import { getTwoFactorTokenByEmail } from "@/data/twoFactorToken";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/lib/auth";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { send2FAEmail, sendVerificationEmail } from "@/lib/mail";
import {
	generateTwoFactorToken,
	generateVerificationToken,
} from "@/lib/tokens";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Login, LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

type LoginResponse = {
	error?: string;
	success?: string;
	twoFactor?: boolean;
};

export const login = async (
	values: Login,
	callbackUrl?: string | null
): Promise<LoginResponse> => {
	try {
		const validatedFields = LoginSchema.safeParse(values);
		if (!validatedFields.success) {
			return { error: "Invalid inputs" };
		}

		const { email, password, code } = validatedFields.data;

		const existingUser = await getUserByEmail(email);
		if (!existingUser || !existingUser.email || !existingUser.password) {
			return { error: "Invalid credentials" };
		}

		await logActivity("info", `Login attempt for user: ${email}`);

		if (!existingUser.emailVerified) {
			const verificationToken = await generateVerificationToken(
				existingUser.email
			);
			await sendVerificationEmail(existingUser.email, verificationToken.token);
			return {
				success:
					"Confirmation email has been resent. Please verify your email.",
			};
		}

		if (existingUser.isTwoFactorEnabled) {
			if (code) {
				const twoFactorToken = await getTwoFactorTokenByEmail(
					existingUser.email
				);
				if (!twoFactorToken || twoFactorToken.token !== code) {
					return { error: "Invalid 2FA code" };
				}

				const hasExpired = new Date(twoFactorToken.expires) < new Date();
				if (hasExpired) {
					return { error: "2FA code expired" };
				}

				await db.twoFactorToken.delete({ where: { id: twoFactorToken.id } });

				const existingConfirmation = await getTwoFactorConfirmationByUserId(
					existingUser.id
				);
				if (existingConfirmation) {
					await db.twoFactorConfirmation.delete({
						where: { id: existingConfirmation.id },
					});
				}

				await db.twoFactorConfirmation.create({
					data: { userId: existingUser.id },
				});
			} else {
				const twoFactorToken = await generateTwoFactorToken(existingUser.email);
				await send2FAEmail(existingUser.email, twoFactorToken.token);
				return { twoFactor: true };
			}
		}

		await signIn("credentials", {
			email,
			password,
			redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});

		await logActivity("info", `Successful login for user: ${email}`);

		return { success: "Login successful" };
	} catch (error: any) {
		await logActivity("error", `Error during login: ${error.message}`);

		if (error instanceof AuthError) {
			return { error: "Invalid credentials" };
		} else {
			throw error;
		}
	}
};
