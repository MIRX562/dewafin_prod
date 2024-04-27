"use server";

import { getUserByEmail, getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { currentRole, currentUser } from "@/lib/sessionUser";
import { AddUser, AddUserSchema, EditUser } from "@/schemas";
import bcrypt from "bcryptjs";

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

  try {
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
    // Create a new user record in the database with email already verified
    await db.user.delete({
      where: {
        id: userId,
      },
    });

    // Return a success message
    return { success: "User is Deleted" };
  } catch (error) {
    return { error: "Something wen't wrong" };
  }
};

export const editUser = async (
  userData: EditUser,
  userId: string | undefined,
) => {
  // Get the current user
  const user = await currentUser();

  // If no user is found, return an error
  if (!user) {
    return { error: "Unauthorized: User not found" };
  }

  // Fetch the user from the database
  const dbUser = await getUserById(userId);

  // If no user is found in the database, return an error
  if (!dbUser) {
    return { error: "Unauthorized: User not found in database" };
  }

  // Update the user settings in the database
  try {
    await db.user.update({
      where: { id: dbUser.id },
      data: userData,
    });

    return { success: "Settings successfully updated" };
  } catch (error) {
    // Handle potential errors during the update
    return { error: `Failed to update settings` };
  }
};
