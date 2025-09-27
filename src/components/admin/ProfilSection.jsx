import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilSection = () => {
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({
    About_wo: "",
    Deskripsi_wo: "",
    Contact_wo: "",
    Alamat_wo: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const fetchProfile = async () => {
    try {
      const response = await axios.get("/api/profile");
      setProfile(response.data);
    } catch (error) {
      console.error("Gagal mengambil data profil:", error);
      if (error.response && error.response.status === 404) {
        console.log("Profil belum ada. Siap untuk dibuat.");
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (saveStatus) setSaveStatus("");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveStatus("");

    const filledData = Object.entries(formData).reduce((acc, [key, value]) => {
      if (value) acc[key] = value;
      return acc;
    }, {});

    const finalData = {
      About_wo: profile.About_wo,
      Deskripsi_wo: profile.Deskripsi_wo,
      Contact_wo: profile.Contact_wo,
      Alamat_wo: profile.Alamat_wo,
      ...filledData,
    };

    try {
      const token = localStorage.getItem("adminToken");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      if (profile && profile.Id) {
        await axios.put(`/api/profile/${profile.Id}`, finalData, config);
      } else {
        await axios.post("/api/profile", finalData, config);
      }

      setSaveStatus("success");
      fetchProfile();
      setFormData({
        About_wo: "",
        Deskripsi_wo: "",
        Contact_wo: "",
        Alamat_wo: "",
      });
    } catch (error) {
      console.error("Gagal menyimpan profil:", error);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section>
      <form onSubmit={handleSave}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-3">
              Edit Content
            </h3>
            <div>
              <label
                htmlFor="Deskripsi_wo"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Main Description
              </label>
              <textarea
                name="Deskripsi_wo"
                rows="4"
                value={formData.Deskripsi_wo}
                onChange={handleInputChange}
                placeholder={
                  profile.Deskripsi_wo || "Deskripsi di halaman utama..."
                }
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="About_wo"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                About Us
              </label>
              <textarea
                name="About_wo"
                rows="4"
                value={formData.About_wo}
                onChange={handleInputChange}
                placeholder={profile.About_wo || "Teks di bagian 'About Us'..."}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="Contact_wo"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Contact
              </label>
              <input
                type="text"
                name="Contact_wo"
                value={formData.Contact_wo}
                onChange={handleInputChange}
                placeholder={profile.Contact_wo || "No. Telepon, Email, dll."}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label
                htmlFor="Alamat_wo"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Address
              </label>
              <input
                type="text"
                name="Alamat_wo"
                value={formData.Alamat_wo}
                onChange={handleInputChange}
                placeholder={profile.Alamat_wo || "Alamat lengkap..."}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <h3 className="text-xl font-semibold text-gray-700 border-b pb-3">
              Current Content
            </h3>
            {Object.entries({
              Deskripsi_wo: "Main Description",
              About_wo: "About Us",
              Contact_wo: "Contact",
              Alamat_wo: "Address",
            }).map(([key, label]) => (
              <div key={key}>
                <h4 className="block text-sm font-medium text-gray-600 mb-1">
                  {label}
                </h4>
                <p className="mt-1 text-sm text-gray-800 whitespace-pre-wrap p-3 bg-gray-50 rounded-md min-h-[40px]">
                  {profile[key] || (
                    <span className="text-gray-400">Belum diisi</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all disabled:bg-gray-400"
          >
            {isSaving ? "Menyimpan..." : "Update Content"}
          </button>
          {saveStatus === "success" && (
            <span className="text-green-600 font-medium">
              ✓ Update successfully
            </span>
          )}
          {saveStatus === "error" && (
            <span className="text-red-600 font-medium">✗ Update failed.</span>
          )}
        </div>
      </form>
    </section>
  );
};

export default ProfilSection;
