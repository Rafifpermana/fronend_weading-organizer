import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilSection from "../components/admin/ProfilSection";
import CatalogSection from "../components/admin/CatalogSection";
import OrderSection from "../components/admin/OrderSection";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("post"); // default Post
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 flex flex-col justify-between">
        <div className="space-y-4">
          <button className="text-2xl font-bold mb-6">Logo</button>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveSection("post")}
              className={`block w-full text-left px-4 py-2 rounded ${
                activeSection === "post" ? "bg-blue-600" : "hover:bg-blue-600"
              }`}
            >
              Profil
            </button>
            <button
              onClick={() => setActiveSection("catalog")}
              className={`block w-full text-left px-4 py-2 rounded ${
                activeSection === "catalog"
                  ? "bg-blue-600"
                  : "hover:bg-blue-600"
              }`}
            >
              Catalog
            </button>
            <button
              onClick={() => setActiveSection("order")}
              className={`block w-full text-left px-4 py-2 rounded ${
                activeSection === "order" ? "bg-blue-600" : "hover:bg-blue-600"
              }`}
            >
              Order
            </button>
          </nav>
        </div>
        <button
          onClick={() => navigate("/admin/login")}
          className="block w-full text-left px-4 py-2 rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-800">
            Welcome to your dashboard, admin!
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <span className="text-sm font-medium text-gray-700">
              Syaiful_Lutfianto
            </span>
          </div>
        </div>

        {/* Render Section Berdasarkan Menu Aktif */}
        {activeSection === "post" && <ProfilSection />}
        {activeSection === "catalog" && <CatalogSection />}
        {activeSection === "order" && <OrderSection />}
      </main>
    </div>
  );
};

export default AdminDashboard;
