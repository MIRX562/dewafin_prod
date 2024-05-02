"use client";
import DataFormWrapper from "@/components/dataForm/DataFormWrapper";
import FormError from "@/components/formError/FormError";
import FormSuccess from "@/components/formSucces/FormSuccess";
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
import { Customer, EditCustomer, EditCustomerSchema } from "@/schemas/customer";
import { editCustomer } from "@/server-actions/customer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const EditCustomerForm = ({ customerData }: { customerData: Customer }) => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<EditCustomer>({
		resolver: zodResolver(EditCustomerSchema),
		defaultValues: {
			email: customerData.email,
			phone: customerData.phone,
			address: customerData.address,
			website: customerData.website,
			taxId: customerData.taxId,
			notes: customerData.notes,
		},
	});
	const onSubmit = (values: EditCustomer) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			editCustomer(values, customerData.id).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};
	return (
		<DataFormWrapper title="Create New Customer">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="mail@example.com"
											type="email"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone No.</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="+62xxxxxxxx"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="address"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Editress</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="your address"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="website"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Website</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="website.com"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="taxId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>taxId</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="123456"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Notes</FormLabel>
									<FormControl>
										<Textarea
											disabled={isPending}
											{...field}
											placeholder="notes..."
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
						Edit Customer Data
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default EditCustomerForm;
