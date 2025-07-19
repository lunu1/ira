import React from 'react';
import { Facebook, Twitter, Instagram, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" text-black py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
          <p className="text-sm text-black">
            Supreme Luxury Cars — Dubai's premier destination for luxury and sports car rentals.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-black">
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+971 50 941 7417</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@supremeluxurycars.ae</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Dubai, United Arab Emirates</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition"
              >
                <Icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 mt-10 pt-6 text-center text-sm text-black">
        © {new Date().getFullYear()} Supreme Luxury Cars. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
