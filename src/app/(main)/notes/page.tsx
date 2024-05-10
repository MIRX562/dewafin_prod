/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aluPJ9eGm5z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import PaginationComponent from "@/components/Navigation/Pagination/PaginationComponent";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import usePagination from "@/hooks/usePagination";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { mockNoteData } from "./mock";
import { NoteCard } from "./NoteCard";

export default function NotePage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredNotes, setFilteredNotes] = useState(mockNoteData);
	const debouncedSearchTerm = useDebounce(searchTerm, 300);
	const [itemsPerPage, setItemsPerPage] = useState(6);
	const isSmall = useMediaQuery(600);
	const isMedium = useMediaQuery(764);
	const data = mockNoteData;

	useEffect(() => {
		const filtered = data.filter(
			(note) =>
				note.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
				note.content.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
		);
		setFilteredNotes(filtered);
		setItemsPerPage(isSmall ? 6 : isMedium ? 8 : 16);
	}, [data, debouncedSearchTerm, isMedium, isSmall]);
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

	if (data.length === 0) {
		return (
			<main className="w-full h-full items-center justify-center flex flex-col">
				<p>No files available yet.</p>
			</main>
		);
	}

	return (
		<div className="pt-2 md:pt-4">
			<header className="flex h-14 items-center justify-center">
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
			</header>
			<main className="container px-4 md:px-6 py-2 space-y-2 md:space-y-4">
				<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{currentItems.map((note, index) => (
						<NoteCard
							key={index}
							title={note.title}
							content={note.content}
							updatedAt={note.updatedAt}
							updatedTime={note.updatedTime}
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
