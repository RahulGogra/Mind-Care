import { auth } from "@/auth";
import LoginModal from "./LoginModal";
import Link from "next/link";

export default async function LoginPage() {
    const session = await auth();

    return (
        <>
            {session?.user ? (
                <Link href="/profile">{session.user.name}</Link>
            ) : (
                <LoginModal />
            )}
        </>
    );
}
