import { z } from "zod";

export const dataImportFileSchema = z.object({
	name: z.string().min(1, "File name is required"),
	size: z.number().positive("File size must be greater than 0"),
	type: z.string().refine(
		(value) =>
			[
				"text/csv", //csv
				"application/vnd.ms-excel", //xls
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //xlsx
			].includes(value),
		"Invalid file type"
	),
});

export const fileArchiveSchema = z.object({
	name: z.string().min(1, "File name is required"),
	size: z.number().positive("File size must be greater than 0"),
	type: z.string().refine(
		(value) =>
			[
				"text/plain", // txt
				"text/csv", // csv
				"application/pdf", // pdf
				"application/msword", // doc
				"application/vnd.ms-excel", // xls
				"application/vnd.ms-powerpoint", // ppt
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //xlsx
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
				"application/vnd.openxmlformats-officedocument.presentationml.presentation", // pptx
				"application/zip", // zip
				"image/jpeg", // jpeg
				"image/png", // png
				"audio/mpeg", // mp3
				"video/mp4", // mp4
			].includes(value),
		"File type not supported"
	),
});
export const reportFileSchema = z.object({
	name: z.string().min(1, "File name is required"),
	size: z.number().positive("File size must be greater than 0"),
	type: z.string().refine(
		(value) =>
			[
				"text/csv", // csv
			].includes(value),
		"File type not supported"
	),
});

export const fileSchema = z.object({
	id: z.string(),
	name: z.string(),
	size: z.number(),
	mimeType: z.string(),
	location: z.string(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

export type DataImportFile = z.infer<typeof dataImportFileSchema>;
export type FileArchive = z.infer<typeof fileArchiveSchema>;
export type ReportFile = z.infer<typeof reportFileSchema>;
export type File = z.infer<typeof fileSchema>;
