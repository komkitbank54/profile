"use client";

import Typewriter from "@/components/Typewriter";

export default function Hero() {
    return (
        <section className="flex flex-col items-start justify-start text-center py-20 bg-gradient-to-b from-black to-gray-900 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <Typewriter typingSpeed={80}>
                    Komkit Nitinuntouchporn
                </Typewriter>
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-400">
                <Typewriter typingSpeed={80}>
                    I build modern web applications with Next.js
                </Typewriter>
            </h2>
        </section>
    );
}
