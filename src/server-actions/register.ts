"use server";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { logActivity } from "@/lib/logger";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { Register, RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";

type RegisterResponse = {
	error?: string;
	success?: string;
};

export const register = async (values: Register): Promise<RegisterResponse> => {
	try {
		const validatedFields = RegisterSchema.safeParse(values);
		if (!validatedFields.success) {
			console.log("Invalid inputs:", values);
			return { error: "Invalid inputs provided" };
		}

		const { email, password, name } = validatedFields.data;

		const existingUser = await getUserByEmail(email);
		if (existingUser) {
			return { error: "Email already registered" };
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await db.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});

		const verificationToken = await generateVerificationToken(email);

		await sendVerificationEmail(
			verificationToken.email,
			verificationToken.token
		);

		await logActivity("info", `User registered: ${email}`);

		return {
			success: "Confirmation email sent. Please verify your email.",
		};
	} catch (error: any) {
		await logActivity("error", `Error registering user: ${error.message}`);

		throw new Error("Registration failed: " + error.message);
	}
};
