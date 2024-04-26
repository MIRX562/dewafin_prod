"use server";

import { getResetPasswordTokenByToken } from "@/data/passwordResetToken";
import { NewPassword, NewPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

type NewPasswordResponse = {
  error?: string;
  success?: string;
};

export const newPassword = async (
  values: NewPassword,
  token?: string | null,
): Promise<NewPasswordResponse> => {
  // Check if token is provided
  if (!token) {
    return { error: "Token is missing" };
  }

  // Validate the provided fields using the schema
  const validatedFields = NewPasswordSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid input fields" };
  }

  const { password } = validatedFields.data;

  // Retrieve the reset password token from the database
  const existingToken = await getResetPasswordTokenByToken(token);
  if (!existingToken) {
    return { error: "Invalid token provided" };
  }

  // Check if the token has expired
  const isTokenExpired = new Date(existingToken.expires) < new Date();
  if (isTokenExpired) {
    return { error: "Token has expired" };
  }

  // Retrieve the user associated with the token's email
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "No user found with the associated email" };
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Update the user's password
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  // Delete the used password reset token
  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  // Return a success message indicating the password has been updated
  return { success: "Password has been successfully updated" };
};
