"use server";

import { db } from "@/lib/db";
import { currentRole } from "@/lib/sessionUser";

export const getReports = async () => {
	const role = await currentRole();
	if (role !== "MANAGER") return;
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

export const getReportByUserId = async (userId: string) => {
	try {
		const report = await db.report.findMany({
			where: {
				userId,
			},
		});
		return report;
	} catch (error) {
		return null;
	}
};
