import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import prisma from "../../prisma";

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;
console.log(`ENV VARS`)
console.log(`process.env.GITHUB_ID`, process.env.GITHUB_ID)
console.log(`process.env.GITHUB_SECRET`, process.env.GITHUB_SECRET)
console.log(`process.env.NEXTAUTH_URL`, process.env.NEXTAUTH_URL)

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({ prisma }),
  secret: process.env.SECRET,
};