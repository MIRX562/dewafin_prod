"use client";
import Loading from "@/app/loading";
import RoleGate from "@/components/auth/access/RoleGate";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getReportById } from "@/data/report";
import { formatCurrency } from "@/lib/utils";
import { Report } from "@prisma/client";
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
		return <Loading />;
	}

	const columns = ["NO", "TGL", "KETERANGAN", "DEBIT", "KREDIT", "SALDO"];

	return (
		<RoleGate allowedRole="ADMIN">
			<div className="flex flex-col gap-2 md:gap-4">
				<div className="mt-6 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-bold">Summary</h2>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
						<div>
							<p className="text-gray-500 dark:text-gray-400">
								Initial Account
							</p>
							<p className="text-2xl font-bold">
								{formatCurrency(data.initial)}
							</p>
						</div>
						<div>
							<p className="text-gray-500 dark:text-gray-400">Total Expenses</p>
							<p className="text-2xl font-bold">
								{formatCurrency(data.outcome)}
							</p>
						</div>
						<div>
							<p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
							<p className="text-2xl font-bold">
								{formatCurrency(data.income)}
							</p>
						</div>
						<div>
							<p className="text-gray-500 dark:text-gray-400">Net Profit</p>
							<p className="text-2xl font-bold">{formatCurrency(data.net)}</p>
						</div>
						<div>
							<p className="text-gray-500 dark:text-gray-400">Total Refund</p>
							<p className="text-2xl font-bold">
								{formatCurrency(data.refund)}
							</p>
						</div>
						<div>
							<p className="text-gray-500 dark:text-gray-400">Final Account</p>
							<p className="text-2xl font-bold">{formatCurrency(data.final)}</p>
						</div>
					</div>
				</div>
				<div className="overflow-x-auto">
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
