import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session, token }:any) {
      session.user.name = token.username;
      return session;
    },  
    async jwt({ token, user, account, profile }:any) {
      if (account && profile) {
        token.username = profile.login; // GitHub username
      }
      return token;
    },
  },
};
