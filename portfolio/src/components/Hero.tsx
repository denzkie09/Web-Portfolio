import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mt-4">Denlie’s Portfolio</h1>
        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
