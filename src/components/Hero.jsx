// src/components/Hero.jsx
import React from "react";
import { FiImage } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="bg-slate-100">
      {/* Hero Content */}
      <div className="py-20 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="text-left">
            <p className="text-sm text-gray-500 mb-2">
              Neque porro quisquam est qui dolorem ipsum quia
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              LOREM IPSUM NEQUE PORRO QUI DOLOREM
            </h1>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
              Nullam varius, turpis et commodo pharetra, est eros bibendum elit,
              nec luctus magna felis sollicitudin mauris. Integer in mauris eu
              nibh euismod gravida. Duis ac tellus et risus vulputate vehicula.
            </p>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex justify-end items-center">
            <div className="bg-slate-200 h-72 w-full md:h-96 rounded-lg flex justify-center items-center">
              <FiImage className="text-slate-400 text-[100px]" />
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto -mt-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="md:border-r md:border-gray-200 px-4">
              <h4 className="font-bold text-gray-800">Location</h4>
              <p className="text-gray-500 text-sm">location W/O</p>
            </div>
            <div className="md:border-r md:border-gray-200 px-4">
              <h4 className="font-bold text-gray-800">Contact</h4>
              <p className="text-gray-500 text-sm">number W/O</p>
            </div>
            <div className="px-4">
              <h4 className="font-bold text-gray-800">Service Hours</h4>
              <p className="text-gray-500 text-sm">09:00 - 20:30 W/B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
