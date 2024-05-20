"use server";

import { db } from "@/lib/db";
import { currentRole } from "@/lib/sessionUser";

export const getReports = async () => {
	const role = await currentRole();
	if (role !== "ADMIN") return;
	try {
		const reports = await db.report.findMany();
		return reports;
	} catch (error) {
		return null;
	}
};

export const getReportById = async (id: string) => {
	try {
		const report = await db.report.findUnique({
			where: {
				id,
			},
		});
		return report;
	} catch (error) {
		return null;
	}
};
