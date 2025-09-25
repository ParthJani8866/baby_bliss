"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!session ? (
        <button
          onClick={() => signIn("google")}
          className="px-6 py-3 bg-red-500 text-white rounded shadow hover:bg-red-600"
        >
          Login with Google
        </button>
      ) : (
        <div>
          <p>Welcome, {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="px-6 py-3 bg-gray-700 text-white rounded shadow hover:bg-gray-800"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
