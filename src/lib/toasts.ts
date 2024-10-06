import { File } from "@/schemas/file";
import { deleteEmployee } from "@/server-actions/employee";
import { deleteFile } from "@/server-actions/file";
import { deleteNote } from "@/server-actions/note";
import {
	deleteCategory,
	deletePackage,
	deleteProduct,
} from "@/server-actions/product";
import { deleteReport } from "@/server-actions/report";
import { deleteUser } from "@/server-actions/user";
import { toast } from "sonner";

// Generic toast function
const showToast = async (
	type: "warning" | "info",
	message: string,
	actionLabel: string,
	actionFn: () => Promise<any>,
	onSuccessMessage: string,
	onSuccess?: () => void,
	onErrorMessage: string = "Failed to perform action"
) => {
	toast[type](message, {
		description: "This action cannot be undone!",
		action: {
			label: actionLabel,
			onClick: async () => {
				toast.promise(actionFn(), {
					loading: `${actionLabel}ing...`,
					success: () => {
						onSuccess?.();
						return onSuccessMessage;
					},
					error: onErrorMessage,
				});
			},
		},
		cancel: {
			label: "Cancel",
			onClick: () => {},
		},
	});
};

// Delete user toast
export const deleteUserToast = async (
	userId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteUser(userId),
		"User is successfully deleted!",
		onSuccess
	);
};

// Delete package toast
export const deletePackageToast = async (
	packageId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deletePackage(packageId),
		"Package is successfully deleted!",
		onSuccess
	);
};

// Delete product toast
export const deleteProductToast = async (
	productId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteProduct(productId),
		"Product is successfully deleted!",
		onSuccess
	);
};

// Delete category toast
export const deleteCategoryToast = async (
	categoryId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteCategory(categoryId),
		"Category is successfully deleted!",
		onSuccess
	);
};

// Delete employee toast
export const deleteEmployeeToast = async (
	employeeId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteEmployee(employeeId),
		"Employee is successfully deleted!",
		onSuccess
	);
};

// Delete note toast
export const deleteNoteToast = async (
	noteId: string,
	onSuccess?: () => void
) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteNote(noteId),
		"Note is successfully deleted!",
		onSuccess
	);
};

// Delete file toast
export const deleteFileToast = async (file: File, onSuccess?: () => void) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteFile(file),
		"File is successfully deleted!",
		onSuccess
	);
};

// Delete report toast
export const deleteReportToast = async (id: string, onSuccess?: () => void) => {
	await showToast(
		"warning",
		"Confirm delete",
		"Delete",
		() => deleteReport(id),
		"Report is successfully deleted!",
		onSuccess
	);
};
