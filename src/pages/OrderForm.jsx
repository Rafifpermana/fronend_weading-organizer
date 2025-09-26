import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [catalog, setCatalog] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const catalogOptions = {
    popular: ["Aurora", "Zenith", "Eclipse", "Nova"],
    "extended family": ["Legacy", "Heritage", "Tradition", "Roots"],
    "family and friends": ["Together", "Bond", "Unity", "Harmony"],
    "our family and relatives": ["Origin", "Lineage", "Kinfolk", "Tribe"],
  };

  const priceMap = {
    Aurora: 120000,
    Zenith: 110000,
    Eclipse: 130000,
    Nova: 125000,
    Legacy: 95000,
    Heritage: 100000,
    Tradition: 102000,
    Roots: 98000,
    Together: 60000,
    Bond: 55000,
    Unity: 58000,
    Harmony: 62000,
    Origin: 90000,
    Lineage: 92000,
    Kinfolk: 88000,
    Tribe: 94000,
  };

  const handleCatalogChange = (e) => {
    setCatalog(e.target.value);
    setCategory("");
    setPrice("");
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setCategory(selected);
    setPrice(priceMap[selected] || "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    setEmail("");
    setName("");
    setDesc("");
    setPhone("");
    setAddress("");
    setCatalog("");
    setCategory("");
    setPrice("");

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-screen-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full border p-3 rounded"
            required
          />
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter Deskripsi"
            className="w-full border p-3 rounded"
            rows={3}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="w-full border p-3 rounded"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            className="w-full border p-3 rounded"
            required
          />

          <select
            value={catalog}
            onChange={handleCatalogChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Catalog</option>
            {Object.keys(catalogOptions).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Category</option>
            {catalogOptions[catalog]?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={price ? `Rp ${price.toLocaleString("id-ID")}` : ""}
            placeholder="Rp .........."
            className="w-full border p-3 rounded bg-gray-100"
            readOnly
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="border border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Send
            </button>
          </div>

          {success && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white border border-green-500 shadow-lg rounded-lg px-6 py-4 text-center animate-fade">
                <h3 className="text-green-600 font-bold text-lg mb-2">
                  ✅ Success!
                </h3>
                <p className="text-gray-700">Order submitted successfully.</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
