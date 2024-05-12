/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ObgVJUqV0as
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
