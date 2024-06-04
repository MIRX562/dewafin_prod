import { getLatestPublicNotes } from "@/data/dashboard";
import { formatDate } from "@/lib/utils";
import { NotebookIcon } from "lucide-react";
import Link from "next/link";
import DashboardCardWrapper from "./DashboardCardWrapper";

type NoteItemProps = {
	title: string;
	by: string;
	time: string;
	noteId: string;
};

const LatestNotes = async () => {
	const notes = await getLatestPublicNotes();

	if (!notes || notes.length === 0) {
		return (
			<DashboardCardWrapper
				title="Latest Public Notes"
				href="/notes"
			>
				<div className="h-full flex items-center justify-center">
					<p>No public notes available.</p>
				</div>
			</DashboardCardWrapper>
		);
	}

	return (
		<DashboardCardWrapper
			title="Latest Public Notes"
			href="/notes"
		>
			{notes.map((note) => (
				<NoteItem
					key={note.id}
					title={note.title}
					by={note.user.name}
					time={formatDate(note.updatedAt)}
					noteId={note.id}
				/>
			))}
		</DashboardCardWrapper>
	);
};

const NoteItem = ({ title, by, time, noteId }: NoteItemProps) => (
	<Link
		href={`/notes/${title}?id=${noteId}`}
		className="flex items-start gap-4 "
	>
		<div className="flex-shrink-0">
			<NotebookIcon className="w-6 h-6 text-primary" />
		</div>
		<div>
			<h3 className="text-lg font-medium hover:underline">{title}</h3>
			<p className="text-sm text-gray-500">by :{by}</p>
			<div className="text-xs text-gray-500 mt-2">Last Update: {time}</div>
		</div>
	</Link>
);

export default LatestNotes;
