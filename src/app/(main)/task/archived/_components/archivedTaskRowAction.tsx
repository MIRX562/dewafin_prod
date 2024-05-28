"use client";

import { Button } from "@/components/ui/button";
import { deleteTaskToast, restoreTaskToast } from "@/lib/toasts";
import { taskSchema } from "@/schemas/task";
import { Row } from "@tanstack/react-table";
import { ArchiveRestoreIcon, TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function ArchivedTaskTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const task = taskSchema.parse(row.original);
	const router = useRouter();

	const handleDeleteTask = async () => {
		await deleteTaskToast(task.id, () => {
			router.refresh();
		});
	};
	const handleRestoreTask = async () => {
		await restoreTaskToast(task.id, () => {
			router.refresh();
		});
	};

	return (
		<div className="flex gap-2 items-center justify-end">
			<Button
				variant="ghost"
				size="icon"
				onClick={handleRestoreTask}
				className="text-primary"
			>
				<ArchiveRestoreIcon />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				onClick={handleDeleteTask}
				className="text-destructive"
			>
				<TrashIcon />
			</Button>
		</div>
	);
}
