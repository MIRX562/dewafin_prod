"use server";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import {
	CreateCategory,
	CreatePackage,
	CreateProduct,
} from "@/schemas/product";
import { revalidatePath } from "next/cache";

type RegisterResponse = {
	error?: string;
	success?: string;
};

// ? Category -----------------------------------------------

export async function createCategory(
	value: CreateCategory
): Promise<RegisterResponse> {
	try {
		const newCategory = await db.category.create({
			data: value,
		});

		await logActivity("info", `Category created: ${value.name}`);

		revalidatePath("/products");

		return { success: "Category created successfully" };
	} catch (error) {
		console.error("Error creating Category:", error);
		return { error: "Error creating category" };
	}
}

export async function updateCategory(
	id: string,
	value: CreateCategory
): Promise<RegisterResponse> {
	try {
		const updatedCategory = await db.category.update({
			where: { id },
			data: value,
		});

		await logActivity("info", `Category updated: ${value.name}`);

		revalidatePath("/products");
		return { success: "Category updated successfully" };
	} catch (error) {
		console.error("Error updating Category:", error);
		return { error: "Error updating category" };
	}
}

export async function deleteCategory(id: string): Promise<RegisterResponse> {
	try {
		await db.category.delete({ where: { id } });

		await logActivity("info", `Category deleted: ${id}`);

		revalidatePath("/products");
		return { success: "Category deleted successfully" };
	} catch (error) {
		console.error("Error deleting Category:", error);
		return { error: "Error deleting category" };
	}
}

// ? Product -----------------------------------------------

export async function createProduct(
	value: CreateProduct,
	cId: string
): Promise<RegisterResponse> {
	try {
		const newProduct = await db.product.create({
			data: { ...value, categoryId: cId },
		});

		await logActivity("info", `Product created: ${value.name}`);

		revalidatePath("/products");

		return { success: "Product created successfully" };
	} catch (error) {
		console.error("Error creating Product:", error);
		return { error: "Error creating product" };
	}
}

export async function updateProduct(
	id: string,
	value: CreateProduct
): Promise<RegisterResponse> {
	try {
		const updatedProduct = await db.product.update({
			where: { id },
			data: value,
		});

		await logActivity("info", `Product updated: ${value.name}`);

		revalidatePath("/products");
		return { success: "Product updated successfully" };
	} catch (error) {
		console.error("Error updating Product:", error);
		return { error: "Error updating product" };
	}
}

export async function deleteProduct(id: string): Promise<RegisterResponse> {
	try {
		await db.product.delete({ where: { id } });

		await logActivity("info", `Product deleted: ${id}`);

		revalidatePath("/products");
		return { success: "Product deleted successfully" };
	} catch (error) {
		console.error("Error deleting Product:", error);
		return { error: "Error deleting product" };
	}
}

// ? Package -----------------------------------------------

export async function createPackage(
	value: CreatePackage,
	pId: string
): Promise<RegisterResponse> {
	try {
		const newPackage = await db.package.create({
			data: { ...value, productId: pId },
		});

		await logActivity("info", `Package created: ${value.name}`);

		revalidatePath("/products");

		return { success: "Package created successfully" };
	} catch (error) {
		console.error("Error creating Package:", error);
		return { error: "Error creating package" };
	}
}

export async function updatePackage(
	id: string,
	value: CreatePackage
): Promise<RegisterResponse> {
	try {
		const updatedPackage = await db.package.update({
			where: { id },
			data: value,
		});

		await logActivity("info", `Package updated: ${value.name}`);

		revalidatePath("/products");
		return { success: "Package updated successfully" };
	} catch (error) {
		console.error("Error updating Package:", error);
		return { error: "Error updating package" };
	}
}

export async function deletePackage(id: string): Promise<RegisterResponse> {
	try {
		await db.package.delete({ where: { id } });

		await logActivity("info", `Package deleted: ${id}`);

		revalidatePath("/products");
		return { success: "Package deleted successfully" };
	} catch (error) {
		console.error("Error deleting Package:", error);
		return { error: "Error deleting package" };
	}
}
