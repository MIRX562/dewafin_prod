"use client";

import { Button } from "@/components/ui/button";
import { deleteFileToast } from "@/lib/toasts";
import { fileSchema } from "@/schemas/file";
import { Row } from "@tanstack/react-table";
import { DownloadIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function FileDataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const file = fileSchema.parse(row.original);
	const router = useRouter();

	const handleDownload = async () => {
		try {
			const response = await fetch(`/api/download?fileId=${file.id}`);
			if (response.ok) {
				// Create a blob from the response
				const blob = await response.blob();
				// Create a temporary URL for the blob
				const url = window.URL.createObjectURL(blob);
				// Create a temporary link element
				const link = document.createElement("a");
				link.href = url;
				link.download = row.getValue("name");
				// Simulate click on the link to start download
				link.click();
				// Release the URL object
				window.URL.revokeObjectURL(url);
			} else {
				const error = await response.text();
				console.error("Error:", error);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handleDeleteFile = async () => {
		await deleteFileToast(file, () => {
			router.refresh();
		});
	};

	return (
		<div className="flex gap-2 items-center justify-end">
			<Button
				variant="ghost"
				size="icon"
				onClick={handleDownload}
				className="text-emerald-500"
			>
				<DownloadIcon />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				onClick={handleDeleteFile}
				className="text-destructive"
			>
				<TrashIcon />
			</Button>
		</div>
	);
}
