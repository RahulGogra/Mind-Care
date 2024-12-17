import Link from "next/link";

export default function Header() {
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
                            <a
                                href="#features"
                                className="hover:text-indigo-600"
                            >
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-indigo-600">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-indigo-600"
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
