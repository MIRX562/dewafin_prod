import { Priority, TaskStatus } from "@prisma/client";
import { z } from "zod";

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	userId: z.string(),
	description: z.optional(z.string()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
	employeeId: z.optional(z.string()),
	reportUrl: z.optional(z.string()),
	isArchived: z.boolean(),
});

export const addTaskSchema = z.object({
	title: z.string(),
	userId: z.string(),
	description: z.optional(z.string()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
	employeeId: z.string(),
	reportUrl: z.optional(z.string()),
	isArchived: z.boolean(),
});

export const editTaskSchema = z.object({
	title: z.string(),
	userId: z.string(),
	description: z.optional(z.string()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
	employeeId: z.optional(z.string()),
	reportUrl: z.optional(z.string()),
	isArchived: z.boolean(),
});

export type AddTask = z.infer<typeof addTaskSchema>;
export type EditTask = z.infer<typeof editTaskSchema>;
