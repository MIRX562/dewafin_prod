'use server';

import { getResetPasswordTokenByToken } from '@/data/passwordResetToken';
import { NewPassword, NewPasswordSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const newPassword = async (
	values: NewPassword,
	token?: string | null
) => {
	if (!token) {
		return { error: 'Missing Token' };
	}
	const validatedFields = NewPasswordSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: 'Invalid fields' };
	}

	const { password } = validatedFields.data;

	const existingToken = await getResetPasswordTokenByToken(token);

	if (!existingToken) {
		return { error: 'Invalid token' };
	}

	const hasExpired = new Date(existingToken.expires) < new Date();

	if (hasExpired) {
		return { error: 'Token has expired' };
	}

	const existingUser = await getUserByEmail(existingToken.email);
	if (!existingUser) {
		return { error: 'Email does not exist' };
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	await db.user.update({
		where: {
			id: existingUser.id,
		},
		data: { password: hashedPassword },
	});

	await db.passwordResetToken.delete({
		where: {
			id: existingToken.id,
		},
	});

	return { success: 'Password updated' };
};
