"use client";

import { Button } from "@/components/ui/button";
import { deleteReportToast } from "@/lib/toasts";
import { ReportSchema } from "@/schemas/report";
import { Row } from "@tanstack/react-table";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function ReportDataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const report = ReportSchema.parse(row.original);
	const router = useRouter();

	const handleDeleteReport = async () => {
		await deleteReportToast(report.id, () => {
			router.refresh();
		});
	};

	return (
		<Button
			variant={"ghost"}
			size="icon"
			onClick={handleDeleteReport}
		>
			<Trash2Icon className="text-destructive" />
		</Button>
	);
}
