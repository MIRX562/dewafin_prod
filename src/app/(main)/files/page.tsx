import { getFiles } from "@/data/file";
import FileView from "./_components/FileView";

export default async function FileArchivePage() {
  const files = await getFiles();
  return (
    <div className="flex flex-col w-full h-full">
      <FileView files={files as any} />
    </div>
  );
}
