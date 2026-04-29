import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ticketLogo from "../assets/ticket.jpg";
import realEstateLogo from "../assets/realestate.jpg";
import portfolioLogo from "../assets/portfolio.jpg";

type Category = "all" | "frontend" | "blockchain" | "fullstack";

const projects = [
  {
    title: "Blockchain Event Ticketing",
    description:
      "Built a decentralized ticketing platform using React and Solidity, eliminating ticket fraud and scalping by recording all sales transparently on-chain.",
    tech: ["React", "Solidity", "Web3.js", "Node.js"],
    category: "blockchain" as Category,
    link: "https://github.com/denzkie09/TicketChain",
    demo: "",
    logo: ticketLogo,
    highlight: "Fraud-proof ticket sales via smart contracts",
  },
  {
    title: "Real Estate Tokenization",
    description:
      "Developed a platform enabling fractional property ownership through Ethereum smart contracts, making real estate investment accessible to small investors globally.",
    tech: ["Next.js", "Ethereum", "TailwindCSS"],
    category: "blockchain" as Category,
    link: "https://github.com/prinzeesalmeron/newProject",
    demo: "",
    logo: realEstateLogo,
    highlight: "Fractional ownership via ERC-20 tokens",
  },
  {
    title: "Portfolio Website",
    description:
      "Designed and built this responsive portfolio from scratch using React and Tailwind CSS, focusing on clean aesthetics, smooth UX, and fast load times.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    category: "frontend" as Category,
    link: "https://github.com/denzkie09/Web-Portfolio",
    demo: "",
    logo: portfolioLogo,
    highlight: "Fully responsive · TypeScript · Tailwind",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All",        value: "all" },
  { label: "Frontend",   value: "frontend" },
  { label: "Blockchain", value: "blockchain" },
  { label: "Full Stack", value: "fullstack" },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#08081d]/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A selection of real projects — click GitHub to see the code.
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

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((project, index) => (
            <div
              key={index}
              className="group bg-[#111133] rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-1 flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden bg-[#0a0a2a]">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 bg-blue-600/80 text-white rounded-md capitalize">
                  {project.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Highlight callout */}
                <p className="text-blue-400 text-xs font-medium mb-2">
                  ✦ {project.highlight}
                </p>

                <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-600/20 text-blue-400 rounded-md border border-blue-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors flex-1 justify-center"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors flex-1 justify-center"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/denzkie09/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-blue-400 hover:text-blue-400 text-gray-300 rounded-lg transition-colors text-sm font-medium"
          >
            <FaGithub /> View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
