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
    "Invalid file type",
  ),
});

export type DataImportFile = z.infer<typeof dataImportFileSchema>;
