import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import OrderForm from "./pages/OrderForm";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Header />
                <Hero />
                <About />
                <Catalog />
                <ContactUs />
                <Testimonial />
                <Footer />
              </main>
            }
          />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
