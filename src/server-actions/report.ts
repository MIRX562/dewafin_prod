"use server";

import { db } from "@/lib/db";
import { ParsedResult } from "@/lib/parseSheet";
import { currentUser } from "@/lib/sessionUser";
import { getCurrentMonthAndYear } from "@/lib/utils";
import { revalidatePath } from "next/cache";

type RegisterResponse = {
	error?: string;
	success?: string;
};
export const addReport = async (
	values: ParsedResult
): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}
	const date = getCurrentMonthAndYear();

	try {
		const newReport = await db.report.create({
			data: {
				title: `Laporan Keuangan - ${date}`,
				description: "",
				month: new Date(),
				data: values.data as any,
				initial: values.saldoAwal as any,
				income: values.danaMasuk,
				outcome: values.danaKeluar,
				refund: values.totalRefund,
				net: values.totalBersih,
				final: values.saldoAkhir,
				// Add additional fields from sheetData if needed
			},
		});

		revalidatePath("/reports");
		return { success: "Success Creating New Report" };
	} catch (error) {
		return { error: "Something went wrong" };
	}
};

export const deleteReport = async (
	reportId: string
): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}
	try {
		await db.report.delete({
			where: {
				id: reportId,
			},
		});
		revalidatePath("/reports");

		return { success: "Report is Deleted" };
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

// export const editReport = async (
// 	taskData: EditReport,
// 	reportId: string
// ): Promise<RegisterResponse> => {
// 	const user = await currentUser();
// 	if (!user) {
// 		return { error: "Unauthorized" };
// 	}

// 	const dbReport = await getReportById(reportId);

// 	if (!dbReport) {
// 		return { error: "Report not found in database" };
// 	}

// 	try {
// 		await db.report.update({
// 			where: { id: dbReport.id },
// 			data: taskData,
// 		});
// 		revalidatePath("/tasks");

// 		return { success: "Report data successfully updated" };
// 	} catch (error) {
// 		return { error: `Failed to update report data` };
// 	}
// };
