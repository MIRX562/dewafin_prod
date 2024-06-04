"use server";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import {
	sendTaskAssignmentNotification,
	sendTaskCompletionNotification,
} from "@/lib/mail";
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
	const employees = data.employeeIds;

	try {
		const newTask = await db.task.create({
			data: {
				title: data.title,
				description: data.description,
				startDate: data.startDate,
				endDate: data.endDate,
				status: data.status,
				priority: data.priority,
				reportUrl: data.reportUrl,
				userId: data.userId,
				employees: {
					connect: employees.map((employeeId: string) => ({
						id: employeeId,
					})),
				},
			},
			include: {
				employees: {
					select: {
						email: true,
					},
				},
			},
		});

		revalidatePath("/tasks");

		await logActivity("info", `New task created: ${newTask.id}`);

		for (const employee of newTask.employees) {
			await sendTaskAssignmentNotification(employee.email, newTask.title);
		}

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

	const { employeeIds, ...taskDetails } = taskData;
	if (!employeeIds) return { error: "no employee ids" };

	try {
		const existingTask = await db.task.findUnique({
			where: { id },
			include: { employees: true },
		});

		const currentEmployeeIds =
			existingTask?.employees.map((employee) => employee.id) || [];

		const idsToDisconnect = currentEmployeeIds.filter(
			(id) => !employeeIds.includes(id)
		);

		const idsToConnect = employeeIds.filter(
			(id) => !currentEmployeeIds.includes(id)
		);

		await db.task.update({
			where: { id },
			data: {
				...taskDetails,
				employees: {
					disconnect: idsToDisconnect.map((employeeId) => ({ id: employeeId })),
					connect: idsToConnect.map((employeeId) => ({ id: employeeId })),
				},
			},
			include: { employees: true },
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
		const updatedTask = await db.task.update({
			where: { id },
			data: {
				status,
			},
			include: {
				user: {
					select: {
						email: true,
					},
				},
			},
		});

		revalidatePath("/tasks");

		if (status === TaskStatus.FINISHED) {
			await sendTaskCompletionNotification(
				updatedTask.user.email,
				updatedTask.title
			);
		}

		await logActivity("info", `Task status updated: ${id}`);

		return { success: "Task data successfully updated" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to update task status");

		return { error: `Failed to update task data` };
	}
};

export const archiveTask = async (id: string): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	try {
		const task = await db.task.update({
			where: { id },
			data: {
				isArchived: true,
			},
		});

		await logActivity("info", `Task Archived: ${task.title}`);

		return { success: "Task successfully archived" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to archive task ");

		return { error: `Failed to archived task ` };
	}
};

export const restoreTask = async (id: string): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	try {
		await db.task.update({
			where: { id },
			data: {
				isArchived: false,
			},
		});
		revalidatePath("/tasks/archived");

		await logActivity("info", `Task Restored: ${id}`);

		return { success: "Task successfully restored" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to restore task ");

		return { error: `Failed to restore task ` };
	}
};
