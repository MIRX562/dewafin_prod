import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { Note, Task } from "@prisma/client";

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

export interface AllTasks extends Task {
	employee: {
		firstName: string;
		lastName: string;
	};
}

export const getAllTasks = async () => {
	const userId = await currentUserId();
	if (!userId) {
		return null;
	}

	try {
		const tasks = await db.task.findMany({
			where: {
				userId,
			},
			include: {
				employees: {
					select: {
						firstName: true,
						lastName: true,
						department: true,
					},
				},
			},
		});
	} catch (error) {}
};
