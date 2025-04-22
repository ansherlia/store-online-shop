const { default: NextAuth } = require("next-auth");
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import { verifyPassword } from "../../../../../utils/auth";
import connectDB from "../../../../../utils/connectDB";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Please completed the field!");
        }

        const userExist = await User.findOne({ email });

        if (!userExist) {
          throw new Error("User not exist!");
        }

        const verifyP = await verifyPassword(password, userExist.password);
        if (!verifyP) {
          throw new Error("Email or password is incorrect!");
        }

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
