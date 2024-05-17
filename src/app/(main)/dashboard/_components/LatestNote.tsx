import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NotebookIcon } from "lucide-react";
import Link from "next/link";

type NoteItemProps = {
	title: string;
	by: string;
	time: string;
};

const LatestNotes = () => {
	return (
		<Card className="flex-1">
			<CardHeader className="flex justify-between items-center">
				<CardTitle>Latest Notes</CardTitle>
				<Link
					className="text-sm text-gray-500 hover:underline"
					href="#"
				>
					View all
				</Link>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<NoteItem
						title="Meeting Notes"
						by="Summary of the team meeting held on 2023-05-17."
						time="2 days ago"
					/>
					<NoteItem
						title="Project Roadmap"
						by="Outline of the upcoming milestones for the project."
						time="5 days ago"
					/>
				</div>
			</CardContent>
		</Card>
	);
};

const NoteItem = ({ title, by, time }: NoteItemProps) => (
	<div className="flex items-start gap-4">
		<div className="flex-shrink-0">
			<NotebookIcon className="w-6 h-6 text-gray-500" />
		</div>
		<div>
			<h3 className="text-lg font-medium">{title}</h3>
			<p className="text-sm text-gray-500">{by}</p>
			<div className="text-xs text-gray-500 mt-2">{time}</div>
		</div>
	</div>
);

export default LatestNotes;
