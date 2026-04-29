import React from "react";
import { FaCode, FaCube, FaPenNib } from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Building fast, responsive web apps with React and Next.js — clean code, accessible markup, and optimized performance from the start.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "text-blue-400",
    border: "hover:border-blue-500/50",
    bg: "group-hover:bg-blue-600/5",
  },
  {
    icon: FaCube,
    title: "Blockchain Solutions",
    description:
      "Integrating Web3 into your product — smart contracts on Ethereum, wallet connections, and dApp frontends that are secure and user-friendly.",
    tags: ["Solidity", "Ethers.js", "Web3.js", "IPFS"],
    color: "text-purple-400",
    border: "hover:border-purple-500/50",
    bg: "group-hover:bg-purple-600/5",
  },
  {
    icon: FaPenNib,
    title: "UI/UX Design",
    description:
      "Turning wireframes into polished, production-ready interfaces — component libraries, design systems, and pixel-perfect Figma-to-code delivery.",
    tags: ["Figma", "Design Systems", "Accessibility", "Motion"],
    color: "text-teal-400",
    border: "hover:border-teal-500/50",
    bg: "group-hover:bg-teal-600/5",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            What I offer
          </p>
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Whether you need a full product built or a specific piece of the
            stack — here's how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group bg-[#111133] p-8 rounded-xl border border-gray-700/50 ${service.border} ${service.bg} transition-all`}
              >
                <div className={`${service.color} text-3xl mb-5`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
