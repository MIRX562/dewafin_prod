import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React from "react";

interface LogTableProps {
	logs: {
		timestamp: string;
		level: string;
		message: string;
	}[];
}

const LogTable: React.FC<LogTableProps> = ({ logs }) => {
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
							<TableCell>{log.timestamp}</TableCell>
							<TableCell>
								<Badge variant="success">{log.level}</Badge>
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
