"use client";

import EditEmployeeForm from "@/app/(main)/employees/_components/form/editEmployeeForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteEmployeeToast } from "@/lib/toasts";
import { EmployeeSchema } from "@/schemas/employee";
import { Employee } from "@prisma/client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
	row: Row<TData>;
}

export function EmployeeDataTableRowActions<TData>({
	row,
}: DataTableRowActionsProps<TData>) {
	const employee = EmployeeSchema.parse(row.original);
	const router = useRouter();

	const handleDeleteEmployee = async () => {
		await deleteEmployeeToast(employee.id, () => {
			router.refresh();
		});
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
				>
					<DotsHorizontalIcon className="h-4 w-4" />
					<span className="sr-only">Open menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="end"
				className="w-[160px]"
			>
				<DropdownMenuItem asChild>
					<Dialog>
						<DialogTrigger className="relative w-full flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
							Edit
						</DialogTrigger>
						<DialogContent className="lg:w-[400px] grid place-items-center p-1 bg-transparent border-none shadow-sm">
							<EditEmployeeForm employeeData={employee as Employee} />
						</DialogContent>
					</Dialog>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleDeleteEmployee}>
					Delete
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
