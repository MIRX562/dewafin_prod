/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FsgnViylW1S
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Loading from "@/app/loading";
import { Card } from "@/components/ui/card";
import { reports } from "@/types/menu/reportMenu";
import Link from "next/link";
import { Suspense } from "react";
import RecentReports from "./_components/RecentReports";

export default async function ReportPage() {
  return (
    <main className="space-y-2 md:space-y-6 p-1">
      <h2 className="text-2xl font-semibold text-center md:mb-6 md:hidden">
        Reports
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
        {reports.map((report, index) => (
          <Link key={index} href={report.path}>
            <Card className="p-4 h-full  flex items-center justify-between">
              <h2 className="text-sm font-semibold">{report.label}</h2>
              <report.icon className="w-8 h-8 md:h-12 md:w-12" />
            </Card>
          </Link>
        ))}
      </div>
      <Suspense fallback={<Loading />}>
        <RecentReports />
      </Suspense>
    </main>
  );
}
