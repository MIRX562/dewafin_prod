"use server";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { currentUserId } from "@/lib/sessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type RegisterResponse = {
	error?: string;
	success?: string;
};

export async function createNote(
	userId: string,
	title: string,
	content: string,
	isPublic: boolean
) {
	try {
		const newNote = await db.note.create({
			data: {
				userId,
				title,
				content,
				isPublic,
			},
		});

		await logActivity("info", `Note created: ${title}`);

		revalidatePath("/notes");
		redirect(`/notes/${newNote.title}?id=${newNote.id}`);
	} catch (error) {
		console.error("Error creating note:", error);
		throw error;
	}
}

export const deleteNote = async (id: string): Promise<RegisterResponse> => {
	const user = await currentUserId();
	if (!user) return { error: "Not Authorized" };

	try {
		const note = await db.note.findUnique({ where: { id } });
		if (!note) return { error: "Note not found" };

		await logActivity("info", `Note deleted: ${note.title}`);

		await db.note.delete({
			where: {
				id,
			},
		});

		return { success: "Note is Deleted" };
	} catch (error) {
		return { error: "Something went wrong" };
	}
};

export async function updateNote({
	id,
	title,
	content,
	isPublic,
}: {
	id: string;
	title: string;
	content: string;
	isPublic: boolean;
}) {
	try {
		const originalNote = await db.note.findUnique({ where: { id } });
		if (!originalNote) return { error: "Note not found" };

		const updatedNote = await db.note.update({
			where: { id },
			data: { title, content, isPublic },
		});

		return updatedNote;
	} catch (error) {
		console.error("Error updating note title:", error);
		throw error;
	}
}
