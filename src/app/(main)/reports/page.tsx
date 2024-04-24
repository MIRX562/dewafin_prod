import Loading from "@/app/loading";
import React, { Suspense } from "react";

function ReportsPage() {
	return (
		<Suspense fallback={<Loading />}>
			<div>ReportsPage</div>;
		</Suspense>
	);
}

export default ReportsPage;
