import DialogButton from "@/components/common/buttons/DialogButton";
import { Button } from "@/components/ui/button";
import { Category, Package, Product } from "@prisma/client";
import { TrashIcon } from "lucide-react";
import AddCategoryForm from "./form/AddCategoryForm";
import AddPackageForm from "./form/AddPackageForm";
import AddProductForm from "./form/AddProductForm";
import EditCategoryForm from "./form/EditCategoryForm";
import EditPackageForm from "./form/EditPackageForm";
import EditProductForm from "./form/EditProductForm";

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

export const EditPackageButton = ({ packages }: { packages: Package }) => {
	return (
		<DialogButton title="Edit">
			<EditPackageForm data={packages} />
		</DialogButton>
	);
};

export const EditCategoryButton = ({ category }: { category: Category }) => {
	return (
		<DialogButton title="Rename">
			<EditCategoryForm data={category} />
		</DialogButton>
	);
};

export const EditProductButton = ({ product }: { product: Product }) => {
	return (
		<DialogButton title="Edit">
			<EditProductForm data={product} />
		</DialogButton>
	);
};

export const DeletePackageButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={onClick}
		>
			<TrashIcon className="w-6 h-6 text-destructive" />
		</Button>
	);
};

export const DeleteCategoryButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={onClick}
		>
			<TrashIcon className="w-6 h-6 text-destructive" />
		</Button>
	);
};

export const DeleteProductButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			variant="outline"
			size="icon"
			onClick={onClick}
		>
			<TrashIcon className="w-6 h-6 text-destructive" />
		</Button>
	);
};
