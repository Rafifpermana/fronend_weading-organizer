// src/components/About.jsx
import React from "react";

const AboutSection = ({ title, description }) => (
  <div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Lorem Ipsum about
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="grid md:grid-cols-3 gap-12 ">
          <AboutSection
            title="Locations"
            description="Aliquam erat volutpat. Integer malesuada turpis et fringilla suscipit. Maecenas ultricies, orci vitae convallis mattis."
          />
          <AboutSection
            title="Partnership"
            description="Aliquam erat volutpat. Integer malesuada turpis et fringilla suscipit. Maecenas ultricies, orci vitae convallis mattis."
          />
          <AboutSection
            title="Featured"
            description="Aliquam erat volutpat. Integer malesuada turpis et fringilla suscipit. Maecenas ultricies, orci vitae convallis mattis."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
