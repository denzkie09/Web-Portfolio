import React from "react";
import ProfileImage from "../assets/Denlie.jpg";

const About: React.FC = () => {
  return (

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={ProfileImage} 
            alt="Profile"
            className="w-60 h-60 rounded-full object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>

        {/* Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I’m <span className="text-blue-400 font-semibold">John Denlie</span>, 
            a passionate full-stack developer specializing in building scalable, modern web and blockchain applications. 
            I enjoy turning complex problems into simple, beautiful solutions.
          </p>
          <p className="text-gray-400">
            Skilled in React, TypeScript, Node.js, and Web3. Always learning and pushing boundaries 
            to deliver high-quality products that make an impact.
          </p>
        </div>
      </div>
   
  );
};

export default About;
