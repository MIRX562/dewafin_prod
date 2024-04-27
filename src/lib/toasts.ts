import { deleteUser } from "@/server-actions/user";
import { toast } from "sonner";

export const deleteUserToast = async (userId: string) => {
	toast.warning(
		"Are you sure you want to permanently delete this data? This action cannot be undone.",
		{
			action: {
				label: "Delete",
				onClick: async () => {
					toast.promise(deleteUser(userId), {
						loading: "Deleting user...",
						success: "User is succesfully deleted!",
						error: "Failed to delete user",
					});
				},
			},
			cancel: {
				label: "Cancel",
				onClick: () => {},
			},
		}
	);
};
