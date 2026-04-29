import React from "react";

const timeline = [
  {
    year: "2025",
    title: "BS Computer Engineering",
    subtitle: "Graduated · Cebu, Philippines",
    current: true,
  },
  {
    year: "2024",
    title: "Portfolio & Blockchain Projects",
    subtitle: "Built 3 full-stack projects using React, Next.js, Solidity",
    current: false,
  },
  {
    year: "2023",
    title: "Deepened Frontend Skills",
    subtitle: "TypeScript, Tailwind CSS, REST APIs, Git workflow",
    current: false,
  },
  {
    year: "2021",
    title: "Started Computer Engineering",
    subtitle: "Began learning web dev alongside coursework",
    current: false,
  },
];

const highlights = [
  { label: "Degree", value: "BS Computer Engineering" },
  { label: "Focus", value: "Frontend · React · Next.js" },
  { label: "Location", value: "Cebu, Philippines" },
  { label: "Status", value: "Open to opportunities" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Bio */}
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="text-3xl font-bold mb-6">
              A developer who cares about the details
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm <span className="text-blue-400 font-semibold">John Denlie</span>, a
              fresh Computer Engineering graduate from Cebu, Philippines. I
              specialize in building clean, performant frontend interfaces with
              React and Next.js — the kind of UIs that are fast to load, easy
              to use, and maintainable long-term.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm comfortable across the full stack and have hands-on experience
              with TypeScript, Node.js, and Tailwind CSS. I'm actively looking
              for a frontend or full-stack role where I can contribute from day
              one and keep growing.
            </p>

            {/* Quick info grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#111133] border border-gray-700/50 rounded-lg px-4 py-3"
                >
                  <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-6">
              My journey
            </p>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-700" />

              <div className="flex flex-col gap-8">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start pl-2">
                    {/* Dot */}
                    <div className={`relative z-10 w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                      item.current
                        ? "border-blue-500 bg-blue-600"
                        : "border-gray-600 bg-[#08081d]"
                    }`}>
                      {item.current && (
                        <span className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <p className="text-blue-400 text-xs font-semibold mb-1">{item.year}</p>
                      <p className="text-white font-medium text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
