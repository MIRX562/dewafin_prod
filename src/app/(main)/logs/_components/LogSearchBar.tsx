import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import React from "react";

interface SearchBarProps {
	onSearch: (query: string) => void;
	onFilterChange: (filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange }) => {
	return (
		<div className="mb-6 flex items-center justify-between space-x-4">
			<div className="relative w-full max-w-md">
				<SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
				<Input
					className="pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400"
					placeholder="Search logs..."
					type="search"
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<div className="w-24">
				<Select
					defaultValue="all"
					onValueChange={(e) => onFilterChange(e)}
				>
					<SelectTrigger>
						<SelectValue placeholder="Filter by log level" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All </SelectItem>
						<SelectItem value="debug">Debug</SelectItem>
						<SelectItem value="info">Info</SelectItem>
						<SelectItem value="warn">Warn</SelectItem>
						<SelectItem value="error">Error</SelectItem>
						<SelectItem value="fatal">Fatal</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default SearchBar;
