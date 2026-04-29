import React, { useEffect, useState } from "react";
import ProfileImage from "../assets/Denlie.jpg";

const roles = ["Frontend Developer", "React Engineer", "UI/UX Enthusiast", "Next.js Developer"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-20 pt-24"
    >
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Available for work
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-blue-400">John Denlie</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
            <span>{displayed}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
            I build fast, accessible, and visually polished web applications
            using React and Next.js. Fresh graduate ready to ship real products
            and grow with a great team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-white font-semibold rounded-lg transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-10 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-gray-500 text-sm">Projects shipped</p>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <p className="text-2xl font-bold text-white">5+</p>
              <p className="text-gray-500 text-sm">Technologies</p>
            </div>
            <div className="border-l border-gray-700 pl-8">
              <p className="text-2xl font-bold text-white">2026</p>
              <p className="text-gray-500 text-sm">Fresh graduate</p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 scale-110 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-blue-400/20 scale-125" />
            <img
              src={ProfileImage}
              alt="John Denlie"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-600 relative z-10"
            />
            {/* Status badge */}
            <div className="absolute bottom-3 right-3 z-20 bg-gray-900 border border-gray-700 rounded-full px-3 py-1 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-300">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
