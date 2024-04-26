"use server";

import { currentUser } from "@/lib/sessionUser";
import { getUserById } from "@/data/user";
import { Settings } from "@/schemas";
import { db } from "@/lib/db";

// Function to update user settings
export const updateUserSettings = async (settings: Settings) => {
  // Get the current user
  const user = await currentUser();

  // If no user is found, return an error
  if (!user) {
    return { error: "Unauthorized: User not found" };
  }

  // Fetch the user from the database
  const dbUser = await getUserById(user.id);

  // If no user is found in the database, return an error
  if (!dbUser) {
    return { error: "Unauthorized: User not found in database" };
  }

  // If the user is using OAuth, restrict updates to certain fields
  if (user.isOAuth) {
    settings.email = undefined;
    settings.password = undefined;
    settings.newPassword = undefined;
    settings.isTwoFactorEnabled = undefined;
  }

  // Update the user settings in the database
  try {
    await db.user.update({
      where: { id: dbUser.id },
      data: settings,
    });
    return { success: "Settings successfully updated" };
  } catch (error) {
    // Handle potential errors during the update
    return { error: `Failed to update settings` };
  }
};
