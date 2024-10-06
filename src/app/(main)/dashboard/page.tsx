import Loading from "@/app/loading";
import { Suspense } from "react";
import NavItems from "./_components/FavMenu";

export default async function DashboardPage() {
	return (
		<main className="flex-1 flex-col p-1 flex gap-2 md:gap-6 overscroll-none">
			<Suspense fallback={<Loading />}>
				<NavItems />
				<div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6">
					some analytics
				</div>
			</Suspense>
		</main>
	);
}
