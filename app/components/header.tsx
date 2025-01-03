import Link from "next/link";
import LoginPage from "../auth/page";
import { auth } from "@/auth";

export default async function Header() {
    const session = await auth();
    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        MindCare
                    </h1>
                </Link>

                <nav>
                    <ul className="flex space-x-6 text-gray-600">
                        <li>
                            <Link
                                href="/#features"
                                className="hover:text-indigo-600"
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#about"
                                className="hover:text-indigo-600"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#contact"
                                className="hover:text-indigo-600"
                            >
                                Contact
                            </Link>
                        </li>
                        <Link
                            href={session?.user ? "/profile" : "/auth"}
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 m-0"
                        >
                            {session?.user ? (
                                session?.user?.name
                            ) : (
                                <span> Get started</span>
                            )}
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
