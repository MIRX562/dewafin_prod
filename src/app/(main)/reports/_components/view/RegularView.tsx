import Loading from "@/app/loading";
import { Suspense } from "react";

const RegularView = () => {
	return (
		<main className="flex flex-col space-y-2 md:space-y-6 p-1">
			<h2 className="text-2xl font-semibold text-center md:mb-6 md:hidden">
				Reports
			</h2>
			<Suspense fallback={<Loading />}></Suspense>
		</main>
	);
};

export default RegularView;
