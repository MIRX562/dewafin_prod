"use client";
import DataFormWrapper from "@/components/dataForm/DataFormWrapper";
import FormError from "@/components/formError/FormError";
import FormSuccess from "@/components/formSucces/FormSuccess";
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
import { AddEmployee, AddEmployeeSchema } from "@/schemas/employee";
import { addEmployee } from "@/server-actions/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { Department } from "@prisma/client";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const AddEmployeeForm = () => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<AddEmployee>({
		resolver: zodResolver(AddEmployeeSchema),
		defaultValues: {
			phoneNumber: "",
		},
	});
	const onSubmit = (values: AddEmployee) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			addEmployee(values).then((data) => {
				setError(data.error);
				setSuccess(data.success);
			});
		});
	};
	return (
		<DataFormWrapper title="Create New User">
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
											placeholder="+62-8938-944-0498"
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
						Create New Employee
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default AddEmployeeForm;
