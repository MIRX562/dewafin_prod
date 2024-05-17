import {
  File,
  FileArchive,
  FileMinus,
  FilePieChart,
  FileSpreadsheet,
  FileText,
  Image,
  Music,
  Video,
} from "lucide-react";

// Define TypeScript types
export type FileType = "document" | "archive" | "image" | "audio" | "video";

export interface MimeType {
  mime: string;
  extension: string;
  label: string;
  type: FileType;
  icon: React.ElementType;
}

export const mimeTypes: MimeType[] = [
  {
    mime: "text/plain",
    extension: "txt",
    label: "Text File",
    type: "document",
    icon: FileMinus,
  },
  {
    mime: "application/pdf",
    extension: "pdf",
    label: "PDF Document",
    type: "document",
    icon: File,
  },
  {
    mime: "application/msword",
    extension: "doc",
    label: "Word Document (DOC)",
    type: "document",
    icon: FileText,
  },
  {
    mime: "application/vnd.ms-excel",
    extension: "xls",
    label: "Excel Spreadsheet (XLS)",
    type: "document",
    icon: FileSpreadsheet,
  },
  {
    mime: "application/vnd.ms-powerpoint",
    extension: "ppt",
    label: "PowerPoint Presentation (PPT)",
    type: "document",
    icon: FilePieChart,
  },
  {
    mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    extension: "xlsx",
    label: "Excel Spreadsheet (XLSX)",
    type: "document",
    icon: FileSpreadsheet,
  },
  {
    mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    extension: "docx",
    label: "Word Document (DOCX)",
    type: "document",
    icon: FileText,
  },
  {
    mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    extension: "pptx",
    label: "PowerPoint FilePieChart (PPTX)",
    type: "document",
    icon: FilePieChart,
  },
  {
    mime: "application/zip",
    extension: "zip",
    label: "ZIP FileArchive",
    type: "archive",
    icon: FileArchive,
  },
  {
    mime: "	application/vnd.rar",
    extension: "rar",
    label: "RAR FileArchive",
    type: "archive",
    icon: FileArchive,
  },
  {
    mime: "image/jpeg",
    extension: "jpeg",
    label: "JPEG Image",
    type: "image",
    icon: Image,
  },
  {
    mime: "image/png",
    extension: "png",
    label: "PNG Image",
    type: "image",
    icon: Image,
  },
  {
    mime: "audio/mpeg",
    extension: "mp3",
    label: "MP3 Audio",
    type: "audio",
    icon: Music,
  },
  {
    mime: "video/mp4",
    extension: "mp4",
    label: "MP4 Video",
    type: "video",
    icon: Video,
  },
];
