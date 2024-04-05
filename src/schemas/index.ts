import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({
		message: 'invalid email',
	}),
	password: z.string().min(1, { message: 'password is required' }),
});

export const RegisterSchema = z.object({
	name: z.string().min(1, { message: 'name is required' }),
	email: z.string().email({
		message: 'invalid email',
	}),
	password: z.string().min(8, { message: 'Minimun 8 Character is Required' }),
});
