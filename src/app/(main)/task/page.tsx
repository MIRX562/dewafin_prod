import Loading from "@/app/loading";
import { getAllTasks, getGroupedTasksByUserIdAndEmployeeId } from "@/data/task";
import { currentUser } from "@/lib/sessionUser";
import { Suspense } from "react";
import TaskView from "./_components/TaskView";

export default async function TaskPage() {
	const user = await currentUser();
	if (!user) return;
	const task =
		user.role === "ADMIN"
			? await getAllTasks()
			: await getGroupedTasksByUserIdAndEmployeeId(user.id, user.employeeId);
	if (!task) {
		return;
	}
	return (
		<main className="flex flex-1 flex-col gap-4 w-full h-full">
			<div className="items-center justify-between md:hidden ">
				<h1 className="font-semibold text-lg md:text-2xl">Tasks</h1>
			</div>
			<Suspense fallback={<Loading />}>
				<TaskView tasks={task} />
			</Suspense>
		</main>
	);
}
