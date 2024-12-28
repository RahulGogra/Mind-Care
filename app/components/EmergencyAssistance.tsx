"use client";

import React from "react";

interface EmergencyContact {
    name: string;
    contact: string;
    description: string;
}

const emergencyContacts: EmergencyContact[] = [
    {
        name: "National Ambulance Service",
        contact: "108",
        description: "24/7 Emergency Ambulance Service",
    },
    {
        name: "Emergency Medical Helpline",
        contact: "102",
        description: "Free Ambulance Service for Pregnant Women and Infants",
    },
    {
        name: "Private Ambulance Services",
        contact: "1298",
        description: "Private Medical Emergency Assistance",
    },
    {
        name: "National Disaster Response Force (NDRF)",
        contact: "011-24363260",
        description: "Disaster and Crisis Management",
    },
    {
        name: "Blood Bank Helpline",
        contact: "104",
        description: "Connect with nearest blood banks",
    },
];

export default function EmergencyAssistance() {
    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-red-600 text-center mb-4">
                🚑 Emergency Medical Assistance
            </h1>
            <p className="text-gray-700 text-center mb-6">
                In case of medical emergencies, please contact the following
                helpline numbers.
            </p>

            <div className="mt-8 text-center my-4">
                <h3 className="text-lg font-bold mb-2">📍 Quick Actions</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="tel:108"
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        🚑 Call Ambulance (108)
                    </a>
                    <a
                        href="tel:102"
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        🩺 Call Medical Helpline (102)
                    </a>
                    <a
                        href="https://www.google.com/maps/search/hospital+near+me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        🗺️ Find Nearest Hospital
                    </a>
                </div>
            </div>

            <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                    <div
                        key={index}
                        className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-lg font-semibold">
                            {contact.name}
                        </h2>
                        <p className="text-gray-600">{contact.description}</p>
                        <a
                            href={`tel:${contact.contact}`}
                            className="inline-block mt-2 text-blue-600 hover:underline"
                        >
                            📞 Call: {contact.contact}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
