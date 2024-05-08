"use client";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { File } from "@prisma/client";
import { useEffect, useState } from "react";
import { FileCard } from "./FileCard";
import UploadButton from "./FileUploadButton";

export default function FileView({ files }: { files: File[] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(8);
	const isSmall = useMediaQuery(600);

	useEffect(() => {
		// Update items per page based on screen size
		setItemsPerPage(isSmall ? 8 : 16);
	}, [isSmall, itemsPerPage]);

	const totalPages = Math.ceil(files.length / itemsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = files.slice(
		indexOfFirstItem,
		indexOfLastItem > files.length ? files.length : indexOfLastItem
	);

	if (files.length === 0) {
		return (
			<main className="w-full h-full items-center justify-center flex flex-col ">
				<p>No files available yet.</p>
				<UploadButton />
			</main>
		);
	}

	return (
		<>
			<main className="flex-1 p-4 md:p-6 ">
				<div className="w-full mx-auto grid gap-4">
					<div className="flex items-center justify-between">
						<h1 className="font-semibold text-2xl md:text-3xl">
							Files Archive
						</h1>
						<div className="flex items-center gap-2">
							<UploadButton />
						</div>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{currentItems.map((file: File, index: number) => (
							<FileCard
								key={index}
								file={file}
							/>
						))}
					</div>
				</div>
			</main>
			<div className="flex items-center justify-end mt-4 px-4 md:px-6">
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href="#"
								onClick={() => handlePageChange(currentPage - 1)}
							/>
						</PaginationItem>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(
							(pageNumber) => (
								<PaginationItem key={pageNumber}>
									<PaginationLink
										href="#"
										isActive={pageNumber === currentPage}
										onClick={() => handlePageChange(pageNumber)}
									>
										{pageNumber}
									</PaginationLink>
								</PaginationItem>
							)
						)}
						<PaginationItem>
							<PaginationNext
								href="#"
								onClick={() => handlePageChange(currentPage + 1)}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	);
}
