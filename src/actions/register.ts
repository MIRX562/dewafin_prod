'use server';

import { generateVerificatioToken } from '@/lib/tokens';
import { Register, RegisterSchema } from '@/schemas';
import { sendVerificationEmail } from '@/lib/mail';
import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import bcrypt from 'bcryptjs';

export const register = async (values: Register) => {
	const validatedFields = RegisterSchema.safeParse(values);
	if (!validatedFields.success) {
		console.log(values);
		return { error: 'invalid inputs' };
	}
	const { email, password, name } = validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: 'Email already registered' };
	}

	await db.user.create({
		data: {
			name,
			email,
			password: hashedPassword,
		},
	});

	//! todo: send vrification email
	const verificationToken = await generateVerificatioToken(email);
	await sendVerificationEmail(verificationToken.email, verificationToken.token);

	return {
		success: 'Confirmation Email Sent',
	};
};
