import Loading from "@/app/loading";
import { Suspense } from "react";

function FileArchivePage() {
	return (
		<Suspense fallback={<Loading />}>
			<div>FileArchivePage</div>;
		</Suspense>
	);
}

export default FileArchivePage;
