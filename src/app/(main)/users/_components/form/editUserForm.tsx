"use client";
import DataFormWrapper from "@/components/common/forms/DataFormWrapper";
import FormError from "@/components/common/forms/FormError";
import FormSuccess from "@/components/common/forms/FormSuccess";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { EditUser, EditUserSchema } from "@/schemas/user";
import { editUser } from "@/server-actions/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Employee, User, UserRole } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = ({ userData }: { userData: User }) => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const [employees, setEmployees] = useState([]);
	const user = userData;
	const route = useRouter();

	const form = useForm<EditUser>({
		resolver: zodResolver(EditUserSchema),
		defaultValues: {
			email: user?.email || undefined,
			name: user?.name || undefined,
			image: user?.image || undefined,
			role: user?.role || undefined,
			isTwoFactorEnabled: user?.isTwoFactorEnabled,
			employeeId: user?.employeeId || undefined,
		},
	});
	const onSubmit = (values: EditUser) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			editUser(values, user?.id).then((data) => {
				setError(data.error);
				setSuccess(data.success);
				route.refresh();
			});
		});
	};

	// Fetch employees
	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await fetch("/api/data/employee");
				const data = await response.json();
				setEmployees(data);
			} catch (error) {
				console.error("Error fetching employees:", error);
			}
		};

		fetchEmployees();
	}, []);
	return (
		<DataFormWrapper title="Edit User">
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
											placeholder="John Doe"
											defaultValue={field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
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
											defaultValue={field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="image"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Image</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="Image Url"
											defaultValue={field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<Select
										disabled={isPending}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a role" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
											<SelectItem value={UserRole.USER}>User</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="employeeId"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Employee Data</FormLabel>
									<Select
										disabled={isPending}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select related employee" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{employees.map((employee: Employee) => (
												<SelectItem
													key={employee.id}
													value={employee.id}
												>
													{`${employee.firstName} ${employee.lastName}`}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isTwoFactorEnabled"
							render={({ field }) => (
								<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md  ">
									<div className="space-y-0.5">
										<FormLabel>Two Factor Authentication</FormLabel>
										<FormDescription>
											Require OTP Code for each login
										</FormDescription>
									</div>
									<FormControl>
										<Switch
											disabled={isPending}
											onCheckedChange={field.onChange}
											checked={field.value}
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
						Update User
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default EditUserForm;
