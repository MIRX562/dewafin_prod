import { UserRole } from "@prisma/client";
import { z } from "zod";

/**
 * Schema for a user.
 * This schema validates a task's ID, title, status, label, and priority.
 */
export const UserSchema = z.object({
  id: z.string().default(""),
  name: z.string().nullable(),
  email: z.optional(
    z.string().email({ message: "Invalid email address" }).nullable(),
  ),
  image: z.string().nullable(),
  role: z.enum([UserRole.ADMIN, UserRole.USER]).default(UserRole.USER),
  isTwoFactorEnabled: z.boolean().default(false),
});

export const AddUserSchema = z.object({
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
      "Password must contain at least one special character",
    ),
  image: z.string().optional(),
  role: z.enum([UserRole.ADMIN, UserRole.USER]).default(UserRole.USER),
  isTwoFactorEnabled: z.boolean().default(false),
});
export const EditUserSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  image: z.string().optional(),
  role: z.nativeEnum(UserRole).default(UserRole.USER),
  isTwoFactorEnabled: z.boolean().default(false),
});

export type User = z.infer<typeof UserSchema>;
export type AddUser = z.infer<typeof AddUserSchema>;
export type EditUser = z.infer<typeof EditUserSchema>;
