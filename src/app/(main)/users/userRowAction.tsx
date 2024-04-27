"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteUserToast } from "@/lib/toasts";
import { userSchema } from "@/schemas";
import { User } from "@prisma/client";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import EditUserForm from "./editUserForm";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function UserDataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const user = userSchema.parse(row.original);
  const router = useRouter();

  const handleDeleteUser = async () => {
    await deleteUserToast(user.id, () => {
      router.refresh(); // Refresh the page after successful deletion
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
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger className="relative w-full flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent">
              Edit
            </DialogTrigger>
            <DialogContent className="lg:w-[400px] grid place-items-center p-1 bg-transparent border-none shadow-sm">
              <EditUserForm userData={user as User} />
            </DialogContent>
          </Dialog>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteUser}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
