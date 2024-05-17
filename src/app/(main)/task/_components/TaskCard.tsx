"use client";
import { Badge } from "@/components/ui/badge";
import { calculateDuration, parseDate } from "@/lib/utils";
import { Task } from "@prisma/client";
import { CalendarIcon } from "lucide-react";
import React, { useState } from "react";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { id, title, description, startDate, endDate, status, priority } = task;
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const duration = calculateDuration(startDate, endDate);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="bg-white dark:bg-gray-950 rounded-lg p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      onClick={toggleDetails}
    >
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
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
        </div>
      )}
      <div className="flex items-center justify-between mt-2">
        <Badge
          className="px-2 py-1"
          variant={
            status === "TODO"
              ? "outline"
              : status === "IN_PROGRESS"
                ? "default"
                : "success"
          }
        >
          {status}
        </Badge>
        {/* Add action buttons based on your requirements */}
        {/* Example: Edit, Delete, Mark as Complete */}
      </div>
    </div>
  );
};

export default TaskCard;
