"use client";

import { useState } from "react";
import Image from "next/image";

type User = {
    name: string;
    email: string;
    avatarUrl?: string;
};

type ProfileDetailsProps = {
    user: User;
};

export default function ProfileDetails({ user }: ProfileDetailsProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated user data:", formData);
        setIsEditing(false);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            {user.avatarUrl && (
                <Image
                    src={user.avatarUrl}
                    alt="Avatar"
                    height={100}
                    width={100}
                    className="w-24 h-24 rounded-full mx-auto mb-6"
                />
            )}
            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        Save Changes
                    </button>
                </form>
            ) : (
                <div className="text-center space-y-4">
                    <p className="text-lg font-semibold text-gray-800">
                        {user.name}
                    </p>
                    <p className="text-gray-600">{user.email}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
}
