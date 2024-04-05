'use server';

import { getUserByEmail } from '@/data/user';
import { signIn } from '@/lib/auth';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificatioToken } from '@/lib/tokens';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(values);
	if (!validatedFields.success) {
		return { error: 'invalid inputs' };
	}

	const { email, password } = validatedFields.data;

	const existingUser = await getUserByEmail(email);
	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { error: 'invalid credentials' };
	}
	if (!existingUser.emailVerified) {
		const verificationToken = await generateVerificatioToken(
			existingUser.email
		);
		await sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);
		return { success: 'Confirmation email have been resent' };
	}

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid Credentials' };

				default:
					return { error: 'Something Went Wrong' };
			}
		}
		throw error;
	}
};
