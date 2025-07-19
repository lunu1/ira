import React, { useState } from 'react';
import {
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';   // ⬅ add this

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();                   // ⬅ current route
  const onHome = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /** helper to build the link class string */
  const navLink = (path) =>
    [
      // default colour
      onHome ? 'text-white' : 'text-black',
      // active colour
      pathname === path && 'text-red-600',
      // hover state
      'hover:text-red-600 transition',
    ]
      .filter(Boolean)
      .join(' ');

  return (
 <nav className="bg-[#ad3622] backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
          
             <span className="text-2xl  text-transparent font-semibold text-white bg-clip-text tracking-wide">
  IRA
</span>
            </div>

            <div className="hidden md:flex space-x-8 text-white">
              <a
                href="#home"
                className=" hover:text-orange-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className=" hover:text-orange-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#product"
                className=" hover:text-orange-600 transition-colors font-medium"
              >
                Our Spice
              </a>
              <a
                href="#contact"
                className=" hover:text-orange-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#home"
                className="block py-2  hover:text-orange-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block py-2  hover:text-orange-600 transition-colors"
              >
                About
              </a>
              <a
                href="#product"
                className="block py-2  hover:text-orange-600 transition-colors"
              >
                Our Spice
              </a>
              <a
                href="#contact"
                className="block py-2  hover:text-orange-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
