"use client";
import { Button } from "@/components/ui/button";
import { AllNote } from "@/data/note";
import { deleteNoteToast } from "@/lib/toasts";
import { formatRelativeDate, parseDate } from "@/lib/utils";
import { ClockIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type NoteCardProps = {
	note: AllNote;
};

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
	const { id, title, updatedAt, createdAt, isPublic, user } = note;
	const [deleting, setDeleting] = useState(false);
	const router = useRouter();
	if (!user) return;

	const handleDeleteNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();

		try {
			setDeleting(true);
			await deleteNoteToast(id, () => {
				router.refresh();
			});
			setDeleting(false);
		} catch (error) {
			console.error("Error deleting note:", error);
		}
	};

	return (
		<div className="relative rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-900">
			<Link
				href={`/notes/${title}?id=${id}`}
				prefetch={true}
			>
				<div className="group flex flex-col justify-between h-full">
					<div className="flex items-start justify-between">
						<h3 className="text-lg font-semibold tracking-tight line-clamp-2 break-words">
							{title}
						</h3>
						<Button
							className=" h-8 w-8"
							size="icon"
							variant="outline"
							onClick={handleDeleteNote}
							disabled={deleting}
						>
							<TrashIcon className="h-4 w-4" />
						</Button>
					</div>
					<p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
						<strong>Author:</strong> {user.name}
						<br />
						<strong>Is Public:</strong> {isPublic ? "Yes" : "No"}
					</p>
					<div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
						<span>Updated {formatRelativeDate(updatedAt)}</span>
						<span>
							<ClockIcon className="mr-1 inline-block h-4 w-4" />{" "}
							{parseDate(createdAt)}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default NoteCard;
