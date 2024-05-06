import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ActivityIcon,
	DatabaseIcon,
	GlobeIcon,
	LayersIcon,
	NetworkIcon,
	PackageIcon,
	ServerIcon,
} from "lucide-react";

export default function AllTab() {
	return (
		<>
			<div className="grid gap-6 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Total Assets</CardTitle>
						<CardDescription>
							The total number of assets managed by your hosting company.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<span className="text-4xl font-bold">80</span>
							<PackageIcon className="h-8 w-8 text-primary" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Assets in Use</CardTitle>
						<CardDescription>
							The number of assets currently being used by your customers.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<span className="text-4xl font-bold">62</span>
							<ActivityIcon className="h-8 w-8 text-primary" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Available Assets</CardTitle>
						<CardDescription>
							The number of assets currently available for new customers.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<span className="text-4xl font-bold">18</span>
							<LayersIcon className="h-8 w-8 text-primary" />
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="border shadow-sm rounded-lg">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Asset</TableHead>
							<TableHead>Used</TableHead>
							<TableHead>Available</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<div className="flex items-center gap-2">
									<ServerIcon className="h-5 w-5 text-primary" />
									<span className="font-medium">Servers</span>
								</div>
							</TableCell>
							<TableCell>18</TableCell>
							<TableCell>6</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<div className="flex items-center gap-2">
									<GlobeIcon className="h-5 w-5 text-primary" />
									<span className="font-medium">Domains</span>
								</div>
							</TableCell>
							<TableCell>72</TableCell>
							<TableCell>15</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<div className="flex items-center gap-2">
									<NetworkIcon className="h-5 w-5 text-primary" />
									<span className="font-medium">Bandwidth</span>
								</div>
							</TableCell>
							<TableCell>8TB</TableCell>
							<TableCell>4TB</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								<div className="flex items-center gap-2">
									<DatabaseIcon className="h-5 w-5 text-primary" />
									<span className="font-medium">Storage</span>
								</div>
							</TableCell>
							<TableCell>350GB</TableCell>
							<TableCell>150GB</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</>
	);
}
