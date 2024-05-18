import { getReportByUserId, getReports } from "@/data/report";
import { currentRole, currentUserId } from "@/lib/sessionUser";
import ManagerView from "./_components/ManagerView";

export default async function ReportPage() {
	const role = await currentRole();
	const userId = await currentUserId();
	if (!userId) return;
	const reports =
		role !== "MANAGER" ? await getReportByUserId(userId) : await getReports();
	if (!reports) return;
	return <>{role === "MANAGER" && <ManagerView />}</>;
}
