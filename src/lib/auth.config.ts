import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatesFields = LoginSchema.safeParse(credentials);

        if (validatesFields.success) {
          const { email, password } = validatesFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatched = await bcrypt.compare(password, user.password);

          if (passwordMatched) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
