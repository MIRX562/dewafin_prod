"use client";
import DataFormWrapper from "@/components/common/forms/DataFormWrapper";
import FormError from "@/components/common/forms/FormError";
import FormSuccess from "@/components/common/forms/FormSuccess";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreateProduct, CreateProductSchema } from "@/schemas/product";
import { updateProduct } from "@/server-actions/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const EditProductForm = ({ data }: { data: Product }) => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<CreateProduct>({
		resolver: zodResolver(CreateProductSchema),
		defaultValues: {
			name: data.name,
			//@ts-ignore
			description: data.description,
		},
	});
	const onSubmit = (values: CreateProduct) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			updateProduct(data.id, values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
				router.refresh();
			});
		});
	};

	return (
		<DataFormWrapper title="Create New Product">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="category"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											disabled={isPending}
											placeholder="describe the task here..."
											className="h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormError message={error} />
					<FormSuccess message={success} />
					<Button
						disabled={isPending}
						typeof="submit"
						className="w-full"
					>
						Update Product
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default EditProductForm;
