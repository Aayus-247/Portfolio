import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiScikitlearn,
  SiOpenai
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },

    { name: "Python", icon: <FaPython /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },

    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
    { name: "OpenAI", icon: <SiOpenai /> },

  ];

  return (
    <section className="py-24 text-center">

      <h2 className="text-4xl mb-10">Skills & Tools</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <div
            key={i}
            className="bg-gray-900 p-6 rounded-xl flex flex-col items-center gap-3
            hover:scale-110 hover:bg-blue-600 transition duration-300"
          >
            <div className="text-3xl">{s.icon}</div>
            <p>{s.name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}