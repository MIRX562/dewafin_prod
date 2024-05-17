"use server";

import { db } from "@/lib/db";

export const getFiles = async () => {
  try {
    const files = await db.file.findMany();
    return files;
  } catch (error) {
    return null;
  }
};

export const getFileByUserId = async (userId: string) => {
  try {
    const files = await db.file.findMany({
      where: {
        userId,
      },
    });
    return files;
  } catch (error) {
    return null;
  }
};

export const getFileById = async (id: string) => {
  try {
    const file = await db.file.findUnique({
      where: {
        id,
      },
    });
    return file;
  } catch (error) {
    return null;
  }
};
