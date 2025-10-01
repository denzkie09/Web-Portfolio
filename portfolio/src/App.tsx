import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";     
import Contact from "./components/Contact"; 


const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
