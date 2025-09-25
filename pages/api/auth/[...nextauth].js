import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../ui/libs/mongodb";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: { prompt: "select_account" }, // forces account selection
            },
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            const db = (await clientPromise).db();
            const usersCollection = db.collection("users");

            const existingUser = await usersCollection.findOne({ email: user.email });

            if (existingUser) {
                // If the provider is different, allow linking by updating the user
                if (existingUser.email && existingUser.provider !== account.provider) {
                    await usersCollection.updateOne(
                        { email: user.email },
                        { $set: { provider: account.provider, providerAccountId: account.id } }
                    );
                }
            }

            return true; // allow sign in
        },
        pages: {
            error: "/", // custom error page
        },
        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            return token;
        },

        async session({ session, token }) {
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.picture;
            return session;
        },
    },
});
