import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";

interface HeaderProps {
	onExport: () => void;
	onClear: () => void;
	onRetentionPeriodChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
	onExport,
	onClear,
	onRetentionPeriodChange,
}) => {
	return (
		<header className=" px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
			<h1 className="text-2xl font-bold">Activity Logs</h1>
			<div className="flex items-center space-x-4">
				<Button
					size="sm"
					variant="outline"
					onClick={onExport}
				>
					Export Logs
				</Button>
				<Button
					size="sm"
					variant="outline"
					onClick={onClear}
				>
					Clear Logs
				</Button>
				<Select
					defaultValue="7"
					onValueChange={(e) => onRetentionPeriodChange(e)}
				>
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
	);
};

export default Header;
