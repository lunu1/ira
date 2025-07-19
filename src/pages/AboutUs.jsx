import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 sm:py-36 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black">
        About <span className="text-primary">Us</span>
      </h1>

      <div className="mb-10 text-lg leading-relaxed">
        <p className="mb-6">
          Welcome to <strong>Supreme Luxury Cars</strong>, the ultimate destination for luxury and performance car rentals in the heart of the UAE. We specialize in offering a premium selection of world-renowned vehicles that embody elegance, power, and sophistication.
        </p>

        <p className="mb-6">
          Our mission is to provide our customers with an unforgettable driving experience through an exclusive collection of supercars and high-end SUVs from brands like Lamborghini, Ferrari, Porsche, Bentley, Rolls-Royce, and Mercedes-Benz. Whether you're in Dubai for business, pleasure, or a special occasion, we ensure that you travel in unmatched style and comfort.
        </p>

        <p className="mb-6">
          With a commitment to exceptional service and a passion for performance, we go beyond rental services — we deliver a complete luxury lifestyle. From personalized customer care and on-time delivery to flexible rental packages and 24/7 support, everything we do is tailored to exceed your expectations.
        </p>

        <p className="mb-6">
          Experience the thrill of Dubai's roads in your dream car. <strong>Supreme Luxury Cars Dubai</strong> is more than just a rental service — it's your gateway to luxury living.
        </p>
      </div>

      <div className="bg-primary/10 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-primary">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wide selection of premium vehicles</li>
          <li>Professional and friendly customer service</li>
          <li>Flexible rental options for all durations</li>
          <li>Free pick-up and drop-off service within Dubai</li>
          <li>Competitive rates with no hidden charges</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
