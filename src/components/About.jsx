import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiAward, FiMapPin, FiHeart } from "react-icons/fi";

const AboutSectionItem = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center mb-4">
      <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  const [aboutText, setAboutText] = useState("Memuat konten...");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        setAboutText(response.data.About_wo);
      } catch (error) {
        console.error("Gagal mengambil data tentang kami:", error);
        setAboutText(
          "Kami adalah wedding organizer dengan pengalaman bertahun-tahun dalam menciptakan momen pernikahan yang tak terlupakan. Dedikasi kami adalah untuk mewujudkan hari spesial Anda, persis seperti yang Anda impikan."
        );
      }
    };

    fetchProfile();
  }, []);

  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
          {aboutText}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <AboutSectionItem
            icon={<FiMapPin size={24} />}
            title="Best Location"
            description="Kami memiliki jaringan kerjasama dengan berbagai venue terbaik yang bisa disesuaikan dengan tema pernikahan Anda."
          />
          <AboutSectionItem
            icon={<FiHeart size={24} />}
            title="Trusted Partners"
            description="Bekerja sama dengan vendor-vendor terkemuka untuk memastikan setiap detail acara berjalan dengan sempurna."
          />
          <AboutSectionItem
            icon={<FiAward size={24} />}
            title="Services"
            description="Menawarkan paket layanan yang fleksibel dan dapat disesuaikan untuk memenuhi semua kebutuhan dan anggaran Anda."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
