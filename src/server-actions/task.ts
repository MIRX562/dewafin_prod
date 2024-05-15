"use server";

import { getEmployeeById } from "@/data/employee";
import { getTaskById, getTaskByTitle } from "@/data/task";
import { db } from "@/lib/db";
import { currentUser } from "@/lib/sessionUser";
import { AddTask, addTaskSchema, EditTask } from "@/schemas/task";
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

	const existingTask = await getTaskByTitle(data.title);
	if (existingTask) {
		return { error: "Task already exist" };
	}

	try {
		const newTask = await db.task.create({
			data: {
				...data,
				userId: user.id,
			},
		});

		const employee = await getEmployeeById(data.employeeId);
		if (!employee) {
			return { error: "no employee found" };
		}

		if (data.reportUrl)
			await db.report.create({
				data: {
					userId: user.id,
					title: data.title,
					filePath: data.reportUrl,
					taskId: newTask.id,
					department: employee?.role,
				},
			});

		revalidatePath("/tasks");

		return {
			success: "Success Creating New Task",
		};
	} catch (error) {
		return { error: "Something wen't wrong" };
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

		return { success: "Task is Deleted" };
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

export const editTask = async (
	taskData: EditTask,
	taskId: string | undefined
): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	const dbTask = await getTaskById(taskId);

	if (!dbTask) {
		return { error: "Task not found in database" };
	}

	try {
		await db.task.update({
			where: { id: dbTask.id },
			data: taskData,
		});
		revalidatePath("/tasks");

		return { success: "Task data successfully updated" };
	} catch (error) {
		return { error: `Failed to update task data` };
	}
};
