import { db } from "@/lib/db";

export const getEmployees = async () => {
  try {
    const employees = await db.employee.findMany();
    return employees;
  } catch (error) {
    return null;
  }
};

export const getEmployeeByEmail = async (email: string) => {
  try {
    const employee = await db.employee.findUnique({
      where: {
        email,
      },
    });
    return employee;
  } catch (error) {
    return null;
  }
};

export const getEmployeeById = async (id: string) => {
  try {
    const employee = await db.employee.findUnique({
      where: {
        id,
      },
    });
    return employee;
  } catch (error) {
    return null;
  }
};
