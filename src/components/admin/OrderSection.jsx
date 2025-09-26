import React, { useState } from "react";

const initialOrders = [
  {
    id: 1,
    name: "Ann Culhane",
    phone: "081234567890",
    address: "Jl. Merdeka No. 10, Jakarta",
    created_at: "2025-09-25",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "pending",
  },
  {
    id: 2,
    name: "Ahmad Rosser",
    phone: "082345678901",
    address: "Jl. Bahagia No. 25, Bandung",
    created_at: "2025-09-24",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "approve",
  },
  {
    id: 3,
    name: "Zain Calzoni",
    phone: "083456789012",
    address: "Jl. Mawar No. 5, Surabaya",
    created_at: "2025-09-23",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "approve",
  },
  {
    id: 4,
    name: "Leo Stanton",
    phone: "084567890123",
    address: "Jl. Kenanga No. 7, Malang",
    created_at: "2025-09-22",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "inactive",
  },
  {
    id: 5,
    name: "Kaiya Vetrovs",
    phone: "085678901234",
    address: "Jl. Melati No. 12, Yogyakarta",
    created_at: "2025-09-21",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "approve",
  },
  {
    id: 6,
    name: "Ryan Westervelt",
    phone: "086789012345",
    address: "Jl. Anggrek No. 8, Semarang",
    created_at: "2025-09-20",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...",
    status: "approve",
  },
];

const OrderSection = () => {
  const [orders, setOrders] = useState(initialOrders);

  const toggleStatus = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status:
                order.status === "pending"
                  ? "approve"
                  : order.status === "approve"
                  ? "inactive"
                  : "pending",
            }
          : order
      )
    );
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">📋 Daftar Order</h2>
      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Tanggal</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border font-medium">{order.name}</td>
                <td className="px-4 py-2 border">{order.phone}</td>
                <td className="px-4 py-2 border whitespace-normal break-words">
                  {order.address}
                </td>
                <td className="px-4 py-2 border">{order.created_at}</td>
                <td className="px-4 py-2 border whitespace-normal break-words">
                  {order.desc}
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => toggleStatus(order.id)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                      order.status === "approve"
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : order.status === "pending"
                        ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {order.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-500">1–6 of 87 entries</div>
      </div>
    </section>
  );
};

export default OrderSection;
