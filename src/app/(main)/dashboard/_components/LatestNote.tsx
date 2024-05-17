import { NotebookIcon } from "lucide-react";
import DashboardCardWrapper from "./DashboardCardWrapper";

type NoteItemProps = {
	title: string;
	by: string;
	time: string;
};

const LatestNotes = () => {
	return (
		<DashboardCardWrapper
			title="Lates Notes"
			href="/notes"
		>
			<NoteItem
				title="Meeting Notes"
				by="Summary of the ."
				time="2 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
			<NoteItem
				title="Project Roadmap"
				by="Outline ."
				time="5 days ago"
			/>
		</DashboardCardWrapper>
	);
};

const NoteItem = ({ title, by, time }: NoteItemProps) => (
	<div className="flex items-start gap-4 ">
		<div className="flex-shrink-0">
			<NotebookIcon className="w-6 h-6 text-primary" />
		</div>
		<div>
			<h3 className="text-lg font-medium">{title}</h3>
			<p className="text-sm text-gray-500">{by}</p>
			<div className="text-xs text-gray-500 mt-2">{time}</div>
		</div>
	</div>
);

export default LatestNotes;
