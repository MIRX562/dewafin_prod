import NavItems from "./_components/FavMenu";
import LatestNotes from "./_components/LatestNote";
import Statistics from "./_components/Statistic";
import ToDoList from "./_components/Todos";

export default function DashboardPage() {
	return (
		<main className="flex-1 flex-col p-1 flex gap-6 overscroll-none">
			<NavItems />
			<div className="flex flex-wrap gap-6">
				<LatestNotes />
				<ToDoList />
				<Statistics />
			</div>
		</main>
	);
}
