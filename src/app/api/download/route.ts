// api/download.ts
import { db } from "@/lib/db";
import { currentUserId } from "@/lib/sessionUser";
import { readFile } from "fs/promises";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
	// Ensure user is authenticated
	const userId = await currentUserId();
	if (!userId) {
		return new Response("Not authenticated", { status: 401 });
	}

	try {
		const fileId = req.nextUrl.searchParams.get("fileId");
		if (!fileId) return;
		// Fetch the file metadata from the database
		const file = await db.file.findUnique({
			where: { id: fileId },
		});

		if (!file) {
			return new Response("File not found", { status: 404 });
		}

		const filePath = file.location;

		// Read the file from the specified path
		const fileData = await readFile(filePath);

		// Set response headers for file download
		const headers = {
			"Content-Disposition": `attachment; filename=${file.name}`,
			"Content-Type": file.mimeType,
		};

		// Return the file data as the response body
		return new Response(fileData, {
			status: 200,
			headers: headers,
		});
	} catch (error: any) {
		console.error("Error downloading file:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
}
