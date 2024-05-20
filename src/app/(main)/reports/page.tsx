import RoleGate from "@/components/auth/access/RoleGate";

export default async function ReportPage() {
	return (
		<RoleGate allowedRole="ADMIN">
			<div></div>
		</RoleGate>
	);
}
