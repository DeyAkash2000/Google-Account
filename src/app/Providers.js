"use client";

import { SessionProvider } from "next-auth/react";


export const NextAuthProvider = ({ Children }) => {
    return <SessionProvider>{Children}</SessionProvider>;
};