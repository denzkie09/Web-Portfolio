import React from "react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-20 border-b border-gray-700"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <p className="text-gray-300 mb-12">
          Here’s what I can help you with:
        </p>

        {/* Example service grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111133] p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-400">
              Building fast, responsive, and modern websites tailored to your needs.
            </p>
          </div>
          <div className="bg-[#111133] p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Blockchain Solutions</h3>
            <p className="text-gray-400">
              Smart contracts, dApps, and blockchain integrations for businesses.
            </p>
          </div>
          <div className="bg-[#111133] p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-400">
              Crafting clean, user-friendly designs that deliver great experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
