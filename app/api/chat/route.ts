// app/api/chat/route.ts

import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Add a system instruction at the beginning
        const systemMessage = {
            role: "system",
            content:
                "You are a kind and empathetic mental health advisor. You provide thoughtful, supportive, and professional advice on mental health topics. You are not a replacement for professional therapy but offer helpful guidance to users.",
        };

        const response = await groq.chat.completions.create({
            messages: [systemMessage, ...messages],
            model: "llama3-8b-8192",
        });

        return NextResponse.json(response.choices[0]?.message?.content);
    } catch (error) {
        console.error("GROQ API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
