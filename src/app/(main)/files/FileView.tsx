"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { File } from "@prisma/client";
import { FileCard } from "./FileCard";
import UploadButton from "./FileUploadButton";

import PaginationComponent from "@/components/Navigation/Pagination/PaginationComponent";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce";
import usePagination from "@/hooks/usePagination";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function FileView({ files }: { files: File[] }) {
	const [itemsPerPage, setItemsPerPage] = useState(6);
	const isSmall = useMediaQuery(600);
	const isMedium = useMediaQuery(764);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredFile, setFilteredFile] = useState(files);
	const debouncedSearchTerm = useDebounce(searchTerm, 300);

	useEffect(() => {
		setItemsPerPage(isSmall ? 6 : isMedium ? 8 : 16);
		const filtered = files.filter((note) =>
			note.fileName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
		);
		setFilteredFile(filtered);
	}, [isSmall, itemsPerPage, isMedium, debouncedSearchTerm, files]);

	const { currentPage, totalPages, handlePageChange, getSlicedItems } =
		usePagination({
			totalItems: filteredFile.length,
			itemsPerPage,
			data: filteredFile,
		});

	const currentItems = getSlicedItems();

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	if (files.length === 0) {
		return (
			<main className="w-full h-full items-center justify-center flex flex-col">
				<p>No files available yet.</p>
				<UploadButton />
			</main>
		);
	}

	return (
		<>
			<main className="flex-1 p-4 md:p-6">
				<div className="w-full mx-auto grid gap-4">
					<div className="flex items-center justify-between gap-2">
						<h1 className="hidden md:block font-semibold text-2xl md:text-3xl">
							Files Archive
						</h1>
						<div className="relative w-full max-w-md">
							<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
							<Input
								className="w-full bg-white px-8 py-2 shadow-none dark:bg-gray-950"
								placeholder="Search files..."
								type="search"
								value={searchTerm}
								onChange={handleSearch}
							/>
						</div>
						<div className="flex items-center gap-2">
							<UploadButton />
						</div>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{currentItems.map((file: File) => (
							<FileCard
								key={file.id}
								file={file}
							/>
						))}
					</div>
				</div>
			</main>
			<div className="flex items-center justify-end mt-4 px-4 md:px-6">
				<PaginationComponent
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</>
	);
}
