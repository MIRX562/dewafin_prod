import NavItems from "./_components/FavMenu";
import LatestNotes from "./_components/LatestNote";
import Statistics from "./_components/Statistic";
import ToDoList from "./_components/Todos";

export default function DashboardPage() {
	return (
		<main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
			<NavItems />
			<LatestNotes />
			<ToDoList />
			<Statistics />
		</main>
	);
}
