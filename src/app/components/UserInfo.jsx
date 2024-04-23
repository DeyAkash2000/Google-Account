"use client";

import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { status, data: session } = useSession();

    if(status === 'authenticated')
    {
        return <div>
            <Image src = {session?.user?.image} width = {90} height = {90} />
        </div>;
    } else {
        return <SignInBtn />;
    }
}