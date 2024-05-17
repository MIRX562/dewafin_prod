"use server";
import { db } from "@/lib/db";

export const getNotes = async () => {
  try {
    const notes = await db.note.findMany({});
    return notes;
  } catch (error) {
    return null;
  }
};

export const getNoteByUserId = async (userId: string) => {
  try {
    const notes = await db.note.findMany({
      where: {
        userId,
      },
    });
    return notes;
  } catch (error) {
    return null;
  }
};

export interface AllNote {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  user: { name: string } | null;
  isPublic: boolean;
}

export const getAllNotes = async (userId: string) => {
  try {
    const notes = await db.note.findMany({
      where: {
        OR: [
          { userId }, // Retrieve notes belonging to the current user
          { isPublic: true }, // Retrieve public notes
        ],
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        isPublic: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });
    return notes;
  } catch (error) {
    return null;
  }
};

export const getNoteById = async (id: string) => {
  try {
    const note = await db.note.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
    return note;
  } catch (error) {
    return console.error({ error: error, data: null });
  }
};
