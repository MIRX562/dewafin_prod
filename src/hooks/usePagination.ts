import { useEffect, useState } from "react";

interface UsePaginationProps<T> {
  totalItems: number;
  itemsPerPage: number;
  initialCurrentPage?: number;
  data: T[]; // Array of generic data type T
}

const usePagination = ({
  totalItems,
  itemsPerPage,
  initialCurrentPage = 1,
  data,
}: UsePaginationProps<any>) => {
  const [currentPage, setCurrentPage] = useState(initialCurrentPage);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const calculateTotalPages = () => {
      return totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage);
    };
    setTotalPages(calculateTotalPages());
  }, [totalItems, itemsPerPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getSlicedItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(
      indexOfFirstItem,
      indexOfLastItem > data.length ? data.length : indexOfLastItem,
    );
  };

  return {
    currentPage,
    totalPages,
    handlePageChange,
    getSlicedItems,
  };
};

export default usePagination;
