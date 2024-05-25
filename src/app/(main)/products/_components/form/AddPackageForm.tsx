"use client";

import { CommaSeparatedInput } from "@/components/common/forms/CommaSeparatedInput";
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
import { CreatePackage, CreatePackageSchema } from "@/schemas/product";
import { createPackage } from "@/server-actions/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const AddPackageForm = ({ id }: { id: string }) => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const form = useForm<CreatePackage>({
		resolver: zodResolver(CreatePackageSchema),
		defaultValues: {
			name: "",
			description: "",
			price: "",
			specification: [],
			mainFeature: [],
			additionalFeature: [],
		},
	});

	const onSubmit = (values: CreatePackage) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			createPackage(values, id).then((data) => {
				setError(data.error);
				setSuccess(data.success);
				router.refresh();
			});
		});
	};

	return (
		<DataFormWrapper title="Create New Package">
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
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="Package Name"
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
											{...field}
											placeholder="Package Description"
											className="h-[100px]"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											type="text"
											disabled={isPending}
											{...field}
											placeholder="Package Price"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="specification"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Specification</FormLabel>
									<FormControl>
										<CommaSeparatedInput
											value={field.value || []}
											onChange={(value) => {
												field.onChange(value);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="mainFeature"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Main Features</FormLabel>
									<FormControl>
										<CommaSeparatedInput
											value={field.value || []}
											onChange={(value) => {
												field.onChange(value);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="additionalFeature"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Additional Features</FormLabel>
									<FormControl>
										<CommaSeparatedInput
											value={field.value || []}
											onChange={(value) => {
												field.onChange(value);
											}}
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
						type="submit"
						className="w-full"
					>
						Create New Package
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default AddPackageForm;
