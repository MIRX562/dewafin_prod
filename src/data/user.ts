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
		const user = await db.user.findMany({
			select: {
				id: true,
				email: true,
				name: true,
				image: true,
				role: true,
				isTwoFactorEnabled: true,
			},
		});
		return user;
	} catch (error) {
		return null;
	}
};
