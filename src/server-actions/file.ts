"use server";

import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { currentUserId } from "@/lib/sessionUser";
import { File } from "@/schemas/file";
import { objectFile } from "@/types/file";
import { createReadStream } from "fs";
import { access, mkdir, unlink, writeFile } from "fs/promises";
import { NextApiResponse } from "next";
import { dirname, join } from "path";

const ensureDirectoryExists = async (filePath: string) => {
	const dir = dirname(filePath);
	try {
		await mkdir(dir, { recursive: true });
	} catch (error: any) {
		if (error.code !== "EEXIST") {
			throw error;
		}
	}
};

export const upload = async (data: FormData) => {
	try {
		const userId: string | undefined = await currentUserId();
		if (!userId) {
			throw new Error("Not authenticated");
		}

		const file = data.get("file") as objectFile;
		if (!file) {
			throw new Error("No file uploaded");
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		const publicPath = join("public/upload", file.name);

		await ensureDirectoryExists(join(process.cwd(), publicPath));

		try {
			await access(publicPath);
			throw new Error("File with the same name already exists");
		} catch (error: any) {
			if (error.code !== "ENOENT") {
				throw error;
			}
		}

		await writeFile(publicPath, buffer);

		const newFile = await db.file.create({
			data: {
				name: file.name,
				size: file.size,
				mimeType: file.type,
				location: publicPath,
			},
		});

		await logActivity("info", `File uploaded: ${file.name}`);

		return { success: true, filename: file.name };
	} catch (error: any) {
		await logActivity("error", `Error saving file: ${error.message}`);

		throw new Error("File save failed: " + error.message);
	}
};

export const deleteFile = async (file: File) => {
	const userId = await currentUserId();
	if (!userId) {
		throw new Error("Not authenticated");
	}

	try {
		const filePath = join(process.cwd(), file.location);

		try {
			await access(filePath);
		} catch (error: any) {
			if (error.code === "ENOENT") {
				throw new Error("File not found");
			} else {
				throw error;
			}
		}

		await unlink(filePath);

		await logActivity("info", `File deleted: ${file.name}`);

		await db.file.delete({
			where: {
				id: file.id,
			},
		});

		return { success: true, message: "File deleted successfully" };
	} catch (error: any) {
		await logActivity("error", `Error deleting file: ${error.message}`);

		throw new Error("File deletion failed: " + error.message);
	}
};

export const downloadFile = async (fileId: string, res: NextApiResponse) => {
	const userId = await currentUserId();
	if (!userId) {
		res.status(401).json({ error: "Not authenticated" });
		return;
	}

	try {
		const file = await db.file.findUnique({
			where: { id: fileId },
		});

		if (!file) {
			res.status(404).json({ error: "File not found" });
			return;
		}

		const filePath = join(process.cwd(), file.location);

		try {
			await access(filePath);
		} catch (error: any) {
			if (error.code === "ENOENT") {
				res.status(404).json({ error: "File not found" });
				return;
			} else {
				throw error;
			}
		}

		const fileStream = createReadStream(filePath);
		res.setHeader("Content-Disposition", `attachment; filename=${file.name}`);
		res.setHeader("Content-Type", file.mimeType);

		fileStream.pipe(res);

		await logActivity("info", `File downloaded: ${file.name}`);
	} catch (error: any) {
		await logActivity("error", `Error downloading file: ${error.message}`);

		res.status(500).json({ error: "Internal Server Error" });
	}
};
