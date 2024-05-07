import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { UploadIcon } from "lucide-react";
import { FileCard } from "./FileCard";
import { mockFileData } from "./mockData"; // Import the mock data

export default function FileArchivePage() {
  return (
    <div className="flex flex-col w-full h-full p-2">
      <main className="flex-1 bg-gray-100/40 dark:bg-gray-800/40 p-4 md:p-6">
        <div className="w-full mx-auto grid gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl md:text-3xl">Files</h1>
            <div className="flex items-center gap-2">
              <Button size="sm">
                <UploadIcon className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mockFileData.map((file, index) => (
              <FileCard
                key={index}
                fileName={file.fileName}
                fileType={file.fileType}
                fileSize={file.fileSize}
                fileDate={file.fileDate}
              />
            ))}
          </div>
        </div>
      </main>
      <div className="flex items-center justify-end mt-6 px-4 md:px-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
