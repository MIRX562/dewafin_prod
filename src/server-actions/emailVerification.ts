'use server';

import { getVerificationTokenByToken } from '@/data/verificationToken';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';

type EmailVerificationResponse = {
	error?: string;
	success?: string;
};

export const emailVerification = async (
	token: string
): Promise<EmailVerificationResponse> => {
	// Retrieve the existing verification token from the database
	const existingToken = await getVerificationTokenByToken(token);

	// Check if the token does not exist
	if (!existingToken) {
		return { error: 'The provided token is invalid' };
	}

	// Check if the token has expired
	const isTokenExpired = new Date(existingToken.expires) < new Date();
	if (isTokenExpired) {
		return { error: 'The provided token has expired' };
	}

	// Retrieve the user associated with the token's email
	const existingUser = await getUserByEmail(existingToken.email);
	if (!existingUser) {
		return { error: 'No user found with the associated email' };
	}

	// Update the user's email verification status and email
	await db.user.update({
		where: { id: existingUser.id },
		data: {
			emailVerified: new Date(),
			email: existingToken.email,
		},
	});

	// Delete the used verification token
	await db.verificationToken.delete({
		where: { id: existingToken.id },
	});

	// Return a success response indicating that the email has been verified
	return { success: 'Email verified successfully' };
};
