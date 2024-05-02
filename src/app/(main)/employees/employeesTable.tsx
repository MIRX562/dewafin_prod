import { DataTable } from "@/components/dataTable/DataTable";
import { getEmployees } from "@/data/employee";
import { employeeColumns } from "./employeeCollumns";

const EmployeesTable = async () => {
  const employees = await getEmployees();

  return (
    <div className="overflow-x-auto">
      <DataTable data={employees as any} columns={employeeColumns} />
    </div>
  );
};

export default EmployeesTable;
