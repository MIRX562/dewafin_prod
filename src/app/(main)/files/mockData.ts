export interface FileData {
  fileName: string;
  fileType: string;
  fileSize: string;
  fileDate: string;
}

export const mockFileData: FileData[] = [
  {
    fileName: "document.pdf",
    fileType: "PDF Document",
    fileSize: "2.3 MB",
    fileDate: "April 15, 2023",
  },
  {
    fileName: "image.jpg",
    fileType: "JPEG Image",
    fileSize: "1.5 MB",
    fileDate: "April 12, 2023",
  },
  {
    fileName: "presentation.pptx",
    fileType: "PowerPoint Presentation",
    fileSize: "4.2 MB",
    fileDate: "April 8, 2023",
  },
  {
    fileName: "spreadsheet.xlsx",
    fileType: "Excel Spreadsheet",
    fileSize: "3.1 MB",
    fileDate: "April 5, 2023",
  },
  {
    fileName: "video.mp4",
    fileType: "MP4 Video",
    fileSize: "10.5 MB",
    fileDate: "March 28, 2023",
  },
  {
    fileName: "archive.zip",
    fileType: "ZIP Archive",
    fileSize: "7.8 MB",
    fileDate: "March 22, 2023",
  },
];
