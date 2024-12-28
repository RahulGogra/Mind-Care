import Chat from "../components/Chat";
import Header from "../components/header";
import Image from "next/image";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function chat() {
    const session = await auth();

    if (!session?.user) {
        redirect("/");
    }

    return (
        <>
            <Header />
            <section className="flex flex-col my-10 ">
                <div className=" bg-indigo-600 text-white px-4 sm:px-6 lg:px-8 py-4 text-center">
                    <Image
                        src="/chatbot.png"
                        height={100}
                        width={100}
                        alt="chatbot image"
                    />
                    <h1 className="text-4xl font-extrabold sm:text-5xl">
                        ChatBot
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl">
                        Start chatting with your personalised chat bot for
                        accurate diagonostic and mantain your mental health
                    </p>
                </div>
                <div className=" bg-gray-100 p-4">
                    <Chat />
                </div>
            </section>
        </>
    );
}
