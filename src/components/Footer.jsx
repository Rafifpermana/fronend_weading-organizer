// src/components/Footer.jsx
import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-8 md:px-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-gray-600">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Logo</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-900">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Plans
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Socials</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-900">
                Partnership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Protocol
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Location
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-slate-200 pt-6 text-sm text-gray-500">
        <div className="flex justify-end">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              Privacy & Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
