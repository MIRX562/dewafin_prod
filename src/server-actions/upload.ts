"use server";
import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { objectFile } from "@/types/file";
import { File } from "@prisma/client";
import { unlink } from "fs";
import { access, writeFile } from "fs/promises";
import { join } from "path";

// Helper function to check if a file exists
export const fileExists = async (filePath: string): Promise<boolean> => {
	try {
		await access(filePath);
		return true;
	} catch (error) {
		return false;
	}
};

export const upload = async (data: FormData) => {
	try {
		// Ensure user is authenticated
		const userId = await currentUserId();
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
		const publicPath = join(process.cwd(), "public/upload", file.name);

		// Check if a file with the same name already exists
		try {
			await access(publicPath); // Check if file exists
			throw new Error("File already exists");
		} catch (error: any) {
			// If file does not exist, proceed with file upload
			if (error.code === "ENOENT") {
				// Save the file to the specified path asynchronously
				await writeFile(publicPath, buffer);

				// Save file metadata to the database using Prisma
				const newFile = await db.file.create({
					data: {
						fileName: file.name,
						size: file.size,
						mimeType: file.type,
						location: publicPath,
						userId,
					},
				});

				// Return success response
				return { success: true, filename: file.name };
			} else {
				// If file exists, throw an error indicating file duplication
				throw new Error("File with the same name already exists");
			}
		}
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
		const filePath = file.location;

		// Check if the file exists
		const Exists = await fileExists(filePath);
		if (!Exists) {
			throw new Error("File not found");
		}

		// Delete the file from the filesystem
		await unlink(filePath, () => {});

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
