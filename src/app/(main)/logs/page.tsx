import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { SearchIcon } from "lucide-react";

export default function LogsPage() {
	return (
		<div className="flex flex-col h-full">
			<header className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
				<h1 className="text-2xl font-bold">System Logs</h1>
				<div className="flex items-center space-x-4">
					<Button
						size="sm"
						variant="outline"
					>
						Export Logs
					</Button>
					<Button
						size="sm"
						variant="outline"
					>
						Clear Logs
					</Button>
					<Select defaultValue="7">
						<SelectTrigger className="px-4 py-2 text-sm">
							<SelectValue placeholder="Retention Period" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1">1 day</SelectItem>
							<SelectItem value="7">7 days</SelectItem>
							<SelectItem value="30">30 days</SelectItem>
							<SelectItem value="90">90 days</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</header>
			<div className="flex-1 overflow-auto p-6">
				<div className="mb-6 flex items-center space-x-4">
					<div className="relative w-full max-w-md">
						<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
						<Input
							className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
							placeholder="Search logs..."
							type="search"
						/>
					</div>
					<Select defaultValue="all">
						<SelectTrigger className="px-4 py-2 text-sm">
							<SelectValue placeholder="Filter by log level" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All</SelectItem>
							<SelectItem value="debug">Debug</SelectItem>
							<SelectItem value="info">Info</SelectItem>
							<SelectItem value="warn">Warn</SelectItem>
							<SelectItem value="error">Error</SelectItem>
							<SelectItem value="fatal">Fatal</SelectItem>
						</SelectContent>
					</Select>
				</div>
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
							<TableRow>
								<TableCell>2023-04-30 12:34:56</TableCell>
								<TableCell>
									<Badge variant="success">Info</Badge>
								</TableCell>
								<TableCell>Application started successfully.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-04-30 12:35:01</TableCell>
								<TableCell>
									<Badge variant="success">Warn</Badge>
								</TableCell>
								<TableCell>Disk space is running low.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-04-30 12:36:12</TableCell>
								<TableCell>
									<Badge variant="success">Error</Badge>
								</TableCell>
								<TableCell>Failed to connect to database.</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-04-30 12:37:45</TableCell>
								<TableCell>
									<Badge variant="success">Debug</Badge>
								</TableCell>
								<TableCell>
									Processed 100 requests in the last minute.
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>2023-04-30 12:39:22</TableCell>
								<TableCell>
									<Badge variant="success">Fatal</Badge>
								</TableCell>
								<TableCell>Unhandled exception occurred.</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	);
}
