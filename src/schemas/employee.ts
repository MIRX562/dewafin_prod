import { Department, Status } from "@prisma/client";
import { z } from "zod";

export const EmployeeSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  department: z.nativeEnum(Department),
  isActive: z.nativeEnum(Status),
  hireDate: z.date(),
  userId: z.optional(z.string().nullable()),
});
export const AddEmployeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  department: z.nativeEnum(Department),
  hireDate: z.date(),
  userId: z.optional(z.string().nullable()),
});
export const EditEmployeeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  department: z.nativeEnum(Department),
  isActive: z.nativeEnum(Status),
  hireDate: z.date(),
  userId: z.optional(z.string().nullable()),
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type AddEmployee = z.infer<typeof AddEmployeeSchema>;
export type EditEmployee = z.infer<typeof EditEmployeeSchema>;
