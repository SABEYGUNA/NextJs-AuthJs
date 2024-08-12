import { auth } from "@/configuration/auth"
import { SignOut } from "./sign-out"

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    return (
        <div>
            <h5>{session.user.name}</h5>
            <h6>{session.user.email}</h6>
            {
                session.user.image && (
                    <img src={session.user.image} className="avator-image" alt="User Avatar" />
                )
            }
            <SignOut></SignOut>
        </div>
    )
}