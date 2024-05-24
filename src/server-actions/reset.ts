"use server";
import { getUserByEmail } from "@/data/user";
import { logActivity } from "@/lib/logger";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { Reset, ResetSchema } from "@/schemas";

type ResetResponse = {
	error?: string;
	success?: string;
};

export const reset = async (values: Reset): Promise<ResetResponse> => {
	const validatedFields = ResetSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid email format" };
	}

	const { email } = validatedFields.data;

	const existingUser = await getUserByEmail(email);
	if (!existingUser) {
		return { error: "Email not found" };
	}

	try {
		const passwordResetToken = await generatePasswordResetToken(email);

		await sendPasswordResetEmail(
			passwordResetToken.email,
			passwordResetToken.token
		);

		await logActivity("info", `Password reset email sent to ${email}`);

		return { success: "Password reset email has been sent" };
	} catch (error) {
		console.error(error);

		await logActivity("error", "Failed to send password reset email");

		return { error: "Something went wrong" };
	}
};
