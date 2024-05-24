import Loading from "@/app/loading";
import { Suspense } from "react";
import NavItems from "./_components/FavMenu";
import LatestNotes from "./_components/LatestNote";
import Statistics from "./_components/Statistic";
import ToDoList from "./_components/Todos";

export default async function DashboardPage() {
	return (
		<main className="flex-1 flex-col p-1 flex gap-2 md:gap-6 overscroll-none">
			<Suspense fallback={<Loading />}>
				<NavItems />
				<div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
					<LatestNotes />
					<ToDoList />
					<Statistics />
				</div>
			</Suspense>
		</main>
	);
}
