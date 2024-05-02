import { db } from "@/lib/db";

export const getCustomers = async () => {
  try {
    const customer = await db.customer.findMany();
    return customer;
  } catch (error) {
    return null;
  }
};

export const getCustomerById = async (id: number) => {
  try {
    const customer = await db.customer.findUnique({
      where: {
        id,
      },
    });
    return customer;
  } catch (error) {
    return null;
  }
};

export const getCustomerByEmail = async (email: string) => {
  try {
    const customer = await db.customer.findUnique({
      where: {
        email,
      },
    });
    return customer;
  } catch (error) {
    return null;
  }
};
