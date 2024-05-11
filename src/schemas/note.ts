import { z } from "zod";

const noteSchema = z.object({
  title: z.string(),
  userId: z.string(),
  content: z.optional(z.string().nullable()),
  lastEdit: z.date(),
});

export type Note = z.infer<typeof noteSchema>;
