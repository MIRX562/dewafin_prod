import { Metadata } from "next";

import RoleGate from "@/components/auth/access/RoleGate";
import { DataTable } from "@/components/common/table/DataTable";
import { Button } from "@/components/ui/button";
import { parseTitle } from "@/lib/utils";
import { columns } from "./_components/columns";

export const metadata: Metadata = {
  title: "Tasks",
  description: "Task manager & tracker",
};

export default async function TaskPage({
  params,
}: {
  params: { category: string };
}) {
  const tasks: any = [];

  return (
    <RoleGate allowedRole="MANAGER">
      <div className="h-full flex-1 flex-col p-1 flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {parseTitle(params.category)} Tasks
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button> add task</Button>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </RoleGate>
  );
}
