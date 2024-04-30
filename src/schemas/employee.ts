import { EmployeeRole, Status } from "@prisma/client";
import { z } from "zod";

// Define Zod schema for the Employee model
export const EmployeeSchema = z.object({
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
	phoneNumber: z.string(),
	role: z.nativeEnum(EmployeeRole),
	isActive: z.nativeEnum(Status),
	hireDate: z.date(),
});
export const AddEmployeeSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
	phoneNumber: z.string(),
	role: z.nativeEnum(EmployeeRole),
	hireDate: z.date(),
});
export const EditEmployeeSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
	phoneNumber: z.string(),
	role: z.nativeEnum(EmployeeRole),
	isActive: z.nativeEnum(Status),
	hireDate: z.date(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type AddEmployee = z.infer<typeof AddEmployeeSchema>;
export type EditEmployee = z.infer<typeof EditEmployeeSchema>;
