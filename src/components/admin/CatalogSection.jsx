import React, { useState } from "react";

const CatalogSection = () => {
  const [catalog, setCatalog] = useState({
    deskripsi: "",
    name: "",
    harga: "",
  });

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">📦 Input Katalog Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(catalog).map((key) => (
          <div key={key} className="bg-white p-4 rounded shadow">
            <label className="block text-sm font-semibold mb-2 capitalize">
              {key}
            </label>
            <input
              type="text"
              value={catalog[key]}
              onChange={(e) =>
                setCatalog({ ...catalog, [key]: e.target.value })
              }
              placeholder="Value"
              className="w-full border px-3 py-2 rounded"
            />
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Option 3
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;
