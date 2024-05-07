import AvailableEmployee from "@/components/dashboardComponents/AEmployee/AvailableEmployee";
import CustomerCount from "@/components/dashboardComponents/CustomerCount";
import FinancialPerformance from "@/components/dashboardComponents/FinancialPerformance";
import NetIncome from "@/components/dashboardComponents/NetIncome";
import OperationalCost from "@/components/dashboardComponents/OperationalCost";
import { Card, CardTitle } from "@/components/ui/card";
import MenuCards from "../../../components/dashboardComponents/MenuCards";

export default function DashboardPage() {
	return (
		<main className="grid w-full h-full grid-cols-2 gap-4 transition-all gap-x-6 lg:grid-cols-4">
			<MenuCards />
			<Card className="h-[40svh] col-span-2 md:col-span-1 lg:col-span-2 p-4 overflow-hidden">
				<CardTitle className="text-center text-primary mb-2">
					Pemasukan & Pengeluaran
				</CardTitle>
				<FinancialPerformance />
			</Card>
			<Card className="h-[40svh] col-span-2 md:col-span-1 lg:col-span-2 p-4 overflow-hidden">
				<CardTitle className="text-center text-primary mb-2">
					Laba Rugi
				</CardTitle>

				<NetIncome />
			</Card>
			<CustomerCount />
			<AvailableEmployee />
			<Card className="h-[30svh] p-4 col-span-2 lg:col-span-1">
				<CardTitle className="text-center text-primary mb-2">
					Biaya Operasional
				</CardTitle>
				<OperationalCost />
			</Card>
		</main>
	);
}
