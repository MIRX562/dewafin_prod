"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TaskWithRelations } from "@/data/task";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { calculateDuration, parseDate, parseTitle } from "@/lib/utils";
import { deleteTask, updateTaskStatus } from "@/server-actions/task"; // Import your server action
import { TaskStatus } from "@prisma/client";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	CalendarIcon,
	TrashIcon,
} from "lucide-react";
import React, { useState } from "react";

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
		employee,
	} = task;

	const start = parseDate(startDate);
	const end = parseDate(endDate);
	const duration = calculateDuration(startDate, endDate);
	const [showDetails, setShowDetails] = useState(false);
	const [currentStatus, setCurrentStatus] = useState<TaskStatus>(status);
	const [isUpdating, setIsUpdating] = useState(false);

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
		const result = await deleteTask(id);

		setIsUpdating(false);
	};

	if (!employee) {
		return null;
	}
	return (
		<div
			className="bg-white dark:bg-gray-950 rounded-lg p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-b"
			onClick={toggleDetails}
		>
			<div className="flex items-center justify-between">
				<div>
					<h3 className="font-semibold text-base">{title}</h3>
					<p className="text-sm text-gray-500 dark:text-gray-400">
						{role === "ADMIN"
							? parseTitle(employee.department)
							: description || "no description"}
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
						<span>{`Duration: ${duration}`}</span>
					</div>
					<div className="mt-1">
						<span>{`Priority: ${priority}`}</span>
					</div>
					<div
						className={` w-full ${isUpdating ? "bg-muted text-muted-foreground/50" : ""} flex items-center justify-between mt-2`}
					>
						<Button
							variant="outline"
							size="icon"
							className=" cursor-pointer"
							onClick={(e) => {
								e.stopPropagation();
								handleDelete(id);
							}}
						>
							<TrashIcon className="w-6 h-6" />
						</Button>
						{currentStatus === "IN_PROGRESS" ? (
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="icon"
									className=" cursor-pointer"
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
									className=" cursor-pointer"
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
								className=" cursor-pointer"
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
								className=" cursor-pointer"
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
