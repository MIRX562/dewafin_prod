'use server';

import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';
import { Reset, ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

type ResetResponse = {
	error?: string;
	success?: string;
};

export const reset = async (values: Reset): Promise<ResetResponse> => {
	// Validate the provided email using the schema
	const validatedFields = ResetSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid email format' };
	}

	const { email } = validatedFields.data;

	// Check if a user with the provided email exists
	const existingUser = await getUserByEmail(email);
	if (!existingUser) {
		return { error: 'Email not found' };
	}

	// Generate a password reset token
	const passwordResetToken = await generatePasswordResetToken(email);

	// Send the password reset email
	await sendPasswordResetEmail(
		passwordResetToken.email,
		passwordResetToken.token
	);

	// Return a success message
	return { success: 'Password reset email has been sent' };
};
