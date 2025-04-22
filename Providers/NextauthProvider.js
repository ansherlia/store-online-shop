"use client";
import { SessionProvider } from "next-auth/react";

function NextauthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextauthProvider;
