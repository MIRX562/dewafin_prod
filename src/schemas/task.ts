import { Priority, TaskStatus } from "@prisma/client";
import { z } from "zod";

export const taskSchema = z.object({
	id: z.string(),
	title: z.string(),
	userId: z.string(),
	employeeId: z.optional(z.string().nullable()),
	description: z.optional(z.string().nullable()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
});

export const addTaskSchema = z.object({
	title: z.string(),
	employeeId: z.string(),
	description: z.optional(z.string()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
	reportUrl: z.optional(z.string()),
});

export const editTaskSchema = z.object({
	id: z.string(),
	title: z.string(),
	employeeId: z.optional(z.string().nullable()),
	description: z.optional(z.string().nullable()),
	startDate: z.date(),
	endDate: z.date(),
	status: z.nativeEnum(TaskStatus),
	priority: z.nativeEnum(Priority),
});

export type AddTask = z.infer<typeof addTaskSchema>;
export type EditTask = z.infer<typeof editTaskSchema>;
