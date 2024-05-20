import Loading from "@/app/loading";
import RoleGate from "@/components/auth/access/RoleGate";
import PageToolbar from "@/components/common/tool/PageToolbar";
import { Suspense } from "react";
import AddReportButton from "./_components/addReportButton";
import ReportTable from "./_components/table/reportTable";

export default async function ReportPage() {
	return (
		<RoleGate allowedRole="ADMIN">
			<PageToolbar>
				<AddReportButton />
			</PageToolbar>
			<Suspense fallback={<Loading />}>
				<ReportTable />
			</Suspense>
		</RoleGate>
	);
}
