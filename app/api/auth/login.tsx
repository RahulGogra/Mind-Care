"use server";
import { signIn, auth } from "@/auth";

export async function SignIn() {
    return await signIn("github");
}

export async function Auth() {
    return await auth();
}
