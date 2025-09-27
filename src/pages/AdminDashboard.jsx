import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUser,
  FiGrid,
  FiShoppingCart,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";

import ProfilSection from "../components/admin/ProfilSection";
import CatalogSection from "../components/admin/CatalogSection";
import OrderSection from "../components/admin/OrderSection";

const navItems = [
  { id: "profil", label: "Profil", icon: <FiUser /> },
  { id: "catalog", label: "Catalog", icon: <FiGrid /> },
  { id: "order", label: "Order", icon: <FiShoppingCart /> },
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("profil");
  const [adminUsername, setAdminUsername] = useState("Admin");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("adminUsername");
    if (username) setAdminUsername(username);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  const sectionTitles = {
    profil: "Website Profile Management",
    catalog: "Package Catalog Management",
    order: "Incoming Order List",
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUsername");
    navigate("/admin/login");
  };

  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.split(" ");
    return words.length > 1 ? words[0][0] + words[1][0] : name.substring(0, 2);
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside
        className={`w-64 flex-shrink-0 bg-gray-800 text-gray-300 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 absolute z-30 h-full`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-700">
          <span className="text-2xl font-bold text-white">Admin Panel</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex-grow px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                activeSection === item.id
                  ? "bg-yellow-500 text-gray-900 font-bold shadow-lg"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="ml-4 font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="px-4 py-6 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-colors duration-200"
          >
            <FiLogOut className="text-xl" />
            <span className="ml-4 font-medium">Logout</span>
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white shadow-md flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="md:hidden text-gray-600 mr-4"
            >
              <FiMenu size={24} />
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              {sectionTitles[activeSection]}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700 hidden sm:block">
              {adminUsername}
            </span>
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm uppercase">
              {getInitials(adminUsername)}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeSection === "profil" && <ProfilSection />}
          {activeSection === "catalog" && <CatalogSection />}
          {activeSection === "order" && <OrderSection />}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
