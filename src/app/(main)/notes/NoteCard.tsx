import { Button } from "@/components/ui/button";
import { ClockIcon, DeleteIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

export type NoteCardProps = {
	title: string;
	content: string;
	updatedAt: string;
	updatedTime: string;
};

export const NoteCard: React.FC<NoteCardProps> = ({
	title,
	content,
	updatedAt,
	updatedTime,
}) => {
	return (
		<div className="group relative rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
			<Link
				href="#"
				className="absolute inset-0 z-10"
			>
				<span className="sr-only">View note</span>
			</Link>
			<div className="flex items-start justify-between">
				<h3 className="text-lg font-semibold tracking-tight">{title}</h3>
				<div className="flex items-center gap-2">
					<Button
						className="h-8 w-8"
						size="icon"
						variant="ghost"
					>
						<DeleteIcon className="h-4 w-4" />
					</Button>
					<Button
						className="h-8 w-8"
						size="icon"
						variant="ghost"
					>
						<TrashIcon className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
				{content}
			</p>
			<div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
				<span>Updated {updatedAt}</span>
				<span>
					<ClockIcon className="mr-1 inline-block h-4 w-4" /> {updatedTime}
				</span>
			</div>
		</div>
	);
};
