"use server";

import { getEmployeeByEmail, getEmployeeById } from "@/data/employee";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { currentRole, currentUser } from "@/lib/sessionUser";
import {
	AddEmployee,
	AddEmployeeSchema,
	EditEmployee,
} from "@/schemas/employee";

type Response = {
	error?: string;
	success?: string;
};

export const addEmployee = async (values: AddEmployee): Promise<Response> => {
	try {
		const user = await currentUser();
		if (!user) {
			return { error: "Unauthorized" };
		}

		const validatedFields = AddEmployeeSchema.safeParse(values);
		if (!validatedFields.success) {
			console.log("Invalid inputs:", values);
			return { error: "Invalid inputs provided" };
		}

		const data = validatedFields.data;

		const existingEmployee = await getEmployeeByEmail(data.email);
		if (existingEmployee) {
			return { error: "Email already registered" };
		}

		const employee = await db.employee.create({
			data: data,
		});
		if (data.userId) {
			await db.user.update({
				where: { id: data.userId },
				data: { employeeId: employee.id },
			});
		}

		await logActivity("info", `Employee added: ${employee.id}`);

		return {
			success: "Success Creating New Employee",
		};
	} catch (error: any) {
		await logActivity("error", `Failed to add employee: ${error.message}`);
		return { error: "Something went wrong" };
	}
};

export const deleteEmployee = async (employeeId: string): Promise<Response> => {
	try {
		const role = await currentRole();

		if (role !== "ADMIN") {
			return { error: "Not enough authority" };
		}

		await db.user.update({
			where: {
				employeeId,
			},
			data: {
				employeeId: null,
			},
		});

		await db.employee.delete({
			where: {
				id: employeeId,
			},
		});

		await logActivity("info", `Employee deleted: ${employeeId}`);

		return { success: "Employee is Deleted" };
	} catch (error: any) {
		await logActivity("error", `Failed to delete employee: ${error.message}`);
		return { error: "Something went wrong" };
	}
};

export const editEmployee = async (
	employeeData: EditEmployee,
	employeeId: string
): Promise<Response> => {
	try {
		const employee = await currentUser();

		if (!employee) {
			return { error: "Unauthorized: Employee not found" };
		}

		const dbEmployee = await getEmployeeById(employeeId);

		if (!dbEmployee) {
			return { error: "Unauthorized: Employee not found in database" };
		}

		await db.employee.update({
			where: { id: dbEmployee.id },
			data: employeeData,
		});

		await logActivity("info", `Employee edited: ${employeeId}`);

		return { success: "Employee data successfully updated" };
	} catch (error: any) {
		await logActivity("error", `Failed to edit employee: ${error.message}`);
		return { error: "Something went wrong" };
	}
};
