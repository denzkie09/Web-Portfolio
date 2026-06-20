import React, { useState } from "react";
import { FaTimes, FaExternalLinkAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";
import OJT from "../assets/Certificates/OJT.jpg";
import Eth from "../assets/Certificates/ETH.jpg";
import Diploma from "../assets/Certificates/Diploma.png";


type Category = "all" | "academic" | "online";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: "academic" | "online";
  image: string;        
  credentialUrl?: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    title: "Bachelor of Science in Computer Engineering",
    issuer: "University of Cebu",
    date: "2026",
    category: "academic",
    image: Diploma,        
    description: "4-year degree covering software engineering, computer architecture, and web development.",
  },
  {
    title: "Certificate of Completion:IT Internship Program",
    issuer: "Savoy Hotel Mactan Newtown",
    date: "2024",
    category: "academic",
    image: OJT,
    description: "300 Hours of hands-on experience in IT support, network maintenance, and system administration.",
  },
  {
    title: "Certificate of Completion:Infinite Hack: Ethereum and Solidity Development",
    issuer: "Christine Erispe(Core,Ethereum Philippines)",
    date: "2025",
    category: "academic",
    image: Eth,
    description: "5-day intensive workshop on Ethereum blockchain development, smart contracts, and decentralized applications (DApps).",
  },
];

const filters: { label: string; value: Category; icon: React.ReactNode }[] = [
  { label: "All",            value: "all",      icon: null },
  { label: "Academic",       value: "academic", icon: <FaGraduationCap /> },
  { label: "Online Courses", value: "online",   icon: <FaCertificate /> },
];

const categoryColors: Record<string, string> = {
  academic: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  online:   "bg-purple-600/20 text-purple-400 border-purple-600/30",
};

const PlaceholderImage: React.FC<{ title: string }> = ({ title }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0d0d2b] text-gray-600 gap-3">
    <FaCertificate className="text-5xl opacity-30" />
    <p className="text-xs text-center px-4 opacity-40">{title}</p>
  </div>
);

const Certificates: React.FC = () => {
  const [active, setActive] = useState<Category>("all");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const visible =
    active === "all" ? certificates : certificates.filter((c) => c.category === active);

  return (
    <section id="certificates" className="py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl font-bold mb-4">Certificates & Qualifications</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Academic achievements and completed courses that back up my skills.
            Click any card to view the full certificate.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === f.value
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-gray-700 text-gray-400 hover:border-blue-500 hover:text-blue-400"
              }`}
            >
              {f.icon}
              {f.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ml-1 ${
                active === f.value ? "bg-white/20" : "bg-gray-700"
              }`}>
                {f.value === "all"
                  ? certificates.length
                  : certificates.filter((c) => c.category === f.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Certificate grid */}
        {visible.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            No certificates in this category yet.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((cert, i) => (
              <div
                key={i}
                onClick={() => setSelected(cert)}
                className="group bg-[#111133] border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-1 transition-all cursor-pointer"
              >
                {/* Certificate preview */}
                <div className="relative h-44 overflow-hidden bg-[#0a0a2a]">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <PlaceholderImage title={cert.title} />
                  )}
                  {/* View overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Click to view
                    </span>
                  </div>
                  {/* Category badge */}
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-md border capitalize ${categoryColors[cert.category]}`}>
                    {cert.category === "online" ? "Online Course" : "Academic"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 text-xs font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                  {cert.description && (
                    <p className="text-gray-500 text-xs mt-2 line-clamp-2">{cert.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#111133] border border-gray-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes />
            </button>

            {/* Full cert image */}
            <div className="w-full bg-[#0a0a2a] rounded-t-2xl overflow-hidden" style={{ minHeight: "300px" }}>
              {selected.image ? (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-contain max-h-[60vh]"
                />
              ) : (
                <div className="h-64 flex items-center justify-center">
                  <PlaceholderImage title={selected.title} />
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-6">
              <span className={`text-xs font-semibold px-2 py-1 rounded-md border capitalize ${categoryColors[selected.category]}`}>
                {selected.category === "online" ? "Online Course" : "Academic"}
              </span>
              <h3 className="text-white text-xl font-bold mt-3 mb-1">{selected.title}</h3>
              <p className="text-blue-400 text-sm font-medium mb-1">{selected.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{selected.date}</p>
              {selected.description && (
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{selected.description}</p>
              )}
              {selected.credentialUrl && (
                <a
                  href={selected.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <FaExternalLinkAlt className="text-xs" /> Verify Credential
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
