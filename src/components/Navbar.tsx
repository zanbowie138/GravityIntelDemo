import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img className="h-10 w-10" src="/icon.png" alt="GravityIntel Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">GravityIntel</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Careers</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">Home</a>
            <a href="/careers" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">Careers</a>
            <a href="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
} 