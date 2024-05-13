"use client";

import TaskNavBar from "./_components/TaskNavBar";

export default function TaskManagerLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex items-start justify-start flex-col gap-4">
			<TaskNavBar />
			{children}
		</div>
	);
}
