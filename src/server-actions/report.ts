"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/lib/sessionUser";
import { formatMonthYear } from "@/lib/utils";
import { revalidatePath } from "next/cache";

type RegisterResponse = {
	error?: string;
	success?: string;
};
export const addReport = async (values: any): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	try {
		const newReport = await db.report.create({
			data: {
				title: `Laporan Keuangan - ${formatMonthYear(values.month)}`,
				description: values.description,
				month: values.month,
				data: values.data,
				initial: values.saldoAwal,
				income: values.danaMasuk,
				outcome: values.danaKeluar,
				refund: values.totalRefund,
				net: values.totalBersih,
				final: values.saldoAkhir,
				profit: values.pendapatan,
				loan: values.totalPinjaman,
			},
		});

		revalidatePath("/reports");
		return { success: "Success Creating New Report" };
	} catch (error) {
		console.log(error);
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
