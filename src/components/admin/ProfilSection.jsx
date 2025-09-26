import React, { useState } from "react";

const ProfilSection = () => {
  const [content, setContent] = useState({
    deskripsi: "",
    contact: "",
    alamat: "",
    about: "",
  });

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">📝 Edit Konten Website</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.keys(content).map((key) => (
          <div key={key} className="bg-white p-4 rounded shadow">
            <label className="block text-sm font-semibold mb-2 capitalize">
              {key}
            </label>
            <input
              type="text"
              value={content[key]}
              onChange={(e) =>
                setContent({ ...content, [key]: e.target.value })
              }
              placeholder="Value"
              className="w-full border px-3 py-2 rounded"
            />
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Update
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfilSection;
