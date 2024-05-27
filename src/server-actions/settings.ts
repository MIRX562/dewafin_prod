"use server";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { currentUser } from "@/lib/sessionUser";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const editUserSettings = async (
	userData: User,
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
		revalidatePath("/settings");

		await logActivity("info", `Settings updated: ${userId}`);

		return { success: "User data successfully updated" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to update user");

		return { error: `Failed to update user data` };
	}
};
