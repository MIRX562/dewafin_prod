import DialogButton from "@/components/common/buttons/DialogButton";
import AddCategoryForm from "./form/AddCategoryForm";
import AddPackageForm from "./form/AddPackageForm";
import AddProductForm from "./form/AddProductForm";

export const AddCategoryButton = () => {
	return (
		<DialogButton title="Add Category">
			<AddCategoryForm />
		</DialogButton>
	);
};
export const AddProductButton = ({ id }: { id: string }) => {
	return (
		<DialogButton title="Add Product">
			<AddProductForm categoryId={id} />
		</DialogButton>
	);
};
export const AddPackageButton = ({ id }: { id: string }) => {
	return (
		<DialogButton title="Add Package">
			<AddPackageForm id={id} />
		</DialogButton>
	);
};
