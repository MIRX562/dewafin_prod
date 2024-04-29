import { UserRole } from "@prisma/client";
import { z } from "zod";

/**
 * Schema for user settings.
 * This schema validates the user's settings including name, role, email, password, and two-factor authentication.
 * It includes refinement checks to ensure password and new password requirements are met.
 */
export const EditUserProfileSchema = z
	.object({
		name: z.optional(
			z.string().max(50, { message: "Name cannot exceed 50 characters" })
		),
		isTwoFactorEnabled: z.boolean().optional(),
		role: z.enum([UserRole.ADMIN, UserRole.USER]),
		email: z.string().email({ message: "Invalid email" }).optional(),
		password: z.optional(
			z
				.string()
				.min(8, {
					message: "Password must be at least 8 characters long",
				})
				.regex(/[a-zA-Z]/, "Password must contain at least one letter")
				.regex(/[0-9]/, "Password must contain at least one number")
				.regex(
					/[!@#$%^&*]/,
					"Password must contain at least one special character"
				)
		),
		newPassword: z
			.string()
			.min(8, {
				message: "New password must be at least 8 characters long",
			})
			.regex(/[a-zA-Z]/, "Password must contain at least one letter")
			.regex(/[0-9]/, "Password must contain at least one number")
			.regex(
				/[!@#$%^&*]/,
				"Password must contain at least one special character"
			)
			.optional(),
	})
	.superRefine((data, ctx) => {
		if (data.password && !data.newPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "New Password is required if password is provided",
				path: ["newPassword"],
			});
		}
		if (data.newPassword && !data.password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Password is required if new password is provided",
				path: ["password"],
			});
		}
	});

/**
 * Schema for user login.
 * This schema validates the user's email and password during login.
 */
export const LoginSchema = z.object({
	email: z.string().email({
		message: "Invalid email address",
	}),
	password: z.string().min(1, { message: "Password is required" }),
	code: z.string().optional(),
});

/**
 * Schema for updating user's password.
 * This schema validates the user's new password and ensures it meets the required complexity.
 */
export const NewPasswordSchema = z.object({
	password: z
		.string()
		.min(8, { message: "Minimum 8 characters required" })
		.regex(/[a-zA-Z]/, "Password must contain at least one letter")
		.regex(/[0-9]/, "Password must contain at least one number")
		.regex(
			/[!@#$%^&*]/,
			"Password must contain at least one special character"
		),
});

/**
 * Schema for resetting a user's password.
 * This schema validates the user's email address for password reset.
 */
export const ResetSchema = z.object({
	email: z.string().email({
		message: "Invalid email address",
	}),
});

/**
 * Schema for user registration.
 * This schema validates the user's name, email, and password during registration.
 */
export const RegisterSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Name is required" })
		.max(50, { message: "Name cannot exceed 50 characters" }),
	email: z.string().email({
		message: "Invalid email address",
	}),
	password: z
		.string()
		.min(8, { message: "Minimum 8 characters required" })
		.regex(/[a-zA-Z]/, "Password must contain at least one letter")
		.regex(/[0-9]/, "Password must contain at least one number")
		.regex(
			/[!@#$%^&*]/,
			"Password must contain at least one special character"
		),
});

// Define Zod schema for the Customer model
export const CustomerSchema = z.object({
	id: z.number(),
	email: z.string(),
	phone: z.string().nullable(),
	address: z.string().nullable(),
	companyId: z.number().nullable(),
	company: z.object({ id: z.number() }).nullable(), // Assuming CompanySchema is defined elsewhere
	website: z.string().nullable(),
	taxId: z.string().nullable(),
	notes: z.string().nullable(),
});

// Define Zod schema for the Subscription model
export const SubscriptionSchema = z.object({
	id: z.number(),
	customerId: z.number(),
	planId: z.number(),
	startDate: z.date(),
	endDate: z.date().nullable(),
	isActive: z.boolean(),
	customer: CustomerSchema,
	plan: z.object({ id: z.number() }).nullable(), // Assuming PlanSchema is defined elsewhere
});

// Define Zod schema for the Company model
export const CompanySchema = z.object({
	id: z.number(),
	name: z.string(),
	address: z.string().nullable(),
	website: z.string().nullable(),
	taxId: z.string().nullable(),
	customers: z.array(CustomerSchema), // Assuming CustomerSchema is defined elsewhere
});

// Define Zod schema for the Invoice model
export const InvoiceSchema = z.object({
	id: z.number(),
	customerId: z.number(),
	number: z.string(),
	issueDate: z.date(),
	dueDate: z.date().nullable(),
	amount: z.number(),
	status: z.string(),
	customer: CustomerSchema,
});

// Define Zod schema for the Plan model
export const PlanSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	price: z.number(),
	features: z.string().nullable(),
	subscriptions: z.array(SubscriptionSchema), // Assuming SubscriptionSchema is defined elsewhere
});

// Define type exports for each schema
export type Login = z.infer<typeof LoginSchema>;
export type NewPassword = z.infer<typeof NewPasswordSchema>;
export type Reset = z.infer<typeof ResetSchema>;
export type Register = z.infer<typeof RegisterSchema>;
export type EditUserProfile = z.infer<typeof EditUserProfileSchema>;
