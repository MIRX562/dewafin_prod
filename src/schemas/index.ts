import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const settingsSchema = z
	.object({
		name: z.optional(z.string()),
		isTwoFactorEnabled: z.optional(z.boolean()),
		role: z.enum([UserRole.ADMIN, UserRole.USER]),
		email: z.optional(z.string().email()),
		password: z.optional(z.string().min(8)),
		newPassword: z.optional(z.string().min(8)),
	})
	.refine(
		(data) => {
			if (data.password && !data.newPassword) {
				return false;
			}
			return true;
		},
		{
			message: 'New Password is required',
			path: ['newPaswword'],
		}
	)
	.refine(
		(data) => {
			if (data.newPassword && !data.password) {
				return false;
			}
			return true;
		},
		{
			message: 'Password is required',
			path: ['newPaswword'],
		}
	);

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

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	status: z.string(),
	label: z.string(),
	priority: z.string(),
});

// Define type exports for each schema
export type Settings = z.infer<typeof settingsSchema>;
export type Login = z.infer<typeof LoginSchema>;
export type NewPassword = z.infer<typeof NewPasswordSchema>;
export type Reset = z.infer<typeof ResetSchema>;
export type Register = z.infer<typeof RegisterSchema>;
export type Task = z.infer<typeof taskSchema>;
