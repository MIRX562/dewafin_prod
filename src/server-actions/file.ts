"use server";
import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { File } from "@/schemas/file";
import { objectFile } from "@/types/file";
import { createReadStream } from "fs";
import { access, mkdir, unlink, writeFile } from "fs/promises";
import { NextApiResponse } from "next";
import { dirname, join } from "path";

// Helper function to ensure directory exists
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
		// Ensure user is authenticated
		const userId: string | undefined = await currentUserId();
		if (!userId) {
			throw new Error("Not authenticated");
		}

		// Check if file is present in FormData
		const file = data.get("file") as objectFile;
		if (!file) {
			throw new Error("No file uploaded");
		}

		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);

		// Construct the absolute path to the public folder
		const publicPath = join("public/upload", file.name);

		// Ensure the directory exists
		await ensureDirectoryExists(join(process.cwd(), publicPath));

		// Check if a file with the same name already exists
		try {
			await access(publicPath); // Check if file exists
			throw new Error("File with the same name already exists");
		} catch (error: any) {
			if (error.code !== "ENOENT") {
				throw error; // Rethrow error if it's not a "file not found" error
			}
		}

		// Save the file to the specified path asynchronously
		await writeFile(publicPath, buffer);

		// Save file metadata to the database using Prisma
		const newFile = await db.file.create({
			data: {
				name: file.name,
				size: file.size,
				mimeType: file.type,
				location: publicPath,
			},
		});

		// Return success response
		return { success: true, filename: file.name };
	} catch (error: any) {
		// Log detailed error information
		console.error("Error saving file:", error);

		// Throw a more descriptive error message
		throw new Error("File save failed: " + error.message);
	}
};

export const deleteFile = async (file: File) => {
	// Ensure user is authenticated
	const userId = await currentUserId();
	if (!userId) {
		throw new Error("Not authenticated");
	}

	try {
		// Construct the absolute path to the file
		const filePath = join(process.cwd(), file.location);

		// Check if the file exists
		try {
			await access(filePath);
		} catch (error: any) {
			if (error.code === "ENOENT") {
				throw new Error("File not found");
			} else {
				throw error;
			}
		}

		// Delete the file from the filesystem
		await unlink(filePath);

		// Delete the file record from the database using Prisma
		await db.file.delete({
			where: {
				id: file.id,
			},
		});

		// Return success message
		return { success: true, message: "File deleted successfully" };
	} catch (error: any) {
		console.error("Error deleting file:", error);
		throw new Error("File deletion failed: " + error.message);
	}
};
export const downloadFile = async (fileId: string, res: NextApiResponse) => {
	// Ensure user is authenticated
	const userId = await currentUserId();
	if (!userId) {
		res.status(401).json({ error: "Not authenticated" });
		return;
	}

	try {
		// Fetch the file metadata from the database
		const file = await db.file.findUnique({
			where: { id: fileId },
		});

		if (!file) {
			res.status(404).json({ error: "File not found" });
			return;
		}

		const filePath = join(process.cwd(), file.location);

		// Check if the file exists
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
	} catch (error: any) {
		console.error("Error downloading file:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
