import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiCheckCircle, FiClock } from "react-icons/fi";

const OrderSection = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("/api/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const formattedOrders = response.data.map((order) => ({
        id: order.Id,
        name: order.Nama,
        phone: order.Phone_number,
        address: order.Alamat,
        email: order.Email,
        catalog: order.Nama_Paket,
        created_at: new Date(order.created_at).toLocaleDateString("en-GB", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        desc: order.catatan_pelanggan,
        status: order.Status,
      }));
      setOrders(formattedOrders);
    } catch (error) {
      console.error("Failed to fetch order data:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (id, currentStatus) => {
    const nextStatus = currentStatus === "pending" ? "approve" : "pending";
    try {
      const token = localStorage.getItem("adminToken");
      await axios.put(
        `/api/orders/status/${id}`,
        { status: nextStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchOrders();
    } catch (error) {
      console.error("Gagal update status order:", error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Incoming Orders</h2>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Package
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Note
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.created_at}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {order.catalog}
                </td>
                <td className="px-6 py-4">
                  {order.desc ? (
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      View Note
                    </button>
                  ) : (
                    <span className="text-sm text-gray-400">-</span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleStatusUpdate(order.id, order.status)}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition ${
                      order.status === "approve"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                    }`}
                  >
                    {order.status === "approve" ? (
                      <FiCheckCircle />
                    ) : (
                      <FiClock />
                    )}
                    <span className="capitalize">{order.status}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Order Details from {selectedOrder.name}
            </h3>
            <div className="text-sm text-gray-600 mb-4 space-y-1">
              <p>
                <span className="font-semibold">Contact:</span>{" "}
                {selectedOrder.phone}
              </p>
              <p>
                <span className="font-semibold">Package:</span>{" "}
                {selectedOrder.catalog}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {selectedOrder.address}
              </p>
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Customer Note:</h4>
            <div className="bg-gray-50 p-4 rounded-md max-h-60 overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-wrap">
                {selectedOrder.desc || "No note provided."}
              </p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderSection;
