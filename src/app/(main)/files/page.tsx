import { getFiles } from "@/data/file";
import FileView from "./FileView";

export default async function FileArchivePage() {
  const files = await getFiles();
  // console.log(files);

  return (
    <div className="flex flex-col w-full h-full overscroll-">
      <FileView files={files as any} />
    </div>
  );
}
