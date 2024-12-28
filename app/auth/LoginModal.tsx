"use client";

import { useState } from "react";
import { SignIn } from "../api/auth/githublogin";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ email, password });
    };

    const handleClickGithub = async () => {
        await SignIn();
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
            {/* Watermark Background Text */}
            <div className="absolute inset-0 flex items-top justify-center pointer-events-none">
                <h1 className="text-9xl font-extrabold text-indigo-600 opacity-40 select-none">
                    MIND CARE
                </h1>
            </div>

            {/* Login/Register Form */}
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8 z-10">
                <h2 className="text-2xl font-bold text-center text-indigo-600">
                    {isLogin ? "Login" : "Register"}
                </h2>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    {isLogin
                        ? "Don't have an account? "
                        : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-indigo-600 hover:underline"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>
                <p className="mt-4 text-center text-sm text-gray-600">
                    <button
                        className="text-indigo-600 hover:underline"
                        onClick={handleClickGithub}
                    >
                        Sign in with GitHub
                    </button>
                </p>
            </div>
        </div>
    );
}
