import React from "react";

const images = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
  "https://randomuser.me/api/portraits/women/7.jpg",
  "https://randomuser.me/api/portraits/men/8.jpg",
  "https://randomuser.me/api/portraits/women/9.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="bg-gray-100 py-20 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Customer Testimonials
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-6 w-max">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md w-[348px] h-[348px] flex items-center justify-center overflow-hidden"
              >
                <img
                  src={src}
                  alt={`testimonial-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
