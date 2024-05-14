"use client";

import TaskNavBar from "./_components/TaskNavBar";

export default function TaskManagerLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col space-y-2">
			<TaskNavBar />
			{children}
		</div>
	);
}
