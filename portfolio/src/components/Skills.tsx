import React, { useState } from "react";
import {
  FaReact, FaNodeJs, FaGitAlt, FaFigma, FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiHtml5, SiCss, SiMongodb, SiPostgresql, SiFirebase,
  SiSolidity, SiEthereum, SiGithub, SiVite, SiFramer,
} from "react-icons/si";

type Tier = "all" | "proficient" | "familiar" | "learning";

const skills = [
  // Proficient
  { name: "React",       icon: FaReact,       tier: "proficient", color: "#61DAFB" },
  { name: "Next.js",     icon: SiNextdotjs,   tier: "proficient", color: "#ffffff" },
  { name: "TypeScript",  icon: SiTypescript,  tier: "proficient", color: "#3178C6" },
  { name: "JavaScript",  icon: SiJavascript,  tier: "proficient", color: "#F7DF1E" },
  { name: "Tailwind",    icon: SiTailwindcss, tier: "proficient", color: "#38BDF8" },
  { name: "HTML5",       icon: SiHtml5,       tier: "proficient", color: "#E34F26" },
  { name: "CSS3",        icon: SiCss,        tier: "proficient", color: "#1572B6" },
  // Familiar
  { name: "Node.js",     icon: FaNodeJs,      tier: "familiar",   color: "#68A063" },
  { name: "MongoDB",     icon: SiMongodb,     tier: "familiar",   color: "#47A248" },
  { name: "PostgreSQL",  icon: SiPostgresql,  tier: "familiar",   color: "#4169E1" },
  { name: "Firebase",    icon: SiFirebase,    tier: "familiar",   color: "#FFCA28" },
  { name: "Git",         icon: FaGitAlt,      tier: "familiar",   color: "#F05032" },
  { name: "GitHub",      icon: SiGithub,      tier: "familiar",   color: "#ffffff" },
  { name: "Figma",       icon: FaFigma,       tier: "familiar",   color: "#F24E1E" },
  { name: "Vite",        icon: SiVite,        tier: "familiar",   color: "#646CFF" },
  // Learning
  { name: "Solidity",    icon: SiSolidity,    tier: "learning",   color: "#363636" },
  { name: "Ethereum",    icon: SiEthereum,    tier: "learning",   color: "#627EEA" },
  { name: "Docker",      icon: FaDocker,      tier: "learning",   color: "#2496ED" },
  { name: "Framer",      icon: SiFramer,      tier: "learning",   color: "#ffffff" },
];

const tierLabel: Record<string, string> = {
  proficient: "Proficient",
  familiar:   "Familiar",
  learning:   "Currently learning",
};

const tierColor: Record<string, string> = {
  proficient: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  familiar:   "bg-purple-600/20 text-purple-400 border-purple-600/30",
  learning:   "bg-green-600/20 text-green-400 border-green-600/30",
};

const filters: { label: string; value: Tier }[] = [
  { label: "All",                value: "all" },
  { label: "Proficient",         value: "proficient" },
  { label: "Familiar",           value: "familiar" },
  { label: "Currently learning", value: "learning" },
];

const Skills: React.FC = () => {
  const [active, setActive] = useState<Tier>("all");

  const visible = active === "all"
    ? skills
    : skills.filter((s) => s.tier === active);

  return (
    <section id="skills" className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-3xl font-bold mb-4">Skills & Tech Stack</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Tools and technologies I've used to build real projects.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === f.value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {visible.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="group bg-[#111133] border border-gray-700/50 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-blue-500/50 hover:bg-[#151545] transition-all"
              >
                <Icon style={{ color: skill.color }} className="text-3xl group-hover:scale-110 transition-transform" />
                <p className="text-gray-300 text-xs text-center font-medium">{skill.name}</p>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${tierColor[skill.tier]}`}
                >
                  {tierLabel[skill.tier]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
