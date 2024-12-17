import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <section className="flex bg-indigo-600 text-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <Image
                        src="/doctor.png"
                        width={500}
                        height={500}
                        alt="Picture of doctor"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">
                        Your Mental Health Matters
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl">
                        AI-powered mental health support with a symptom checker,
                        mood tracker, and therapist connections. Take control of
                        your well-being today.
                    </p>
                    <a
                        href="#features"
                        className="mt-8 inline-block bg-white text-indigo-600 font-bold px-6 py-3 rounded hover:bg-gray-200"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            <section id="features" className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-800 text-center">
                        Features
                    </h2>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <Link
                            className="cursor-pointer p-6 bg-white rounded-lg shadow-md"
                            href="/chat"
                        >
                            <h3 className="text-xl font-bold text-indigo-600">
                                AI Chatbot
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Get personalized mental health advice and coping
                                techniques from our AI-powered chatbot.
                            </p>
                        </Link>
                        <div className="cursor-pointer p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-indigo-600">
                                Symptom Checker
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Assess your mental health with our
                                evidence-based questionnaire.
                            </p>
                        </div>
                        <div className="cursor-pointer p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-indigo-600">
                                Mood Tracker
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Log your daily mood and gain insights into
                                emotional trends.
                            </p>
                        </div>
                        <div className=" cursor-pointer p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-indigo-600">
                                Therapist Directory
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Find licensed therapists and book appointments
                                easily.
                            </p>
                        </div>
                        <div className="cursor-pointer p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-indigo-600">
                                Emergency Assistance
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Quick access to helplines and crisis resources
                                when you need them most.
                            </p>
                        </div>
                        <div className="cursor-pointer p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-indigo-600">
                                Resource Library
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Explore articles, videos, and guided exercises
                                to support your journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        At MindCare, we believe mental health is just as
                        important as physical health. Our mission is to make
                        mental health support accessible, affordable, and
                        stigma-free for everyone.
                    </p>
                </div>
            </section>

            <section
                id="contact"
                className="py-20 bg-gray-100 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/contactus.png')`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-800 text-left ml-10">
                        Contact Us
                    </h2>
                    <form className="mt-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md ml-10">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-600 font-medium"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-2 w-full border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-600 font-medium"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-2 w-full border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-600 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-2 w-full border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-indigo-600 text-white py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2024 MindCare. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
