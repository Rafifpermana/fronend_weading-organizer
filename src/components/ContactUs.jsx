// src/components/ContactUs.jsx
import React from "react";
import { FiImage, FiPhone, FiShield, FiHelpCircle } from "react-icons/fi";

const ContactItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-slate-200 p-3 rounded-full">{icon}</div>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-20 px-8 md:px-16">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Lorem ipsum contact us
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-200 h-80 rounded-lg flex justify-center items-center">
          <FiImage className="text-slate-400 text-6xl" />
        </div>
        <div className="space-y-8">
          <ContactItem
            icon={<FiPhone className="text-blue-600" />}
            title="Customer Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ContactItem
            icon={<FiShield className="text-blue-600" />}
            title="Best Price Guaranteed"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <ContactItem
            icon={<FiHelpCircle className="text-blue-600" />}
            title="Need a help for booking?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
