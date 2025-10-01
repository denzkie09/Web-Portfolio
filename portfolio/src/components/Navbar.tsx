import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent absolute top-0 w-full z-10">
      <h1 className="text-white text-2xl font-bold">Denlie's Portfolio</h1>
      <ul className="flex gap-8 text-white">
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
