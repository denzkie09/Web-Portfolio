import React from "react";
import { FaGithub } from "react-icons/fa";
import ticketLogo from "../assets/ticket.jpg";
import realEstateLogo from "../assets/realestate.jpg";
import portfolioLogo from "../assets/portfolio.jpg";

const projects = [
  {
    title: "Blockchain Event Ticketing",
    description:
      "A decentralized ticketing platform ensuring secure, transparent, and fair event ticket sales.",
    tech: ["React", "Solidity", "Web3", "Node.js"],
    link: "https://github.com/denzkie09/TicketChain", 
    logo: ticketLogo,
  },
  {
    title: "Real Estate Tokenization",
    description:
      "Fractional real estate ownership using blockchain smart contracts, enabling global investors to participate.",
    tech: ["Next.js", "Ethereum", "TailwindCSS"],
    link: "https://github.com/prinzeesalmeron/newProject",
    logo: realEstateLogo,
  },
  {
    title: "Portfolio Website",
    description:
      "My personal responsive portfolio built with React + Tailwind showcasing my skills, experience, and projects.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    link: "https://github.com/denzkie09/Web-Portfolio",
    logo: portfolioLogo,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#08081d]/80">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="text-gray-300 mb-12">
          Here are some of my GitHub projects:
        </p>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111133] p-6 rounded-xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
            >
              {/* Logo */}
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="w-20 h-20 mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                <FaGithub className="text-lg" /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
