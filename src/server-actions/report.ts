"use server";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
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

		await logActivity("info", `Report created: ${newReport.title}`);

		revalidatePath("/reports");
		return { success: "Success Creating New Report" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to create report");

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
		const deletedReport = await db.report.delete({
			where: {
				id: reportId,
			},
		});

		await logActivity("info", `Report deleted: ${deletedReport.title}`);

		revalidatePath("/reports");
		return { success: "Report is Deleted" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to delete report");

		return { error: "Something went wrong" };
	}
};
