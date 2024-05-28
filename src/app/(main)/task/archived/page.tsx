import Loading from "@/app/loading";
import { Suspense } from "react";
import ArchivedTaskTable from "./_components/archivedTaskTable";

function ArchivedTaskPage() {
	return (
		<div className="h-full flex-1 flex-col p-1 flex ">
			<Suspense fallback={<Loading />}>
				<ArchivedTaskTable />
			</Suspense>
		</div>
	);
}
export default ArchivedTaskPage;
