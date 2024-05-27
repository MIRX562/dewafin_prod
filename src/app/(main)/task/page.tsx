import Loading from "@/app/loading";
import {
	getGroupedTasksByStatus,
	getGroupedTasksByStatusByUserId,
} from "@/data/task";
import { currentUser } from "@/lib/sessionUser";
import { Suspense } from "react";
import TaskView from "./_components/TaskView";

export default async function TaskPage() {
	const user = await currentUser();
	if (!user) return;
	const task =
		user.role === "ADMIN"
			? await getGroupedTasksByStatus()
			: await getGroupedTasksByStatusByUserId(user.id || "");
	if (!task) {
		return;
	}
	return (
		<main className="flex flex-1 flex-col gap-4 w-full h-full">
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
			</div>
			<Suspense fallback={<Loading />}>
				<TaskView tasks={task} />
			</Suspense>
		</main>
	);
}
