"use client";
import NotFound from "@/app/not-found";
import RoleGate from "@/components/auth/access/RoleGate";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getReportById } from "@/data/report";
import {
	formatCurrency,
	formatMonthYear,
	generateReportDateRange,
	parseTitle,
} from "@/lib/utils";
import { Report } from "@prisma/client";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ReportData {
	NO: number;
	TGL: string;
	KETERANGAN: string;
	DEBIT?: string;
	KREDIT?: string;
	SALDO: string;
}

export default function ReportDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	const searchParams = useSearchParams();
	const id = searchParams.get("id") || "";
	const [data, setData] = useState<Report>();

	useEffect(() => {
		const fetchData = async (id: string) => {
			const reportData = await getReportById(id);
			setData(reportData as any);
		};

		if (id) {
			fetchData(id);
		}
	}, [id]);

	if (!data || !data.data) {
		return <NotFound />;
	}

	const columns = ["NO", "TGL", "KETERANGAN", "DEBIT", "KREDIT", "SALDO"];

	const exportPDF = () => {
		const doc = new jsPDF();
		const tableColumn = columns;
		const tableRows: any[] = [];
		// @ts-ignore
		data.data.forEach((entry: ReportData) => {
			const rowData = columns.map(
				(column) => entry[column as keyof ReportData] || ""
			);
			tableRows.push(rowData);
		});

		doc.text("Laporan Informasi Rekening - Mutasi Rekening", 100, 15, {
			align: "center",
		});
		doc.text("PT. DewaBisnis Digital Indonesia", 100, 25, {
			align: "center",
		});
		doc.text(`Periode: ${generateReportDateRange(data.month)}`, 100, 35, {
			align: "center",
		});
		doc.text(`Saldo Awal`, 14, 60);
		doc.text(`: ${formatCurrency(data.initial)}`, 50, 60);
		doc.text(`Dana Keluar`, 14, 70);
		doc.text(`: ${formatCurrency(data.outcome)}`, 50, 70);
		doc.text(`Dana Masuk`, 14, 80);
		doc.text(`: ${formatCurrency(data.income)}`, 50, 80);
		doc.text(`Total Refund`, 14, 90);
		doc.text(`: ${formatCurrency(data.refund)}`, 50, 90);
		doc.text(`Pendapatan`, 14, 100);
		doc.text(`: ${formatCurrency(data.profit)}`, 50, 100);
		doc.text(`Total Bersih`, 14, 110);
		doc.text(`: ${formatCurrency(data.net)}`, 50, 110);
		doc.text(`Saldo Akhir`, 14, 120);
		doc.text(`: ${formatCurrency(data.final)}`, 50, 120);

		(doc as any).autoTable({
			head: [tableColumn],
			body: tableRows,
			startY: 140,
		});

		doc.save(`report ${formatMonthYear(data.month)}.pdf`);
	};

	return (
		<RoleGate allowedRole="ADMIN">
			<div className="flex flex-col gap-3 md:gap-4">
				<h1 className="text-xl md:text-3xl font-bold">
					{parseTitle(params.slug)}
				</h1>
				<div className="bg-gray-200 p-4 rounded-lg dark:bg-gray-800 shadow-md">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-bold">Summary</h2>
						<Button
							onClick={exportPDF}
							className="shadow-md"
						>
							Export to PDF
						</Button>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:align">
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">
								Initial Account
							</p>
							<p className="text-xl md:text-2xl font-bold">
								{formatCurrency(data.initial)}
							</p>
						</div>
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">Total Expenses</p>
							<p className={`text-xl md:text-2xl font-bold `}>
								{formatCurrency(data.outcome)}
							</p>
						</div>
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">Total Revenue</p>

							<p className={`text-xl md:text-2xl font-bold `}>
								{formatCurrency(data.income)}
							</p>
						</div>
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">Net Profit</p>
							<p
								className={`text-xl md:text-2xl font-bold ${data.net > 0 ? "text-emerald-500" : "text-destructive"}`}
							>
								{formatCurrency(data.net)}
							</p>
						</div>
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">Total Refund</p>
							<p className="text-xl md:text-2xl font-bold">
								{formatCurrency(data.refund)}
							</p>
						</div>
						<div className=" flex flex-col md:items-center md:justify-center">
							<p className="text-gray-500 dark:text-gray-400">Final Account</p>
							<p
								className={`text-xl md:text-2xl font-bold ${data.final > 0 ? "" : "text-destructive"}`}
							>
								{formatCurrency(data.final)}
							</p>
						</div>
					</div>
				</div>
				<div className="max-h-[53svh] md:max-h-[60svh] overflow-auto rounded-lg border">
					<Table>
						<TableHeader>
							<TableRow>
								{columns.map((column, index) => (
									<TableHead key={index}>{column}</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{
								// @ts-ignore
								data.data.map((entry: ReportData, index) => (
									<TableRow key={index}>
										{columns.map((column, columnIndex) => (
											<TableCell key={columnIndex}>
												{entry[column as keyof ReportData]}
											</TableCell>
										))}
									</TableRow>
								))
							}
						</TableBody>
					</Table>
				</div>
			</div>
		</RoleGate>
	);
}
