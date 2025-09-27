import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSend } from "react-icons/fi";

const OrderForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Email: "",
    Nama: "",
    catatan_pelanggan: "",
    Phone_number: "",
    Alamat: "",
    Id_catalog: "",
  });

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await axios.get("/api/catalog");
        setCatalogs(response.data);
      } catch (err) {
        console.error("Failed to fetch catalogs", err);
      }
    };
    fetchCatalogs();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await axios.post("/api/orders", formData);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/");
      }, 3000);
    } catch (err) {
      setError("Gagal mengirim pesanan. Silakan periksa kembali data Anda.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-screen-md mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Package Order Form
            </h2>
            <p className="text-gray-500 mt-2">
              Lengkapi data di bawah ini untuk memulai perencanaan hari bahagia
              Anda bersama kami di Eterna Wedding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="Nama"
                value={formData.Nama}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                required
              />
            </div>
            <input
              type="tel"
              name="Phone_number"
              value={formData.Phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
            <input
              type="text"
              name="Alamat"
              value={formData.Alamat}
              onChange={handleChange}
              placeholder="Full Address"
              className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              required
            />

            <select
              name="Id_catalog"
              value={formData.Id_catalog}
              onChange={handleChange}
              className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 bg-white"
              required
            >
              <option value="">Select Catalog</option>
              {catalogs.map((cat) => (
                <option key={cat.Id} value={cat.Id}>
                  {cat.Nama} -{" "}
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(cat.Harga)}
                </option>
              ))}
            </select>

            <textarea
              name="catatan_pelanggan"
              value={formData.catatan_pelanggan}
              onChange={handleChange}
              placeholder="Custumer notes"
              className="w-full border-gray-300 p-3 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
              rows={4}
            />

            <div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="w-full sm:w-auto text-center px-6 py-3 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-transform duration-300 hover:scale-105 disabled:bg-gray-400"
              >
                <FiSend />
                <span>{loading ? "Sending..." : "Send Order"}</span>
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center pt-2">{error}</p>
            )}
          </form>
        </div>

        {success && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-green-600 font-bold text-2xl mb-2">
                Order Shipped Successfully!
              </h3>
              <p className="text-gray-700">
                Terima kasih! Tim kami akan segera menghubungi Anda.
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default OrderForm;
