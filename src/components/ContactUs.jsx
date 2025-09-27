import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiPhone, FiShield, FiHelpCircle } from "react-icons/fi";

const ContactItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-5">
    <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  </div>
);

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState("Memuat kontak...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        setContactInfo(response.data.Contact_wo);
      } catch (error) {
        console.error("Gagal mengambil info kontak:", error);
        setContactInfo("Hubungi kami di 0812-9876-5432 untuk respons cepat.");
      }
    };

    fetchProfile();
  }, []);

  return (
    <section id="contact" className="bg-white py-24 px-8 md:px-16">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 text-lg mt-2 max-w-3xl mx-auto">
          Punya pertanyaan atau ingin memulai konsultasi? Tim kami siap membantu
          Anda setiap saat.
        </p>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="h-96 w-full flex items-center justify-center p-8">
          <img
            src="/images/logo.png"
            alt="Logo JeWePe"
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="space-y-10">
          <ContactItem
            icon={<FiPhone size={24} />}
            title="Customer Support"
            description={contactInfo}
          />
          <ContactItem
            icon={<FiShield size={24} />}
            title="Best Price Guarantee"
            description="Kami menawarkan paket dengan harga kompetitif tanpa mengurangi kualitas layanan."
          />
          <ContactItem
            icon={<FiHelpCircle size={24} />}
            title="Need Help with Booking?"
            description="Tim konsultan kami siap memandu Anda melalui setiap langkah proses pemesanan."
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
