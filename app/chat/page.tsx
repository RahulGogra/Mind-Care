import Header from "../components/header";
import Image from "next/image";

export default function chat() {
    return (
        <>
            <Header />
            <section className="flex bg-indigo-600 text-white my-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
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
            </section>
        </>
    );
}
