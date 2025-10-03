import React from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";     
import Contact from "./components/Contact"; 
import Projects from "./components/Projects";
import bg from "./assets/BG.jpg"; 

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Semi-transparent overlay so the background image is visible */}
      <div className="bg-black bg-opacity-70 min-h-screen font-sans">
        <Navbar />
        <About />
        <Services />
        <Projects/>
        <Contact />
      </div>
    </div>
  );
};

export default App;
