import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatFileSize } from "@/lib/utils";
import { MimeType, mimeTypes } from "@/types/fileType";
import { File } from "@prisma/client";
import {
  DeleteIcon,
  DownloadIcon,
  FileDigitIcon,
  TrashIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FileCardProps {
  file: File;
}

export const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const [downloadError, setDownloadError] = useState<string | null>(null);
  const mtype: MimeType | undefined = mimeTypes.find(
    (entry) => entry.mime === file.mimeType,
  );

  const handleDownload = async (fileId: string) => {
    try {
      const response = await fetch(`/api/download?fileId=${fileId}`);

      if (response.ok) {
        // Optionally handle success response
        console.log("File downloaded successfully");
      } else {
        const error = await response.json();
        setDownloadError("Failed to download file");
        console.error("Error:", error);
      }
    } catch (error) {
      setDownloadError("An error occurred while downloading the file");
      console.error("Error:", error);
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link className="block" href="#">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2">
            {mtype ? (
              <mtype.icon className="w-6 h-6 text-primary" />
            ) : (
              <FileDigitIcon className="w-6 h-6 text-primary" /> // Fallback icon for unknown types
            )}
            <span className="font-medium truncate">{file.fileName}</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {mtype ? mtype.type : "Unknown File"}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatFileSize(file.size)}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(file.createdAt).toLocaleDateString("id")}
          </div>
        </div>
      </Link>
      <div className="border-t dark:border-gray-800 p-2 flex justify-end gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => handleDownload(file.id)}
        >
          <DownloadIcon className="w-5 h-5 text-primary" />
          <span className="sr-only">Download</span>
        </Button>
        <Button size="icon" variant="ghost">
          <DeleteIcon className="w-5 h-5 text-emerald-500" />
          <span className="sr-only">Edit</span>
        </Button>
        <Button size="icon" variant="ghost">
          <TrashIcon className="w-5 h-5 text-destructive" />
          <span className="sr-only">Delete</span>
        </Button>
      </div>
      {downloadError && (
        <div className="text-red-500 text-sm mt-2">{downloadError}</div>
      )}
    </Card>
  );
};
