"use client";
import DataFormWrapper from "@/components/common/forms/DataFormWrapper";
import FormError from "@/components/common/forms/FormError";
import FormSuccess from "@/components/common/forms/FormSuccess";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { EditEmployee, EditEmployeeSchema } from "@/schemas/employee";
import { editEmployee } from "@/server-actions/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { Department, Employee, Status } from "@prisma/client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const EditEmployeeForm = ({ employeeData }: { employeeData: Employee }) => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const employee = employeeData;

	const form = useForm<EditEmployee>({
		resolver: zodResolver(EditEmployeeSchema),
		defaultValues: {
			firstName: employee?.firstName,
			lastName: employee?.lastName,
			email: employee?.email,
			phoneNumber: employee?.phoneNumber || undefined,
			role: employee?.role,
			isActive: employee?.isActive,
			hireDate: employee?.hireDate,
		},
	});
	const onSubmit = (values: EditEmployee) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			editEmployee(values, employeeData.id).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};
	return (
		<DataFormWrapper title="Edit Employee Data">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="john"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="Doe"
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
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone No.</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder="+62xxxxxxx"
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
											<SelectItem value={Department.Management}>
												Manager
											</SelectItem>
											<SelectItem value={Department.Administration}>
												Administration
											</SelectItem>
											<SelectItem value={Department.Customer_Support}>
												Customer Support
											</SelectItem>
											<SelectItem value={Department.Sales_Marketing}>
												Sales & Marketing
											</SelectItem>
											<SelectItem value={Department.Technical_Support}>
												Technical Support
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isActive"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Status</FormLabel>
									<Select
										disabled={isPending}
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Current Status" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value={Status.Active}>Active</SelectItem>
											<SelectItem value={Status.Not_Active}>
												Not Active
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="hireDate"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Hired At</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? (
														format(field.value, "PPP")
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) =>
													date > new Date() || date < new Date("2020-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
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
						Update Employee Data
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default EditEmployeeForm;
