import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Catalog", id: "catalog" },
    { label: "Contact Us", id: "contact" },
    { label: "Testimonial", id: "testimonial" },
  ];

  const handleNavClick = (id) => {
    setActive(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white py-4 px-6 md:px-16 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a
          href="/#"
          onClick={() => handleNavClick("hero")}
          className="text-3xl font-semibold text-gray-800 tracking-wider"
        >
          Eterna Wedding
        </a>

        <nav className="hidden md:flex items-center gap-10 text-gray-600">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`pb-1 font-medium transition-colors duration-300 ${
                active === item.id
                  ? "text-yellow-600 border-b-2 border-yellow-600"
                  : "hover:text-yellow-600"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => navigate("/order")}
            className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-transform duration-300 hover:scale-105"
          >
            Order Now
          </button>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-6 flex flex-col items-center space-y-4 bg-white pb-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="text-gray-700 hover:text-yellow-600 w-full text-center py-2 text-lg"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              navigate("/order");
              setIsOpen(false);
            }}
            className="bg-gray-800 text-white w-full px-6 py-3 rounded-full hover:bg-gray-700 transition text-lg"
          >
            Order Now
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
