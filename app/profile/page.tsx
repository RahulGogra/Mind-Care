import { auth, signOut } from "@/auth";
import ProfileDetails from "./ProfileDetails";
import Header from "../components/header";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    const { user } = session;

    async function handleSignOut() {
        "use server";
        await signOut();
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Header />
            <h1 className="text-3xl font-bold text-indigo-600 my-6">
                Your Profile
            </h1>
            <ProfileDetails user={user} />
            <form action={handleSignOut}>
                <button
                    type="submit"
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    SignOut
                </button>
            </form>
        </div>
    );
}
