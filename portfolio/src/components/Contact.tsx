import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#0a0a23] text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-10">
          Interested in working together or just want to say hi? Fill out the form below or reach me directly.
        </p>

        {/* Contact Form */}
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-gray-400">
          <a href="https://github.com/denzkie09/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pahang-john-denlie-t-163883301//" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://www.facebook.com/sa3lowdota" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Facebook
          </a>
          <a href="https://www.instagram.com/johndenlie/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
