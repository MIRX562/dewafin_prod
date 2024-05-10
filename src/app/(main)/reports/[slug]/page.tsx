import TbButton from "@/components/pageToolbar/tbButton/DialogButton";
import TableExportButton from "@/components/tableData/TableExportButton";
import { Input } from "@/components/ui/input";
import { parseTitle } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";

export default function ReportDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-semibold">{parseTitle(params.slug)}</h1>
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b">
        <div className="flex items-center gap-2">
          <Input
            className="outline-none"
            placeholder="08/05/2024"
            type="text"
          />
          <CalendarDaysIcon className="text-gray-500" />
        </div>

        <div className="flex items-center gap-2">
          <TableExportButton table="c" />
          <TbButton title="+ Upload Report">hello</TbButton>
        </div>
      </div>
      <div className="flex flex-col h-full items-center justify-center p-10">
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">Laporan akan muncul di sini</p>
          <p className="text-gray-600">
            Pilih tanggal atau periode, lalu klik tombol Filter.
          </p>
        </div>
      </div>
    </div>
  );
}
