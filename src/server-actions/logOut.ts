"use server";

import { signOut } from "@/lib/auth";
import { logActivity } from "@/lib/logger";

export const logOut = async () => {
	logActivity("info", "User is Logging Out");
	await signOut();
};
