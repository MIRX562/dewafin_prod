import { db } from "@/lib/db";

export const getCustomers = async () => {
	try {
		const customer = await db.customer.findMany();
		return customer;
	} catch (error) {
		return null;
	}
};
