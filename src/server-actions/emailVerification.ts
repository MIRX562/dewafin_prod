"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verificationToken";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";

type EmailVerificationResponse = {
	error?: string;
	success?: string;
};

export const emailVerification = async (
	token: string
): Promise<EmailVerificationResponse> => {
	try {
		const existingToken = await getVerificationTokenByToken(token);

		if (!existingToken) {
			throw new Error("The provided token is invalid");
		}

		const isTokenExpired = new Date(existingToken.expires) < new Date();
		if (isTokenExpired) {
			throw new Error("The provided token has expired");
		}

		const existingUser = await getUserByEmail(existingToken.email);
		if (!existingUser) {
			throw new Error("No user found with the associated email");
		}

		await db.user.update({
			where: { id: existingUser.id },
			data: {
				emailVerified: new Date(),
				email: existingToken.email,
			},
		});

		await db.verificationToken.delete({
			where: { id: existingToken.id },
		});

		await logActivity("info", "Email verified successfully");

		return { success: "Email verified successfully" };
	} catch (error: any) {
		await logActivity("error", `Email verification failed: ${error.message}`);

		return { error: error.message };
	}
};
