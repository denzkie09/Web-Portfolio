import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import bg from "./assets/BG.jpg";

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen font-sans">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </div>
    </div>
  );
};

export default App;
