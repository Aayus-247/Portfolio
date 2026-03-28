import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
    const show = projects.slice(0, 3);

    return (
        <section id="projects" className="py-24 px-6">

            <h2 className="text-4xl text-center mb-10">Projects</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {show.map((p, i) => (
                    <div key={p.id} className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">

                        <img
                            src={`/project${i + 1}.png`}
                            className="mb-4 rounded-lg h-40 w-full object-cover"
                        />

                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400">{p.description}</p>

                        <div className="flex gap-3 mt-4">
                            <a href={p.github} className="bg-white text-black px-3 py-1 rounded">GitHub</a>
                            <a href={p.live} className="border px-3 py-1 rounded">Live</a>
                        </div>

                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link href="/projects" className="bg-blue-500 px-6 py-3 rounded-xl">
                    More Projects
                </Link>
            </div>

        </section>
    );
}