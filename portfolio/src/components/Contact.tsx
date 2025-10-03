import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      setStatus("❌ Form not available.");
      return;
    }

    try {
      await sendForm(
        "service_u6bkktu",     // ✅ your new Service ID
        "template_ub5cm9c",    // ✅ your new Template ID
        formRef.current,
        "AMDqnNV4YfB0Xg4kz"    // ✅ your Public Key
      );
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
  
    
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-gray-300">{status}</p>}

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-gray-400 text-2xl">
          <a
            href="https://github.com/denzkie09/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pahang-john-denlie-t-163883301/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/sa3lowdota"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/johndenlie/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    
  );
};

export default Contact;
