"use client";
import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { status, data: session } = useSession();

    if (status === 'authenticated') {

        return (
            <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-red-200">
                <Image className="rounded-full" src={session?.user?.image} alt="user_image" width={90} height={90} />
                <div>
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
            </div>

        )
    } else {
        return <SignInBtn />;
    }
}