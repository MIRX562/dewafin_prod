'use server';

import { getTwoFactorConfirmationByUserId } from '@/data/twoFactorConfirmation';
import {
	generateVerificationToken,
	generateTwoFactorToken,
} from '@/lib/tokens';
import { getTwoFactorTokenByEmail } from '@/data/twoFactorToken';
import { sendVerificationEmail, send2FAEmail } from '@/lib/mail';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { Login, LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { AuthError } from 'next-auth';
import { signIn } from '@/lib/auth';
import { db } from '@/lib/db';

type LoginResponse = {
	error?: string;
	success?: string;
	twoFactor?: boolean;
};

export const login = async (
	values: Login,
	callbackUrl?: string | null
): Promise<LoginResponse> => {
	// Validate input data using the schema
	const validatedFields = LoginSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: 'Invalid inputs' };
	}

	const { email, password, code } = validatedFields.data;

	// Retrieve existing user by email
	const existingUser = await getUserByEmail(email);
	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { error: 'Invalid credentials' };
	}

	// Check if the user's email is verified
	if (!existingUser.emailVerified) {
		const verificationToken = await generateVerificationToken(
			existingUser.email
		);
		await sendVerificationEmail(existingUser.email, verificationToken.token);
		return {
			success: 'Confirmation email has been resent. Please verify your email.',
		};
	}

	// Handle two-factor authentication (2FA)
	if (existingUser.isTwoFactorEnabled) {
		if (code) {
			// Check 2FA code
			const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
			if (!twoFactorToken || twoFactorToken.token !== code) {
				return { error: 'Invalid 2FA code' };
			}

			const hasExpired = new Date(twoFactorToken.expires) < new Date();
			if (hasExpired) {
				return { error: '2FA code expired' };
			}

			// Delete used 2FA token and confirmation
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
			// Generate and send 2FA code
			const twoFactorToken = await generateTwoFactorToken(existingUser.email);
			await send2FAEmail(existingUser.email, twoFactorToken.token);
			return { twoFactor: true };
		}
	}

	// Attempt to sign in using provided credentials
	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		// Handle authentication errors
		if (error instanceof AuthError) {
			return { error: 'Invalid credentials' };
		} else {
			throw error;
		}
	}

	return { success: 'Login successful' };
};
