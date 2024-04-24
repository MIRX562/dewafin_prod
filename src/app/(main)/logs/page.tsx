import AccessDenied from "@/components/accessDeniedPage/AccessDenied";
import { currentRole } from "@/lib/sessionUser";

export default async function LogsPage() {
	const role = await currentRole();

	return (
		<>
			{role === "ADMIN" ? (
				<div className="h-full max-w-full flex-1 flex-col space-y-8 p-4 flex ">
					<div className="flex items-center justify-between space-x-2">
						<h2 className="text-2xl font-bold tracking-tight">
							Implement tools
						</h2>
						<p className="text-muted-foreground">User Management Functions</p>
					</div>
				</div>
			) : (
				<AccessDenied />
			)}
		</>
	);
}
