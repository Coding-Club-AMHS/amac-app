import NextAuth from "next-auth"
import { connectToDatabase } from "../../../util/db";

import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {

        const { client } = await connectToDatabase();
        const user = await client.db('authdb').collection("users").findOne({username:credentials.username, password:credentials.password});

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  database: process.env.MONGODB_URI,
  secret: process.env.SECRET,

  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 1 day
  },

  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    encryption: true,
  },

  pages: {
    signIn: '/auth/sign-in',  // Displays signin buttons
  },

  debug: false,
})