"use server";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { currentUser } from "@/lib/sessionUser";
import { AddTask, addTaskSchema, EditTask } from "@/schemas/task";
import { TaskStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

type RegisterResponse = {
	error?: string;
	success?: string;
};

export const addTask = async (values: AddTask): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	const validatedFields = addTaskSchema.safeParse(values);
	if (!validatedFields.success) {
		console.log("Invalid inputs:", values);
		return { error: "Invalid inputs provided" };
	}

	const data = validatedFields.data;

	try {
		const newTask = await db.task.create({
			data: {
				...data,
			},
		});

		revalidatePath("/tasks");

		await logActivity("info", `New task created: ${newTask.id}`);

		return {
			success: "Success Creating New Task",
		};
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to create new task");

		return { error: "Something went wrong" };
	}
};

export const deleteTask = async (taskId: string): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}
	try {
		await db.task.delete({
			where: {
				id: taskId,
			},
		});
		revalidatePath("/tasks");

		await logActivity("info", `Task deleted: ${taskId}`);

		return { success: "Task is Deleted" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to delete task");

		return { error: "Something went wrong" };
	}
};

export const editTask = async (
	taskData: EditTask,
	id: string
): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	try {
		await db.task.update({
			where: { id },
			data: taskData,
		});
		revalidatePath("/tasks");

		await logActivity("info", `Task updated: ${id}`);

		return { success: "Task data successfully updated" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to update task");

		return { error: `Failed to update task data` };
	}
};

export const updateTaskStatus = async (
	status: TaskStatus,
	id: string
): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	try {
		await db.task.update({
			where: { id },
			data: {
				status,
			},
		});
		revalidatePath("/tasks");

		await logActivity("info", `Task status updated: ${id}`);

		return { success: "Task data successfully updated" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to update task status");

		return { error: `Failed to update task data` };
	}
};
