import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      setStatus("❌ Form not available.");
      return;
    }

    const formEl = formRef.current;

    try {
      await sendForm(
        "service_rg9ugar",   // ← replace with your service ID
        "template_6mgijbl",  // ← replace with your template ID
        formEl,
        "AMDqnNV4YfB0Xg4kz"  // ← replace with your public key
      );
      setStatus("✅ Message sent successfully!");
      formEl.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section id="contact" className="bg-[#0a0a23] text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-10">
          Interested in working together or just want to say hi? Fill out the form below or reach me directly.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-gray-300">{status}</p>}

        {/* Social Links */}
        <div className="mt-10 flex justify-center gap-6 text-gray-400">
          <a href="https://github.com/denzkie09/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pahang-john-denlie-t-163883301/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
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
