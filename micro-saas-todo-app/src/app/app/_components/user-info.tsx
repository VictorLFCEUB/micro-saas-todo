'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
    user: Session["user"]
}

export function UserInfo({ user }: Props) {

    if(!user) return null

    return (
    <div>
        <Avatar>
            <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span>
            {`Hello, ${user.email}`}
        </span>
        <Button onClick={() => signOut()}>
            Sign out
        </Button>
    </div>
    )
}