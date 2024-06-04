"use client";
import DataFormWrapper from "@/components/common/forms/DataFormWrapper";
import FormError from "@/components/common/forms/FormError";
import FormSuccess from "@/components/common/forms/FormSuccess";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { Textarea } from "@/components/ui/textarea";
import { useCurrentUserId } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import { AddTask, addTaskSchema } from "@/schemas/task";
import { addTask } from "@/server-actions/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { Employee, Priority, TaskStatus } from "@prisma/client";
import { format } from "date-fns";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const AddTaskForm = () => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
	const userId = useCurrentUserId() || "";

	const form = useForm<AddTask>({
		resolver: zodResolver(addTaskSchema),
		defaultValues: {
			title: undefined,
			description: "",
			startDate: new Date(),
			endDate: new Date(),
			status: TaskStatus.TODO,
			priority: Priority.LOW,
			employeeIds: [],
			reportUrl: "",
			userId: userId || "",
		},
	});
	const onSubmit = (values: AddTask) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			addTask({ ...values, employeeIds: selectedEmployees }).then((data) => {
				setError(data.error);
				setSuccess(data.success);
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

	const handleEmployeeToggle = (employeeId: string, isSelected: boolean) => {
		setSelectedEmployees((prev) =>
			isSelected
				? [...prev, employeeId]
				: prev.filter((id) => id !== employeeId)
		);
	};

	return (
		<DataFormWrapper title="Create Task">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="space-y-4">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											disabled={isPending}
											{...field}
											placeholder="Task"
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
						<div className="flex w-full gap-2">
							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem className="w-1/2">
										<FormLabel>Status</FormLabel>
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
												<SelectItem value={TaskStatus.TODO}>To Do</SelectItem>
												<SelectItem value={TaskStatus.IN_PROGRESS}>
													In Progress
												</SelectItem>
												<SelectItem value={TaskStatus.FINISHED}>
													Done
												</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="priority"
								render={({ field }) => (
									<FormItem className="w-1/2">
										<FormLabel>Priority</FormLabel>
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
												<SelectItem value={Priority.HIGH}>High</SelectItem>
												<SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
												<SelectItem value={Priority.LOW}>Low</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormItem>
							<FormLabel>Assign to</FormLabel>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className="ml-auto flex text-muted-foreground justify-between w-full"
									>
										{selectedEmployees.length > 0
											? selectedEmployees
													.map((employeeId) => {
														const employee = employees.find(
															(emp) => emp.id === employeeId
														);
														return `${employee?.firstName} ${employee?.lastName}`;
													})
													.join(", ")
											: "Select Employees"}
										<ChevronDownIcon className="mr-2 h-4 w-4" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									align="center"
									className="flex flex-col w-[340px]"
								>
									{employees.map((employee) => (
										<DropdownMenuCheckboxItem
											key={employee.id}
											className="capitalize"
											checked={selectedEmployees.includes(employee.id)}
											onCheckedChange={(value) =>
												handleEmployeeToggle(employee.id, value)
											}
										>
											{`${employee.firstName} ${employee.lastName}`}
										</DropdownMenuCheckboxItem>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
						</FormItem>
						<FormField
							control={form.control}
							name="reportUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Report File (URL)</FormLabel>
									<FormControl>
										<Input
											{...field}
											disabled={isPending}
											placeholder="link to report file"
											defaultValue={field.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex w-full gap-2">
							<FormField
								control={form.control}
								name="startDate"
								render={({ field }) => (
									<FormItem className="flex flex-col w-1/2">
										<FormLabel>From</FormLabel>
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
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="endDate"
								render={({ field }) => (
									<FormItem className="flex flex-col w-1/2">
										<FormLabel>To</FormLabel>
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
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						{success && <FormSuccess message={success} />}
						{error && <FormError message={error} />}
					</div>
					<Button
						type="submit"
						className="w-full"
						disabled={isPending}
					>
						{isPending ? "Saving..." : "Save"}
					</Button>
				</form>
			</Form>
		</DataFormWrapper>
	);
};

export default AddTaskForm;
