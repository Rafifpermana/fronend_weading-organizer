import React from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
];

const Testimonial = () => {
  return (
    <section
      id="testimonial"
      className="bg-white py-24 px-4 md:px-16 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Gallery Of Moments
        </h2>
        <p className="text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Lihatlah senyum dan kebahagiaan dari para pasangan yang telah
          memercayakan hari spesial mereka kepada kami.
        </p>

        <div className="relative w-full overflow-hidden group">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll group-hover:pause-animation gap-8 w-max">
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg w-[300px] h-[400px] md:w-[350px] md:h-[450px] flex-shrink-0 overflow-hidden"
              >
                <img
                  src={src}
                  alt={`testimonial-${index}`}
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
