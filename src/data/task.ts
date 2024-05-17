import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { TaskStatus } from "@prisma/client";

export const getTaskByTitle = async (title: string) => {
	try {
		const task = await db.task.findFirst({
			where: {
				title,
			},
		});
		return task;
	} catch (error) {
		return null;
	}
};
export const getTaskById = async (id: string | undefined) => {
	try {
		const task = await db.task.findUnique({
			where: {
				id,
			},
		});
		return task;
	} catch (error) {
		return null;
	}
};

export const getTasks = async () => {
	try {
		const task = await db.task.findMany({
			include: {
				employee: {
					select: {
						department: true,
						firstName: true,
						lastName: true,
					},
				},
				report: {
					select: {
						title: true,
						filePath: true,
					},
				},
				user: {
					select: {
						name: true,
					},
				},
			},
		});
		return task;
	} catch (error) {
		return null;
	}
};

export const getTaskByStatus = async (status: TaskStatus) => {
	const userId = await currentUserId();
	try {
		const task = await db.task.findMany({
			where: {
				status,
				userId,
			},
			include: {
				employee: {
					select: {
						department: true,
					},
				},
			},
		});
		return task;
	} catch (error) {
		return null;
	}
};
