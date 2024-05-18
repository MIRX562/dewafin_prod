import Loading from "@/app/loading";
import PageToolbar from "@/components/common/tool/PageToolbar";
import { Suspense } from "react";
import UploadButton from "./_components/FileUploadButton";
import FilesTable from "./_components/table/filesTable";

export default async function FileArchivePage() {
	return (
		<div className="h-full flex-1 flex-col p-1 flex ">
			<PageToolbar>
				<UploadButton />
			</PageToolbar>
			<Suspense fallback={<Loading />}>
				<FilesTable />
			</Suspense>
		</div>
	);
}
