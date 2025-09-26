import React, { useState } from "react";
import { FiImage } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, price, navigate }) => (
  <div className="bg-white rounded-lg p-4 text-left">
    <div className="bg-gray-400 h-40 rounded-md flex items-center justify-center mb-4">
      <FiImage className="text-gray-500 text-4xl" />
    </div>
    <h4 className="font-bold text-gray-800">{title}</h4>
    <div className="flex justify-between items-center mt-2">
      <p className="text-gray-700">{price}</p>
      <button
        onClick={() => navigate("/order")}
        className="text-blue-600 font-semibold hover:text-blue-800"
      >
        Order now
      </button>
    </div>
  </div>
);

const Catalog = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  const productData = {
    Popular: [
      { title: "Adition", price: "$72.00 / day" },
      { title: "Velocity", price: "$65.00 / day" },
      { title: "Nimbus", price: "$80.00 / day" },
      { title: "Orbit", price: "$90.00 / day" },
    ],
    "Exclusive journey": [
      { title: "Aurora", price: "$120.00 / day" },
      { title: "Zenith", price: "$110.00 / day" },
      { title: "Eclipse", price: "$130.00 / day" },
      { title: "Nova", price: "$125.00 / day" },
    ],
    "Family and friends": [
      { title: "Together", price: "$60.00 / day" },
      { title: "Bond", price: "$55.00 / day" },
      { title: "Unity", price: "$58.00 / day" },
      { title: "Harmony", price: "$62.00 / day" },
    ],
    "Our family collection": [
      { title: "Legacy", price: "$95.00 / day" },
      { title: "Heritage", price: "$100.00 / day" },
      { title: "Roots", price: "$98.00 / day" },
      { title: "Tradition", price: "$102.00 / day" },
    ],
  };

  const tabs = Object.keys(productData);
  const navigate = useNavigate();

  return (
    <section id="catalog" className="bg-slate-100 py-20 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Lorem ipsum catalog
        </h2>
        <p className="text-gray-700 mt-2 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-10 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 font-semibold ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {productData[activeTab].map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
