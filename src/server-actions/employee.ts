"use server";

import { getEmployeeByEmail, getEmployeeById } from "@/data/employee";
import { db } from "@/lib/db";
import { currentRole, currentUser } from "@/lib/sessionUser";
import {
	AddEmployee,
	AddEmployeeSchema,
	EditEmployee,
} from "@/schemas/employee";

type RegisterResponse = {
	error?: string;
	success?: string;
};

export const addEmployee = async (
	values: AddEmployee
): Promise<RegisterResponse> => {
	// Checks employee auth
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	// Validate the provided fields using the schema
	const validatedFields = AddEmployeeSchema.safeParse(values);
	if (!validatedFields.success) {
		// Log the invalid values for debugging purposes
		console.log("Invalid inputs:", values);
		return { error: "Invalid inputs provided" };
	}

	const data = validatedFields.data;

	// Check if a employee with the provided email already exists
	const existingEmployee = await getEmployeeByEmail(data.email);
	if (existingEmployee) {
		return { error: "Email already registered" };
	}

	try {
		// Create a new employee record in the database with email already verified
		await db.employee.create({
			data: data,
		});

		// Return a success message
		return {
			success: "Success Creating New Employee",
		};
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

export const deleteEmployee = async (
	employeeId: string
): Promise<RegisterResponse> => {
	const role = await currentRole();

	if (role !== "ADMIN") {
		return { error: "Not enough authority" };
	}

	try {
		// Create a new employee record in the database with email already verified
		await db.employee.delete({
			where: {
				id: employeeId,
			},
		});

		// Return a success message
		return { success: "Employee is Deleted" };
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

export const editEmployee = async (
	employeeData: EditEmployee,
	employeeId: string
) => {
	// Get the current employee
	const employee = await currentUser();

	// If no employee is found, return an error
	if (!employee) {
		return { error: "Unauthorized: Employee not found" };
	}

	// Fetch the employee from the database
	const dbEmployee = await getEmployeeById(employeeId);

	// If no employee is found in the database, return an error
	if (!dbEmployee) {
		return { error: "Unauthorized: Employee not found in database" };
	}

	// Update the employee settings in the database
	try {
		await db.employee.update({
			where: { id: dbEmployee.id },
			data: employeeData,
		});

		return { success: "Employee data successfully updated" };
	} catch (error) {
		// Handle potential errors during the update
		return { error: `Failed to update employee data` };
	}
};
