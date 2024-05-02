import { deleteEmployee } from "@/server-actions/employee";
import { deleteUser } from "@/server-actions/user";
import { toast } from "sonner";

export const deleteUserToast = async (
  userId: string,
  onSuccess?: () => void,
) => {
  toast.warning("Confirm delete", {
    description: "This action cannot be undone!",
    action: {
      label: "Delete",
      onClick: async () => {
        toast.promise(deleteUser(userId), {
          loading: "Deleting user...",
          success: () => {
            onSuccess?.(); // Call the provided callback function
            return "User is successfully deleted!";
          },
          error: "Failed to delete user",
        });
      },
    },
    cancel: {
      label: "Cancel",
      onClick: () => {},
    },
  });
};

export const deleteEmployeeToast = async (
  employeeId: string,
  onSuccess?: () => void,
) => {
  toast.warning("Confirm delete", {
    description: "This action cannot be undone!",
    action: {
      label: "Delete",
      onClick: async () => {
        toast.promise(deleteEmployee(employeeId), {
          loading: "Deleting employee...",
          success: () => {
            onSuccess?.(); // Call the provided callback function
            return "Emlployee is successfully deleted!";
          },
          error: "Failed to delete employee",
        });
      },
    },
    cancel: {
      label: "Cancel",
      onClick: () => {},
    },
  });
};
