import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (pageNumber: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === totalPages;

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => onPageChange(currentPage - 1)}
						className={`${isFirstPage ? "hidden" : ""}`}
					/>
				</PaginationItem>
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(
					(pageNumber) => (
						<PaginationItem key={pageNumber}>
							<PaginationLink
								isActive={pageNumber === currentPage}
								onClick={() => onPageChange(pageNumber)}
							>
								{pageNumber}
							</PaginationLink>
						</PaginationItem>
					)
				)}
				<PaginationItem>
					<PaginationNext
						onClick={() => onPageChange(currentPage + 1)}
						className={`${isLastPage ? "hidden" : ""}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationComponent;
