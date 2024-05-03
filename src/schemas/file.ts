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
				"application/pdf", // pdf
				"application/msword", // doc
				"application/vnd.openxmlformats-officedocument.wordprocessingml.document", //docx
				"application/vnd.ms-excel", // xls
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", //xlsx
				"application/vnd.ms-powerpoint", // ppt
				"application/vnd.openxmlformats-officedocument.presentationml.presentation", // pptx
				"text/plain", // txt
				"image/jpeg", // jpeg
				"image/png", // png
			].includes(value),
		"Invalid file type"
	),
});

export type DataImportFile = z.infer<typeof dataImportFileSchema>;
export type FileArchive = z.infer<typeof fileArchiveSchema>;
