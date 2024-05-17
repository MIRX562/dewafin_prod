"use client";

import PaginationComponent from "@/components/Navigation/Pagination/PaginationComponent";
import { Input } from "@/components/ui/input";
import { AllNote } from "@/data/note";
import { useDebounce } from "@/hooks/useDebounce";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import usePagination from "@/hooks/usePagination";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import AddNoteButton from "./AddNoteButton";
import { NoteCard } from "./NoteCard";

interface NoteViewProps {
	notes: AllNote[];
}

export default function NoteList({ notes }: NoteViewProps) {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredNotes, setFilteredNotes] = useState<AllNote[]>(notes);
	const debouncedSearchTerm = useDebounce(searchTerm, 300);
	const [itemsPerPage, setItemsPerPage] = useState(6);
	const isSmall = useMediaQuery(600);
	const isMedium = useMediaQuery(764);

	useEffect(() => {
		const filtered = notes.filter((note) =>
			note.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
		);
		setFilteredNotes(filtered);
	}, [notes, debouncedSearchTerm]);

	useEffect(() => {
		setItemsPerPage(isSmall ? 6 : isMedium ? 8 : 16);
	}, [isSmall, isMedium]);

	const { currentPage, totalPages, handlePageChange, getSlicedItems } =
		usePagination({
			totalItems: filteredNotes.length,
			itemsPerPage,
			data: filteredNotes,
		});

	const currentItems = getSlicedItems();

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div className="pt-2 md:pt-4 px-2">
			<header className="flex h-14 items-center justify-between">
				<div className="relative w-full max-w-md">
					<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
					<Input
						className="w-full bg-white px-8 py-2 shadow-none dark:bg-gray-950"
						placeholder="Search notes..."
						type="search"
						value={searchTerm}
						onChange={handleSearch}
					/>
				</div>
				<AddNoteButton />
			</header>
			<main className="py-2 space-y-2 md:space-y-4">
				<div className="grid gap-2 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{currentItems.map((note: AllNote) => (
						<NoteCard
							key={note.id}
							note={note}
						/>
					))}
				</div>
				<PaginationComponent
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</main>
		</div>
	);
}
