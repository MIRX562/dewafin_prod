import RoleGate from "@/components/auth/access/RoleGate";
import TbButton from "@/components/common/buttons/DialogButton";
import { parseTitle } from "@/lib/utils";

export default function ReportDetailsPage({
	params,
}: {
	params: { slug: string };
}) {
	return (
		<RoleGate allowedRole="MANAGER">
			<div className="w-full h-full">
				<h1 className="text-2xl font-semibold">{parseTitle(params.slug)}</h1>
				<div className="flex flex-wrap items-center justify-end gap-4 p-4 border-b">
					<div className="flex items-center gap-2">
						<TbButton title="+ Upload Report">hello</TbButton>
					</div>
				</div>
				<div className="flex flex-col flex-grow flex-1 items-center justify-center p-10">
					<div className="text-center mt-4">
						<p className="text-lg font-semibold">
							Reports will shown here in a list
						</p>
						<p className="text-gray-600">
							No reports exist yet, please give instruction to your employee to
							start inputs their reports
						</p>
					</div>
				</div>
			</div>
		</RoleGate>
	);
}
