import React from 'react';
import logoTextImg from '../../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={logoTextImg}
                alt="DevStack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center space-x-5 pt-2 text-sm font-medium text-gray-700">
              <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                GitHub
              </span>
              <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                Twitter
              </span>
              <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                LinkedIn
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Home
                </span>
              </li>
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Technologies
                </span>
              </li>
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Projects
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  About
                </span>
              </li>
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Contact
                </span>
              </li>
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Careers
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-pink-600 transition-colors cursor-pointer select-none">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-gray-600 transition-colors cursor-pointer select-none">
              Privacy
            </span>
            <span className="hover:text-gray-600 transition-colors cursor-pointer select-none">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
