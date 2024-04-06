import * as z from 'zod';

export const LoginSchema = z.object({
	email: z.string().email({
		message: 'invalid email',
	}),
	password: z.string().min(1, { message: 'password is required' }),
	code: z.optional(z.string()),
});

export const NewPasswordSchema = z.object({
	password: z.string().min(8, { message: 'Minimun 8 Character is Required' }),
});

export const ResetSchema = z.object({
	email: z.string().email({
		message: 'invalid email',
	}),
});

export const RegisterSchema = z.object({
	name: z.string().min(1, { message: 'name is required' }),
	email: z.string().email({
		message: 'invalid email',
	}),
	password: z.string().min(8, { message: 'Minimun 8 Character is Required' }),
});
