import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './db';
import authConfig from './auth.config';
import { getUserById } from '@/data/user';
import { UserRole } from '@prisma/client';
export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: '/auth/login',
		error: '/auth/error',
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
			if (account?.provider !== 'credentials') return true;

			const existingUser = await getUserById(user.id);

			if (!existingUser?.emailVerified) return false;

			// 2fa check

			return true;
		},
		async jwt({ token }) {
			if (!token.sub) {
				return token;
			}
			const existingUserById = await getUserById(token.sub);
			if (!existingUserById) return token;
			token.role = existingUserById.role;
			console.log({ token });
			return token;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}
			console.log({ sessionToke: token, session });
			return session;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: 'jwt' },
	...authConfig,
});
