"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Page() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/code-bg.mp4" type="video/mp4" />
      </video>

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-16 max-w-5xl mx-auto">

        {/* BACK BUTTON */}
        <Link href="/" className="text-blue-400 mb-10 inline-block">
          ← Back
        </Link>

        <h1 className="text-4xl mb-10">All Projects</h1>

        {/* PROJECT LIST */}
        {projects.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setActive(p.id)}
            onMouseLeave={() => setActive(null)}
            className="mb-6 cursor-pointer transition-all duration-500"
          >

            {/* TITLE PANEL */}
            <div className="bg-black/60 p-5 rounded-xl hover:bg-blue-900/30">
              <h2 className="text-xl">{p.title}</h2>
            </div>

            {/* EXPAND PANEL */}
            <div
              className={`overflow-hidden transition-all duration-700 ${active === p.id ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
            >
              <div className="bg-gray-900/80 p-6 rounded-xl">

                <p className="mb-4 text-gray-300">{p.description}</p>
                {/* 🔥 LIVE LINK BUTTON */}
                {p.live && p.live !== "#" && (
                  <div className="mb-4">
                    <a
                      href={p.live}
                      target="_blank"
                      className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/40 transition"
                    >
                      🚀 Live Demo
                    </a>
                  </div>
                )}
                <h4 className="text-blue-400">Why this project?</h4>
                <p className="text-gray-400 mb-3">
                  Real-world problem solving and learning practical skills.
                </p>

                <h4 className="text-blue-400">How it was built?</h4>
                <p className="text-gray-400 mb-3">
                  Developed step by step using structured coding and testing.
                </p>

                <h4 className="text-blue-400">Tools Used:</h4>
                <ul className="text-gray-400">
                  {p.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}