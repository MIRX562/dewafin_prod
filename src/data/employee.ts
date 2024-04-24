import { db } from "@/lib/db";

export const getEmployees = async () => {
	try {
		const employees = await db.employee.findMany();
		return employees;
	} catch (error) {
		return null;
	}
};
