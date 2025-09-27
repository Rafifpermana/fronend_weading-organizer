import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const packageImages = {
  1: "/images/perunggu.jpg",
  3: "/images/silver.jpg",
  4: "/images/gold.jpg",
  5: "/images/platinum.jpg",
  6: "/images/diamons.jpg",
  7: "/images/royal.jpg",
};

const defaultImage = "/images/home.jpg";

const ProductCard = ({ title, price, description, imageUrl, navigate }) => (
  <div className="bg-white rounded-lg p-5 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-2">
    <div className="bg-gray-100 h-48 rounded-md mb-5 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="flex-grow flex flex-col justify-between">
      <div>
        <h4 className="text-xl font-bold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500 mt-2 mb-4 min-h-[60px]">
          {description}
        </p>
      </div>
      <div>
        <p className="text-yellow-600 font-bold text-2xl mb-4">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(price)}
        </p>
        <button
          onClick={() => navigate("/order")}
          className="bg-gray-800 text-white w-full px-6 py-3 rounded-full hover:bg-gray-700 transition-transform duration-300 hover:scale-105"
        >
          Order Now
        </button>
      </div>
    </div>
  </div>
);

const Catalog = () => {
  const [catalogs, setCatalogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const response = await axios.get("/api/catalog");
        setCatalogs(response.data);
      } catch (error) {
        console.error("Gagal mengambil data katalog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCatalogs();
  }, []);

  return (
    <section id="catalog" className="bg-[#F8F5F2] py-24 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Our Package Catalog
        </h2>
        <p className="text-gray-600 text-lg mt-2 mb-16 max-w-3xl mx-auto">
          Pilih paket yang paling sesuai dengan impian Anda. Setiap paket
          dirancang untuk memberikan pengalaman terbaik.
        </p>

        {loading ? (
          <p className="text-gray-500">Memuat katalog...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogs.map((product) => {
              const imageUrl = packageImages[product.Id] || defaultImage;
              return (
                <ProductCard
                  key={product.Id}
                  title={product.Nama}
                  price={product.Harga}
                  description={product.Deskripsi}
                  imageUrl={imageUrl}
                  navigate={navigate}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
