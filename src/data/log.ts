"use server";

import { db } from "@/lib/db";

export const getLogs = async () => {
	try {
		const logs = await db.logs.findMany({
			orderBy: {
				timestamp: "desc",
			},
		});
		return logs;
	} catch (error) {
		return null;
	}
};

export const getLogById = async (id: string) => {
	try {
		const log = await db.logs.findUnique({
			where: {
				id,
			},
		});
		return log;
	} catch (error) {
		return null;
	}
};
