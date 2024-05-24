import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { Task, TaskStatus } from "@prisma/client";

export interface TaskWithRelations extends Task {
	employee: {
		department: string;
		firstName: string;
		lastName: string;
	} | null;
	user: {
		name: string;
	} | null;
}

export type GroupedTasks = {
	[status in TaskStatus]?: TaskWithRelations[];
};

export const getGroupedTasksByStatus =
	async (): Promise<GroupedTasks | null> => {
		try {
			// Fetch all tasks including related data
			const tasks = await db.task.findMany({
				include: {
					employee: {
						select: {
							department: true,
							firstName: true,
							lastName: true,
						},
					},
					user: {
						select: {
							name: true,
						},
					},
				},
				orderBy: {
					priority: "asc",
				},
			});

			// Group tasks by status
			const groupedTasks: GroupedTasks = tasks.reduce((groups, task) => {
				const { status } = task;
				if (!groups[status]) {
					groups[status] = [];
				}
				groups[status]?.push(task);
				return groups;
			}, {} as GroupedTasks);

			return groupedTasks;
		} catch (error) {
			console.error(error);
			return null;
		}
	};

export const getGroupedTasksByStatusByUserId = async (
	userId: string
): Promise<GroupedTasks | null> => {
	try {
		// Fetch all tasks including related data
		const tasks = await db.task.findMany({
			where: { userId },
			include: {
				employee: {
					select: {
						department: true,
						firstName: true,
						lastName: true,
					},
				},
				user: {
					select: {
						name: true,
					},
				},
			},
			orderBy: {
				priority: "asc",
			},
		});

		// Group tasks by status
		const groupedTasks: GroupedTasks = tasks.reduce((groups, task) => {
			const { status } = task;
			if (!groups[status]) {
				groups[status] = [];
			}
			groups[status]?.push(task);
			return groups;
		}, {} as GroupedTasks);

		return groupedTasks;
	} catch (error) {
		console.error(error);
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
			orderBy: {
				priority: "asc",
			},
		});
		return task;
	} catch (error) {
		return null;
	}
};
