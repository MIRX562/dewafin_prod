import { UserRole } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
	role: UserRole;
	isTwoFactorEnabled: boolean;
	isOAuth: boolean;
	email: string | undefined;
	employeeId?: string;
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}
