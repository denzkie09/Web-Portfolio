import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub,   href: "https://github.com/denzkie09/",                                  label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/pahang-john-denlie-t-163883301/",    label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/sa3lowdota",                            label: "Facebook" },
  { icon: FaInstagram,href: "https://www.instagram.com/johndenlie/",                          label: "Instagram" },
];

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await sendForm(
        "service_u6bkktu",
        "template_ub5cm9c",
        formRef.current,
        "AMDqnNV4YfB0Xg4kz"
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Let's talk
          </p>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            I'm actively looking for frontend or full-stack roles. If you have
            an opportunity or just want to say hi, my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <div>
            <div className="bg-[#111133] border border-gray-700/50 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-blue-400 text-lg" />
                <p className="text-white font-medium">Email me directly</p>
              </div>
              <a
                href="mailto:johndenlie@email.com"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
              >
                johndenlietitopahang@gmail.com
              </a>
            </div>

            <p className="text-gray-500 text-sm mb-4">Find me on</p>
            <div className="flex gap-4">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 bg-[#111133] border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all text-lg"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <form ref={formRef} onSubmit={sendEmail} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 text-sm transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 text-sm transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 text-sm transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              required
              className="p-4 rounded-lg bg-[#111133] border border-gray-700 focus:outline-none focus:border-blue-500 text-white placeholder-gray-600 text-sm resize-none transition-colors"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
