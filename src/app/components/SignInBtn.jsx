"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignInBtn() {
    return (
        <button
            onClick={() => signIn("google")}
            className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
        >
            <Image src='/google-logo.png' alt="google_logo" height={36} width={30}></Image>
            <span className="bg-blue-600 text-white px-3 py-3">
                Sign in with Google
            </span>

        </button>
    );
}