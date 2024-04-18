'use server';

import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';
import { Reset, ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export const reset = async (values: Reset) => {
	const validatedFields = ResetSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid email' };
	}

	const { email } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser) {
		return { error: 'Email not Found' };
	}

	const passwordResetToken = await generatePasswordResetToken(email);
	await sendPasswordResetEmail(
		passwordResetToken.email,
		passwordResetToken.token
	);

	return { success: 'Reset Email Sent' };
};
