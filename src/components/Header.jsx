// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Catalog", id: "catalog" },
    { label: "Contact Us", id: "contact" },
    { label: "Testimonial", id: "testimonial" },
  ];

  return (
    <header className="bg-white-50 py-4 px-6 md:px-16 shadow-sm border-b border-gray-400">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Logo</div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center ml-auto gap-12 text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`pb-1 ${
                active === item.id
                  ? "text-blue-600 font-semibold "
                  : "hover:text-gray-900"
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* CTA Button */}
          <button
            onClick={() => {
              window.location.href = "/order";
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Order Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
