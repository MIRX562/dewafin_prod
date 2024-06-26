import { getAccountByUserId } from "@/data/account";
import { getTwoFactorConfirmationByUserId } from "@/data/twoFactorConfirmation";
import { getUserById } from "@/data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { db } from "./db";

export const {
	auth,
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/auth/login",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user }) {
			await db.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			});
		},
	},
	callbacks: {
		async signIn({ user, account }) {
			if (account?.provider !== "credentials") return true;

			const existingUser = await getUserById(user.id);

			if (!existingUser?.emailVerified) return false;

			if (existingUser.isTwoFactorEnabled) {
				const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
					existingUser.id
				);
				if (!twoFactorConfirmation) {
					return false;
				}
				await db.twoFactorConfirmation.delete({
					where: { id: twoFactorConfirmation.id },
				});
			}

			return true;
		},
		async jwt({ token }) {
			if (!token.sub) {
				return token;
			}
			const existingUserById = await getUserById(token.sub);

			if (!existingUserById) return token;

			const existingAccount = await getAccountByUserId(existingUserById.id);

			token.isOAuth = !!existingAccount;
			token.name = existingUserById.name;
			token.email = existingUserById.email;
			token.picture = existingUserById.image;
			token.role = existingUserById.role;
			token.isTwoFactorEnabled = existingUserById.isTwoFactorEnabled;
			token.employeeId = existingUserById.employeeId;
			// console.log({ token });
			return token;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}
			if (session.user) {
				session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
				session.user.isOAuth = token.isOAuth as boolean;
				session.user.name = token.name;
				session.user.email = token.email as string;
				session.user.employeeId = token.employeeId as string;
			}
			// console.log({ sessionToken: token, session });
			return session;
		},
	},
	adapter: PrismaAdapter(db),
	session: {
		strategy: "jwt",
		maxAge: 14 * 24 * 60 * 60,
		updateAge: 23 * 60 * 60,
	},
	...authConfig,
});
