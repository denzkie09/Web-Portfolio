import React from "react";
import ProfileImage from "../assets/Denlie.jpg";

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
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image with decorative frame */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-blue-600/20 blur-sm" />
              <img
                src={ProfileImage}
                alt="John Denlie"
                className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl object-cover border border-blue-600/40"
              />
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default About;
