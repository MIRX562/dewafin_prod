"use server";
import { db } from "@/lib/db";
import { currentUser, currentUserId } from "@/lib/sessionUser";
import { Note, Priority, TaskStatus } from "@prisma/client";

export interface LatestPublicNotes extends Note {
	user: { name: string };
}

export const getLatestPublicNotes = async () => {
	const userId = await currentUserId();
	if (!userId) {
		return null;
	}

	try {
		const notes = await db.note.findMany({
			where: {
				isPublic: true,
			},
			select: {
				id: true,
				title: true,
				updatedAt: true,
				user: {
					select: {
						name: true,
					},
				},
			},
			orderBy: {
				updatedAt: "asc",
			},
		});
		return notes;
	} catch (error: any) {
		return null;
	}
};

interface DashboardTask {
	title: string;
	priority: Priority;
	status: TaskStatus;
	id: string;
}

export const getDashboardTask = async (
	userId: any,
	employeeId: any
): Promise<DashboardTask[] | null> => {
	try {
		const tasks = await db.task.findMany({
			where: {
				isArchived: false,
				OR: [
					{ userId: userId },
					{ employees: { some: { id: employeeId } } },
					{ status: TaskStatus.TODO },
					{ status: TaskStatus.IN_PROGRESS },
				],
			},
			select: {
				id: true,
				title: true,
				priority: true,
				status: true,
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

export interface StatisticsData {
	totalNotes: number;
	completedTasks: number;
	overdueTasks: number;
	taskCompletionRate: string;
}

export const getStatistics = async (): Promise<StatisticsData | null> => {
	const user = await currentUser();
	if (!user) {
		return null;
	}

	try {
		const totalNotes = await db.note.count({
			where: {
				userId: user.id,
			},
		});

		const completedTasks = await db.task.count({
			where: {
				status: "FINISHED",
				OR: [
					{ userId: user.id },
					{ employees: { some: { id: user.employeeId } } },
				],
			},
		});

		const overdueTasks = await db.task.count({
			where: {
				userId: user.id,
				status: {
					not: "FINISHED",
				},
				endDate: {
					lt: new Date(),
				},
			},
		});

		const totalTasks = await db.task.count({
			where: {
				userId: user.id,
			},
		});

		const taskCompletionRate =
			totalTasks > 0
				? `${((completedTasks / totalTasks) * 100).toFixed(2)}%`
				: "0%";

		return {
			totalNotes,
			completedTasks,
			overdueTasks,
			taskCompletionRate,
		};
	} catch (error) {
		console.error(error);
		return null;
	}
};
