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

    try {
      await sendForm(
        "service_u6bkktu",     // your EmailJS Service ID
        "template_ub5cm9c",   // your EmailJS Template ID
        formRef.current,
        "AMDqnNV4YfB0Xg4kz"   // your EmailJS Public Key
      );
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 border-b border-gray-700"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-10">
          Interested in working together or just want to say hi? Fill out the form below.
        </p>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
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
      </div>
    </section>
  );
};

export default Contact;
