import TableExportButton from "@/components/common/buttons/TableExportButton";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="border-b border-gray-200 dark:border-gray-700 flex items-center justify-between pb-2">
			<h1 className="text-2xl font-bold">Activity Logs</h1>
			<div className="flex items-center space-x-4">
				<TableExportButton table="logs" />
			</div>
		</header>
	);
};

export default Header;
