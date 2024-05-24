"use client";
import React, { useState } from "react";
import Header from "./_components/LogHeader";
import SearchBar from "./_components/LogSearchBar";
import LogTable from "./_components/LogTable";

const LogsPage: React.FC = () => {
	const initialLogs = [
		{
			timestamp: "2023-04-30 12:34:56",
			level: "Info",
			message: "Application started successfully.",
		},
		// Add more log entries as needed
	];

	const [logs, setLogs] = useState<any[]>(initialLogs);
	const [filteredLogs, setFilteredLogs] = useState<any[]>(initialLogs);

	const handleClearLogs = () => {
		setLogs([]);
		setFilteredLogs([]); // Also clear filtered logs
	};

	// Function to export logs
	const handleExportLogs = () => {
		// Placeholder implementation for exporting logs
		console.log("Exporting logs...");
	};

	const handleRetentionPeriodChange = (value: string) => {
		// Placeholder for actual retention period logic
		console.log("Retention period changed to:", value);
		// Implement logic to fetch logs based on the new retention period
		// Update logs and filteredLogs accordingly
	};

	const handleSearch = (query: string) => {
		const filtered = logs.filter((log) =>
			log.message.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredLogs(filtered);
	};

	const handleFilterChange = (filter: string) => {
		if (filter === "all") {
			setFilteredLogs(logs);
		} else {
			const filtered = logs.filter(
				(log) => log.level.toLowerCase() === filter.toLowerCase()
			);
			setFilteredLogs(filtered);
		}
	};

	return (
		<div className="flex flex-col h-full">
			<Header
				onClear={handleClearLogs}
				onRetentionPeriodChange={handleRetentionPeriodChange}
				onExport={handleExportLogs}
			/>
			<div className="flex-1 overflow-auto p-6">
				<SearchBar
					onSearch={handleSearch}
					onFilterChange={handleFilterChange}
				/>
				<LogTable logs={filteredLogs} />
			</div>
		</div>
	);
};

export default LogsPage;
