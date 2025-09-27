import React, { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [profile, setProfile] = useState({
    Deskripsi_wo: "Memuat deskripsi...",
    Alamat_wo: "Memuat lokasi...",
    Contact_wo: "Memuat kontak...",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
        setProfile({
          Deskripsi_wo:
            "Selamat datang di layanan wedding organizer kami. Kami siap membantu mewujudkan pernikahan impian Anda dengan layanan profesional dan terpercaya.",
          Alamat_wo: "Jl. Impian Bersama No. 45, Jakarta",
          Contact_wo: "0812-9876-5432",
        });
      }
    };
    fetchProfile();
  }, []);

  return (
    <section id="hero" className="bg-[#F8F5F2] relative">
      <div className="py-24 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <p className="text-yellow-600 font-semibold mb-2 tracking-wider">
              Wujudkan Momen Sempurna Anda Bersama Kami
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Eterna Wedding
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              {profile.Deskripsi_wo}
            </p>
          </div>

          <div className="flex justify-center items-center h-80 md:h-[450px]">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-yellow-100 rounded-3xl transform rotate-6"></div>
              <div className="absolute w-full h-full bg-white shadow-xl rounded-3xl overflow-hidden">
                <img
                  src="/images/home.jpg"
                  alt="Pasangan Pernikahan Bahagia"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto -mt-12 absolute right-10 z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-gray-800">Address</h4>
              <p className="text-gray-500 text-sm mt-1">{profile.Alamat_wo}</p>
            </div>
            <div className="md:border-r md:border-l md:border-gray-200 px-4">
              <h4 className="font-bold text-gray-800">Contact</h4>
              <p className="text-gray-500 text-sm mt-1">{profile.Contact_wo}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">Service hours</h4>
              <p className="text-gray-500 text-sm mt-1">09:00 - 20:30 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
