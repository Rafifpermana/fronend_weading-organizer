import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const [profile, setProfile] = useState({
    Contact_wo: "info@jewepe.com",
    Alamat_wo: "Jakarta, Indonesia",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/profile");
        setProfile(response.data);
      } catch (error) {
        console.error("Gagal mengambil data profil untuk footer:", error);
      }
    };
    fetchProfile();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 px-8 md:px-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <a
            href="/#"
            onClick={scrollToTop}
            className="text-3xl font-semibold text-white mb-4 block"
          >
            Eterna Wedding
          </a>
          <p className="text-sm text-gray-400 mb-6">
            Mewujudkan pernikahan impian Anda dengan sentuhan profesional dan
            personal.
          </p>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 tracking-wider">Navigasi</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-500 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#catalog"
                className="hover:text-yellow-500 transition-colors"
              >
                Catalog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-500 transition-colors"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-yellow-500 transition-colors"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 tracking-wider">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 transition-colors">
              {profile.Contact_wo}
            </li>
            <li className="hover:text-yellow-500 transition-colors">
              {profile.Alamat_wo}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-4 tracking-wider">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Privacy & Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500 transition-colors">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Eterna Wedding. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
