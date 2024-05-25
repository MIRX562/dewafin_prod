import { z } from "zod";

export const CreateCategorySchema = z.object({
	name: z.string().min(1, "Category name is required"),
	// description: z.string().optional(),
});

export const CreateProductSchema = z.object({
	name: z.string().min(1, "Product name is required"),
	description: z.string().optional(),
});

export const CreatePackageSchema = z.object({
	name: z.string().min(1, "Package name is required"),
	description: z.string().optional(),
	price: z.string(),
	specification: z.array(z.string()).optional(),
	mainFeature: z.array(z.string()).optional(),
	additionalFeature: z.array(z.string()).optional(),
});

export type CreateCategory = z.infer<typeof CreateCategorySchema>;
export type CreateProduct = z.infer<typeof CreateProductSchema>;
export type CreatePackage = z.infer<typeof CreatePackageSchema>;
