import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const LuxuryInfoSection = () => {
  return (
    <div className="w-full px-4 mt-8">
      <div className="max-w-7xl mx-auto bg-white/90 rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Text content */}
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Supreme Luxury Cars – Elevate Your Driving Experience
          </h2>
          <p className="text-gray-700 max-w-xl leading-relaxed">
            At Supreme Luxury Cars, we specialize in providing top-of-the-line luxury and sports car rentals across Dubai.
            From Ferraris to Rolls-Royces, our fleet is curated to offer you the ultimate driving pleasure and comfort,
            whether it’s for business, leisure, or special occasions.
          </p>
        </div>

        {/* WhatsApp Button */}
        <div>
          <a
            href="https://wa.me/971565266295"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
          >
            <FaWhatsapp className="text-xl" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LuxuryInfoSection;
