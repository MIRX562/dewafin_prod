"use client";
import { getLogs } from "@/data/log";
import { Logs } from "@prisma/client";
import React, { useEffect, useState } from "react";
import Header from "./_components/LogHeader";
import SearchBar from "./_components/LogSearchBar";
import LogTable from "./_components/LogTable";

const LogsPage: React.FC = () => {
	const [logs, setLogs] = useState<Logs[]>([]);
	const [filteredLogs, setFilteredLogs] = useState<Logs[]>([]);

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

	useEffect(() => {
		const fetchLogs = async () => {
			const data = (await getLogs()) || [];
			setLogs(data);
			setFilteredLogs(data);
		};
		fetchLogs();
	}, []);

	return (
		<div className="flex flex-col h-full gap-2 md:gap-4">
			<Header />
			<SearchBar
				onSearch={handleSearch}
				onFilterChange={handleFilterChange}
			/>
			<div className="flex-1 overflow-auto md:p-4">
				<LogTable logs={filteredLogs} />
			</div>
		</div>
	);
};

export default LogsPage;
