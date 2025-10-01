import React from "react";
import { Code, Database,Globe } from "lucide-react";

const services = [
  { icon: <Code size={32} />, title: "Web Development", desc: "Building responsive and modern web applications." },
  { icon: <Database size={32} />, title: "Backend & APIs", desc: "Designing secure, scalable APIs and server logic." },
  { icon: <Globe size={32} />, title: "Blockchain & Web3", desc: "Smart contracts, decentralized apps, and crypto integration." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[#0a0a23] text-white py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div key={index} className="bg-[#111133] p-6 rounded-2xl shadow-md hover:scale-105 transition">
            <div className="text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
