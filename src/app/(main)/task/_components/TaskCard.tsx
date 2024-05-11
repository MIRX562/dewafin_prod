import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import React from "react";

interface Task {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: "To Do" | "In Progress" | "Finished" | "Canceled";
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { title, description, startDate, endDate, status } = task;

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <CalendarIcon className="h-4 w-4" />
          <span>{`${startDate} - ${endDate}`}</span>
        </div>
        <Badge className="px-2 py-1" variant="outline">
          {status}
        </Badge>
      </div>
    </div>
  );
};

export default TaskCard;
