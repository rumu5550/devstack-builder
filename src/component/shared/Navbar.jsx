import React, { useState } from 'react';
import logoTextImg from '../../assets/logo-text.png';
import hamburgerImg from '../../assets/hamburger.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1 text-gray-700 hover:text-gray-900 focus:outline-none md:hidden rounded-lg hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <img src={hamburgerImg} alt="Menu" className="w-6 h-6 object-contain" />
            </button>

            
              <img
                src={logoTextImg}
                alt="DevStack Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
          
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-sm font-semibold text-pink-600 cursor-default select-none">
              Home
            </span>
            <span className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer select-none">
              Technologies
            </span>
            <span className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer select-none">
              Projects
            </span>
            <span className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer select-none">
              About
            </span>
            <span className="text-sm font-medium text-gray-600 hover:text-pink-600 transition-colors duration-200 cursor-pointer select-none">
              Contact
            </span>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="text-sm font-semibold text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 transition-colors cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-sm font-semibold text-white bg-pink-600 hover:bg-pink-700 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-3 pb-5 space-y-1">
            <span className="block px-3 py-2.5 rounded-lg text-base font-semibold text-pink-600 bg-pink-50 cursor-default select-none">
              Home
            </span>
            <span className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors cursor-pointer select-none">
              Technologies
            </span>
            <span className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors cursor-pointer select-none">
              Projects
            </span>
            <span className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors cursor-pointer select-none">
              About
            </span>
            <span className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors cursor-pointer select-none">
              Contact
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


