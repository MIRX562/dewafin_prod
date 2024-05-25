import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Logs } from "@prisma/client";

const LogTable = ({ logs }: { logs: Logs[] }) => {
	return (
		<div className="border rounded-lg overflow-hidden">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Timestamp</TableHead>
						<TableHead>Log Level</TableHead>
						<TableHead>Message</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{logs.map((log, index) => (
						<TableRow key={index}>
							<TableCell>{log.timestamp.toLocaleString("id")}</TableCell>
							<TableCell>
								<Badge
									variant={log.level === "info" ? "success" : "destructive"}
									className="w-14 flex justify-center items-center"
								>
									{log.level}
								</Badge>
							</TableCell>
							<TableCell>{log.message}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default LogTable;
