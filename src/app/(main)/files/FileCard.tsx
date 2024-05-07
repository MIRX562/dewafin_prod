import { Button } from "@/components/ui/button";
import { DeleteIcon, DownloadIcon, FileIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

interface FileCardProps {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileDate: string;
}

export const FileCard: React.FC<FileCardProps> = ({
  fileName,
  fileType,
  fileSize,
  fileDate,
}) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link className="block" href="#">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <FileIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <span className="font-medium truncate">{fileName}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {fileType}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {fileSize}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {fileDate}
          </div>
        </div>
      </Link>
      <div className="border-t dark:border-gray-800 p-2 flex justify-end gap-2">
        <Button size="icon" variant="ghost">
          <DownloadIcon className="w-5 h-5" />
          <span className="sr-only">Download</span>
        </Button>
        <Button size="icon" variant="ghost">
          <DeleteIcon className="w-5 h-5" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button size="icon" variant="ghost">
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
    </div>
  );
};
