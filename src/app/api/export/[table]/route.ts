import { getCustomers } from "@/data/customer";
import { getEmployees } from "@/data/employee";
import { getUsers } from "@/data/user";
import { currentRole } from "@/lib/sessionUser";
import { NextResponse, type NextRequest } from "next/server";
import * as XLSX from "xlsx";

export async function GET(
  request: NextRequest,
  { params }: { params: { table: string } },
) {
  const role = await currentRole();
  if (!role) {
    return new NextResponse(null, { status: 200 });
  }

  const searchParams = request.nextUrl.searchParams;
  const format = searchParams.get("format");

  try {
    const { table } = params;
    if (!table) throw new Error("Table name required!");

    let data: any;
    if (table === "customer") {
      data = await getCustomers();
    } else if (table === "employee") {
      data = await getEmployees();
    } else if (table === "user") {
      data = await getUsers();
    } else {
      throw new Error("Invalid table name!");
    }

    const ws = XLSX.utils.json_to_sheet(data);

    if (format === "txt") {
      const txt = XLSX.utils.sheet_to_txt(ws, { forceQuotes: true });
      return new NextResponse(txt, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.txt"`,
          "Content-Type": "text/csv",
        },
      });
    } else if (format === "csv") {
      const csv = XLSX.utils.sheet_to_csv(ws, { forceQuotes: true });
      return new NextResponse(csv, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.csv"`,
          "Content-Type": "text/csv",
        },
      });
    } else if (format === "xlsx") {
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data");
      const bf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

      return new NextResponse(bf, {
        status: 200,
        headers: {
          "Content-Disposition": `attachment; filename="${table}.xlsx"`,
          "Content-Type": "application/vnd.ms-excel",
        },
      });
    } else if (format === "json") {
      return NextResponse.json(data);
    } else {
      const html = XLSX.utils.sheet_to_html(ws);
      return new NextResponse(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return new NextResponse(error.message, { status: 400 });
    }
  }
}
