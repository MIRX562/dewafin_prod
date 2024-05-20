import { currentRole } from "@/lib/sessionUser";
import ManagerView from "./_components/view/ManagerView";
import RegularView from "./_components/view/RegularView";

export default async function ReportPage() {
	const role = await currentRole();
	
	return <>{role === "MANAGER" ? <ManagerView /> : <RegularView />}</>;
}
