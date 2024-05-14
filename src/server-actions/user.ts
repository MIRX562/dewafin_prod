"use server";

import { getUserByEmail, getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { currentRole, currentUser } from "@/lib/sessionUser";
import { AddUser, AddUserSchema, EditUser } from "@/schemas/user";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

type RegisterResponse = {
	error?: string;
	success?: string;
};

export const addUser = async (values: AddUser): Promise<RegisterResponse> => {
	const user = await currentUser();
	if (!user) {
		return { error: "Unauthorized" };
	}

	const validatedFields = AddUserSchema.safeParse(values);
	if (!validatedFields.success) {
		console.log("Invalid inputs:", values);
		return { error: "Invalid inputs provided" };
	}

	const { email, password, name, image, isTwoFactorEnabled, role, employeeId } =
		validatedFields.data;

	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return { error: "Email already registered" };
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		const newUser = await db.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				emailVerified: new Date(),
				image,
				isTwoFactorEnabled,
				role,
				employeeId,
			},
		});

		if (employeeId) {
			await db.employee.update({
				where: { id: employeeId },
				data: { userId: newUser.id },
			});
		}

		return {
			success: "Success Creating New User",
		};
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

export const deleteUser = async (userId: string): Promise<RegisterResponse> => {
	const role = await currentRole();

	if (role !== "ADMIN") {
		return { error: "You're not Allowed" };
	}

	try {
		await db.user.delete({
			where: {
				id: userId,
			},
		});

		return { success: "User is Deleted" };
	} catch (error) {
		return { error: "Something wen't wrong" };
	}
};

export const editUser = async (
	userData: EditUser,
	userId: string | undefined
) => {
	const user = await currentUser();

	if (!user) {
		return { error: "Unauthorized: User not found" };
	}

	const dbUser = await getUserById(userId);

	if (!dbUser) {
		return { error: "Unauthorized: User not found in database" };
	}

	try {
		await db.user.update({
			where: { id: dbUser.id },
			data: userData,
		});
		revalidatePath("/employees");

		return { success: "User data successfully updated" };
	} catch (error) {
		return { error: `Failed to update user data` };
	}
};
