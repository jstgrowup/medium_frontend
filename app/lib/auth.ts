import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { AuthOptions } from "next-auth";
import { AUTH_CONSTANTS } from "@/utils/types.ts/auth.types";
import { AuthUserResponseInterface } from "@/utils/types.ts/auth.types";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<AuthUserResponseInterface | any> {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error(AUTH_CONSTANTS.NO_EMAIL_PASS);
          }
          const foundUser = await db.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (foundUser) {
            const decryptedPassword = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (!decryptedPassword) {
              throw new Error(AUTH_CONSTANTS.WRONG_PASS);
            } else {
              return {
                id: String(foundUser.id),
                email: foundUser?.email ?? "",
              };
            }
          } else {
            const encryptedPass = await bcrypt.hash(credentials.password, 10);
            const { createdUser } = await db.$transaction(
              async (prisma: any) => {
                const createdUser = await prisma.user.create({
                  data: {
                    email: credentials.email,
                    password: encryptedPass,
                  },
                });

                const userBalance = await prisma.balance.create({
                  data: {
                    userId: createdUser.id,
                    amount: 0,
                    locked: 0,
                  },
                });

                return { createdUser, userBalance };
              }
            );
            if (createdUser) {
              return {
                id: String(createdUser.id),
                email: createdUser.email,
              };
            } else {
              throw new Error(AUTH_CONSTANTS.ERROR_IN_CREATING_ACCOUNT);
            }
          }
        } catch (error: any) {
          throw new Error(
            error.message || "An error occurred during authentication"
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user = {
        id: token.sub,
        email: token.email,
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};
