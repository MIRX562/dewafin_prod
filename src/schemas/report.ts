import { z } from "zod";

export const ReportSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.optional(z.string()),
	month: z.date(),
	data: z.any(),
	initial: z.bigint(),
	outcome: z.bigint(),
	refund: z.bigint(),
	final: z.bigint(),
	net: z.bigint(),
});

export type Report = z.infer<typeof ReportSchema>;
