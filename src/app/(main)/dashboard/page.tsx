import AvailableEmployee from "@/components/dashboardComponents/AEmployee/AvailableEmployee";
import MenuCards from "../../../components/dashboardComponents/MenuCards";

export default function DashboardPage() {
	return (
		<main className="grid w-full h-full grid-cols-2 gap-4 transition-all gap-x-6 lg:grid-cols-4">
			<MenuCards />
			<AvailableEmployee />
		</main>
	);
}
