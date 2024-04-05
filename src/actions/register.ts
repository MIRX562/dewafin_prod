'use server';

import { RegisterSchema } from '@/schemas';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificatioToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
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
