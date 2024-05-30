import { db } from "@/lib/db";
import { Task, TaskStatus } from "@prisma/client";

export interface TaskWithRelations extends Task {
	employees: {
		department: string;
		firstName: string;
		lastName: string;
		id: string;
	}[];
	user: {
		name: string;
	} | null;
}

export type GroupedTasks = {
	[status in TaskStatus]?: TaskWithRelations[];
};

const groupTasksByStatus = (tasks: TaskWithRelations[]): GroupedTasks => {
	return tasks.reduce((groups, task) => {
		const { status } = task;
		if (!groups[status]) {
			groups[status] = [];
		}
		groups[status]?.push(task);
		return groups;
	}, {} as GroupedTasks);
};

export const getAllTasks = async (): Promise<TaskWithRelations[] | null> => {
	try {
		const tasks = await db.task.findMany({
			where: { isArchived: false },
			include: {
				employees: {
					select: {
						department: true,
						firstName: true,
						lastName: true,
						id: true,
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

		return tasks;
	} catch (error) {
		console.error(error);
		return null;
	}
};
export const getGroupedTasksByUserIdAndEmployeeId = async (
	userId: any,
	employeeId: any
): Promise<TaskWithRelations[] | null> => {
	try {
		const tasks = await db.task.findMany({
			where: {
				isArchived: false,
				OR: [{ userId: userId }, { employees: { some: { id: employeeId } } }],
			},
			include: {
				employees: {
					select: {
						department: true,
						firstName: true,
						lastName: true,
						id: true,
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

		return tasks;
	} catch (error) {
		console.error(error);
		return null;
	}
};
