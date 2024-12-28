import { auth } from "@/auth";
import LoginModal from "./LoginModal";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();
    if (session?.user) {
        redirect("/");
    }
    return (
        <>
            <LoginModal />
        </>
    );
}
