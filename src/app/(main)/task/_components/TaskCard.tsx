"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TaskWithRelations } from "@/data/task";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { formatDate, parseTitle } from "@/lib/utils";
import { updateTaskStatus } from "@/server-actions/task";
import { TaskStatus } from "@prisma/client";
import {
	ArchiveIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	CalendarIcon,
	PencilIcon,
	TrashIcon,
} from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { archiveTaskToast, deleteTaskToast } from "@/lib/toasts";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import EditTaskForm from "./forms/EditTaskForm";

interface TaskCardProps {
	task: TaskWithRelations;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
	const {
		id,
		title,
		description,
		startDate,
		endDate,
		status,
		priority,
		employees,
		reportUrl,
	} = task;

	const start = formatDate(startDate);
	const end = formatDate(endDate);
	const [showDetails, setShowDetails] = useState(false);
	const [currentStatus, setCurrentStatus] = useState<TaskStatus>(status);
	const [isUpdating, setIsUpdating] = useState(false);
	const router = useRouter();

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};
	const role = useCurrentRole();

	const getNextStatus = (currentStatus: TaskStatus) => {
		switch (currentStatus) {
			case TaskStatus.TODO:
				return TaskStatus.IN_PROGRESS;
			case TaskStatus.IN_PROGRESS:
				return TaskStatus.FINISHED;
			case TaskStatus.FINISHED:
				return TaskStatus.TODO;
			default:
				return currentStatus;
		}
	};

	const getPreviousStatus = (currentStatus: TaskStatus) => {
		switch (currentStatus) {
			case TaskStatus.TODO:
				return TaskStatus.FINISHED;
			case TaskStatus.IN_PROGRESS:
				return TaskStatus.TODO;
			case TaskStatus.FINISHED:
				return TaskStatus.IN_PROGRESS;
			default:
				return currentStatus;
		}
	};

	const handleStatusUpdate = async (newStatus: TaskStatus) => {
		setIsUpdating(true);
		const result = await updateTaskStatus(newStatus, id);
		if (result.success) {
			setCurrentStatus(newStatus);
		} else {
			console.error(result.error);
		}
		setIsUpdating(false);
	};

	const handleDelete = async (id: string) => {
		setIsUpdating(true);
		await deleteTaskToast(task.id, () => {
			router.refresh();
		});
		setIsUpdating(false);
	};

	const handleArchive = async (id: string) => {
		setIsUpdating(true);
		await archiveTaskToast(task.id, () => {
			router.refresh();
		});
		setIsUpdating(false);
	};

	return (
		<div
			className="bg-white dark:bg-gray-950 rounded-lg p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b shadow-md"
			onClick={toggleDetails}
		>
			<div className="flex items-center justify-between">
				<div>
					<h3 className="font-semibold text-base">{title}</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{role === "ADMIN"
							? employees?.map((emp) => parseTitle(emp.department)).join(", ")
							: ""}
					</p>
				</div>
				<div className="flex items-center justify-between mt-2">
					<Badge
						className="px-2 py-1 w-20 items-center justify-center"
						variant={
							priority === "LOW"
								? "default"
								: priority === "HIGH"
									? "destructive"
									: "success"
						}
					>
						{priority}
					</Badge>
				</div>
			</div>
			{showDetails && (
				<div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
					<div className="flex items-center gap-2">
						<CalendarIcon className="h-4 w-4" />
						<span>{`${start} - ${end}`}</span>
					</div>
					<div className="mt-1">
						<span>{`Priority: ${priority}`}</span>
					</div>
					<div>
						<span className="mt-1">{`Description: ${description}`}</span>
					</div>
					<div className="mt-1">
						<span>{`Assigned to: ${employees.map((emp) => `${emp.firstName} ${emp.lastName}`).join(", ")}`}</span>
					</div>
					<div className="mt-1 truncate">
						<span>
							Report:{" "}
							<a
								href={reportUrl as any}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 underline"
							>
								{reportUrl}
							</a>
						</span>
					</div>
					<div
						className={`w-full ${isUpdating ? "bg-muted text-muted-foreground/50" : ""} flex items-center justify-between mt-2`}
					>
						<div className="flex gap-2">
							<Button
								variant="outline"
								size="icon"
								className="cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleDelete(id);
								}}
							>
								<TrashIcon className="w-6 h-6" />
							</Button>
							<Dialog>
								<DialogTrigger asChild>
									<Button
										variant="outline"
										size="icon"
										className="cursor-pointer"
										onClick={(e) => {
											e.stopPropagation();
										}}
									>
										<PencilIcon className="w-6 h-6" />
									</Button>
								</DialogTrigger>
								<DialogContent
									className="border-none p-0 bg-transparent w-fit"
									onClick={(e) => {
										e.stopPropagation();
									}}
								>
									<EditTaskForm task={task} />
								</DialogContent>
							</Dialog>
							<Button
								variant="outline"
								size="icon"
								className="cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleArchive(id);
								}}
							>
								<ArchiveIcon className="w-6 h-6" />
							</Button>
						</div>
						{currentStatus === "IN_PROGRESS" ? (
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="icon"
									className="cursor-pointer"
									onClick={(e) => {
										e.stopPropagation();
										handleStatusUpdate(getPreviousStatus(currentStatus));
									}}
								>
									<ArrowLeftIcon className="w-6 h-6" />
								</Button>
								<Button
									variant="outline"
									size="icon"
									className="cursor-pointer"
									onClick={(e) => {
										e.stopPropagation();
										handleStatusUpdate(getNextStatus(currentStatus));
									}}
								>
									<ArrowRightIcon className="w-6 h-6" />
								</Button>
							</div>
						) : currentStatus === "TODO" ? (
							<Button
								variant="outline"
								size="icon"
								className="cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleStatusUpdate(getNextStatus(currentStatus));
								}}
							>
								<ArrowRightIcon className="w-6 h-6" />
							</Button>
						) : (
							<Button
								variant="outline"
								size="icon"
								className="cursor-pointer"
								onClick={(e) => {
									e.stopPropagation();
									handleStatusUpdate(getPreviousStatus(currentStatus));
								}}
							>
								<ArrowLeftIcon className="w-6 h-6" />
							</Button>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TaskCard;