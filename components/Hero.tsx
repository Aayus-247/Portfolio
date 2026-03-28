"use client";

import { motion } from "framer-motion";

import {
    SiOpenai,
    SiTensorflow,
    SiPytorch,
    SiHuggingface,
    SiKeras,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss
} from "react-icons/si";

import { FaPython, FaRobot, FaBrain } from "react-icons/fa";

// 🔥 UNIQUE ICONS DATA
const icons = [
    { icon: <SiOpenai />, name: "OpenAI", work: "Text & AI models" },
    { icon: <SiTensorflow />, name: "TensorFlow", work: "Deep learning" },
    { icon: <SiPytorch />, name: "PyTorch", work: "ML training" },
    { icon: <SiHuggingface />, name: "HuggingFace", work: "NLP models" },
    { icon: <SiKeras />, name: "Keras", work: "Neural networks" },
    { icon: <SiScikitlearn />, name: "Scikit-learn", work: "ML algorithms" },
    { icon: <SiNumpy />, name: "NumPy", work: "Math computing" },
    { icon: <SiPandas />, name: "Pandas", work: "Data analysis" },

    { icon: <FaPython />, name: "Python", work: "Backend logic" },
    { icon: <FaRobot />, name: "AI Bot", work: "Automation tasks" },
    { icon: <FaBrain />, name: "AI Brain", work: "Decision making" },

    { icon: <SiJavascript />, name: "JavaScript", work: "Frontend logic" },
    { icon: <SiNextdotjs />, name: "Next.js", work: "Fullstack apps" },
    { icon: <SiTailwindcss />, name: "Tailwind", work: "UI styling" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">

            {/* 🔥 HIGH FREQUENCY FLOATING ICONS */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>
                {[...Array(30)].map((_, i) => {
                    const item = icons[i % icons.length];

                    return (
                        <div
                            key={i}
                            className="absolute group pointer-events-auto"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        >
                            {/* ICON */}
                            <div className="text-6xl animate-[float_6s_infinite] hover:scale-125 transition text-gray-400 opacity-40 hover:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]">
                                {item.icon}
                            </div>

                            {/* TOOLTIP */}
                            <div className="absolute hidden group-hover:block bg-black text-white text-xs px-3 py-2 rounded-md -top-10 left-1/2 -translate-x-1/2 text-center border border-gray-700">
                                <div className="text-blue-400 font-semibold">
                                    {item.name}
                                </div>
                                <div className="text-gray-300">
                                    {item.work}
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>

            {/* 🔥 HERO CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10"
            >
                <h1 className="text-5xl md:text-7xl font-bold">
                    Hi, I'm <span className="text-blue-400">Aayush Singh</span>
                </h1>

                <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto">
                    Developer & Data Scientist building modern web apps and intelligent systems.
                </p>

                <div className="mt-8 flex justify-center gap-4">
                    <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-xl">
                        Projects
                    </a>

                    <a href="/software.pdf" className="border px-6 py-3 rounded-xl">
                        Resume
                    </a>
                </div>
            </motion.div>

        </section>
    );
}