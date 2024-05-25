import { Button } from "@/components/ui/button";
import React from "react";

interface HeaderProps {
	onExport: () => void;
}

const Header: React.FC<HeaderProps> = ({ onExport }) => {
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
			</div>
		</header>
	);
};

export default Header;
