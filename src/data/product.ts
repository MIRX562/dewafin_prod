"use server";
import { db } from "@/lib/db";

export const getAllCategories = async () => {
	try {
		const categories = await db.category.findMany({
			include: {
				products: {
					include: {
						packages: true,
					},
				},
			},
		});
		return categories;
	} catch (error) {
		console.error(error);
		return null;
	}
};
export const getCategoriesById = async (id: string) => {
	try {
		const categories = await db.category.findUnique({
			where: { id },
			include: {
				products: {
					include: {
						packages: true,
					},
				},
			},
		});
		return categories;
	} catch (error) {
		console.error(error);
		return null;
	}
};
export const getCategoryById = async (id: string) => {
	try {
		const categories = await db.category.findUnique({
			where: { id },
		});
		return categories;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getProductsById = async (id: string) => {
	try {
		const categories = await db.product.findUnique({
			where: { id },
			include: {
				packages: true,
			},
		});
		return categories;
	} catch (error) {
		console.error(error);
		return null;
	}
};
