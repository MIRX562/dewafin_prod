"use server";

import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.user.findUnique({
			where: {
				email,
			},
		});
		return user;
	} catch (error) {
		return null;
	}
};
export const getUserById = async (id: string | undefined) => {
	try {
		const user = await db.user.findUnique({
			where: {
				id,
			},
		});
		return user;
	} catch (error) {
		return null;
	}
};

export const getUsers = async () => {
	try {
		const user = await db.user.findMany();
		return user;
	} catch (error) {
		return null;
	}
};

export const getLonelyUser = async () => {
	try {
		const user = await db.user.findMany({
			where: {
				employeeId: {
					equals: null,
				},
			},
		});
		return user;
	} catch (error) {
		return null;
	}
};
