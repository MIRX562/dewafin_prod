"use server";

import { getResetPasswordTokenByToken } from "@/data/passwordResetToken";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { NewPassword, NewPasswordSchema } from "@/schemas";
import bcrypt from "bcryptjs";

type NewPasswordResponse = {
	error?: string;
	success?: string;
};

export const newPassword = async (
	values: NewPassword,
	token?: string | null
): Promise<NewPasswordResponse> => {
	try {
		if (!token) {
			return { error: "Token is missing" };
		}

		const validatedFields = NewPasswordSchema.safeParse(values);
		if (!validatedFields.success) {
			return { error: "Invalid input fields" };
		}

		const { password } = validatedFields.data;

		const existingToken = await getResetPasswordTokenByToken(token);
		if (!existingToken) {
			return { error: "Invalid token provided" };
		}

		const isTokenExpired = new Date(existingToken.expires) < new Date();
		if (isTokenExpired) {
			return { error: "Token has expired" };
		}

		const existingUser = await getUserByEmail(existingToken.email);
		if (!existingUser) {
			return { error: "No user found with the associated email" };
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await db.user.update({
			where: { id: existingUser.id },
			data: { password: hashedPassword },
		});

		await db.passwordResetToken.delete({
			where: { id: existingToken.id },
		});

		await logActivity(
			"info",
			`Password updated for user: ${existingUser.email}`
		);

		return { success: "Password has been successfully updated" };
	} catch (error: any) {
		await logActivity("error", `Error updating password: ${error.message}`);

		throw new Error("Password update failed: " + error.message);
	}
};
