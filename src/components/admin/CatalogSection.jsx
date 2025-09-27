import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import axios from "axios";

const initialFormState = { Id: null, Nama: "", Harga: "", Deskripsi: "" };

const CatalogSection = () => {
  const [packages, setPackages] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCatalogs = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("/api/catalog", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPackages(response.data);
    } catch (error) {
      console.error("Gagal mengambil data katalog:", error);
    }
  };

  useEffect(() => {
    fetchCatalogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpenCreateModal = () => {
    setIsEditing(false);
    setFormData(initialFormState);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (pkg) => {
    setIsEditing(true);
    setFormData({
      Id: pkg.Id,
      Nama: pkg.Nama,
      Harga: pkg.Harga,
      Deskripsi: pkg.Deskripsi,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (packageId) => {
    if (window.confirm("Yakin ingin menghapus paket ini?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`/api/catalog/${packageId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchCatalogs();
      } catch (error) {
        console.error("Gagal menghapus paket:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.Nama || !formData.Harga) return;
    const token = localStorage.getItem("adminToken");
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      if (isEditing) {
        await axios.put(`/api/catalog/${formData.Id}`, formData, config);
      } else {
        await axios.post("/api/catalog", formData, config);
      }
      fetchCatalogs();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Gagal menyimpan paket:", error);
    }
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Catalog Management</h1>
        <button
          onClick={handleOpenCreateModal}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all"
        >
          <FiPlus /> Add Package
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                Description
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {packages.map((pkg) => (
              <tr key={pkg.Id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {pkg.Nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(pkg.Harga)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 max-w-sm truncate hidden md:table-cell">
                  {pkg.Deskripsi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium space-x-4">
                  <button
                    onClick={() => handleOpenEditModal(pkg)}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(pkg.Id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {isEditing ? "Edit Package" : "Add New Package"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="Nama"
                  className="block text-sm font-medium text-gray-700"
                >
                  Package Name
                </label>
                <input
                  type="text"
                  name="Nama"
                  value={formData.Nama}
                  onChange={handleInputChange}
                  placeholder="Contoh: Paket Gold"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Harga"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price (IDR)
                </label>
                <input
                  type="number"
                  name="Harga"
                  value={formData.Harga}
                  onChange={handleInputChange}
                  placeholder="Contoh: 50000000"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Deskripsi"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="Deskripsi"
                  rows="4"
                  value={formData.Deskripsi}
                  onChange={handleInputChange}
                  placeholder="Jelaskan detail paket ini..."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                >
                  {isEditing ? "Update" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CatalogSection;
