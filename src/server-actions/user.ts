"use server";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { currentRole, currentUser } from "@/lib/sessionUser";
import { AddUser, AddUserSchema } from "@/schemas";

type RegisterResponse = {
  error?: string;
  success?: string;
};

export const addUser = async (values: AddUser): Promise<RegisterResponse> => {
  // Checks user auth
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  // Validate the provided fields using the schema
  const validatedFields = AddUserSchema.safeParse(values);
  if (!validatedFields.success) {
    // Log the invalid values for debugging purposes
    console.log("Invalid inputs:", values);
    return { error: "Invalid inputs provided" };
  }

  const { email, password, name, image, isTwoFactorEnabled, role } =
    validatedFields.data;

  // Check if a user with the provided email already exists
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already registered" };
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user record in the database with email already verified
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      emailVerified: new Date(),
      image,
      isTwoFactorEnabled,
      role,
    },
  });

  // Return a success message
  return {
    success: "Success Creating New User",
  };
};

export const deleteUser = async (userId: string): Promise<RegisterResponse> => {
  const role = await currentRole();

  if (role !== "ADMIN") {
    return { error: "You're not Allowed" };
  }

  await db.user.delete({
    where: {
      id: userId,
    },
  });

  return { success: "User is Deleted" };
};
