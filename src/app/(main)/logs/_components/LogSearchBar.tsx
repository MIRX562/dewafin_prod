import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";

interface SearchBarProps {
	onSearch: (query: string) => void;
	onFilterChange: (filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onFilterChange }) => {
	return (
		<div className=" flex items-center justify-between space-x-4">
			<div className="w-full max-w-md">
				<Input
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
