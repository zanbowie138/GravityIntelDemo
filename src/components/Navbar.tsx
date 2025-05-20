import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = React.useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.7 + 128;
      setIsScrolled(window.scrollY > heroHeight - 80);
    };
    
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    
    window.addEventListener('scroll', onScroll);
    onScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Static navbar */}
      <nav
        ref={navbarRef}
        className={`w-full z-40 transition-all duration-500 ease-in-out ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <NavbarContent isScrolled={false} />
        </div>
      </nav>

      {/* Fixed navbar */}
      <nav
        className={`w-full z-50 fixed top-5 left-0 transition-all duration-300 ease-in-out ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/70 shadow-xl rounded-2xl">
          <NavbarContent isScrolled={true} />
        </div>
      </nav>

      {isScrolled && <div style={{ height: navbarHeight }} />}
    </>
  );
}

function NavbarContent({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const linkColor = isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200';
  const buttonBg = isScrolled ? 'bg-white/80 hover:bg-blue-100' : 'bg-white/30 hover:bg-white/50';
  const iconColor = isScrolled ? 'text-blue-700' : 'text-white';

  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-20 items-center">
          <a href="/" className="flex items-center gap-3">
            <img className="h-12 w-12 rounded-xl" src="/icon_transparent.png" alt="GravityIntel Logo" />
            <span className={`text-2xl font-extrabold ${textColor}`}>GravityIntel</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {['Home', 'Careers', 'Contact'].map((text) => (
              <a
                key={text}
                href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                className={`relative font-semibold text-lg px-2 py-1 transition-colors duration-200 group ${linkColor}`}
              >
                {text}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-full shadow-md transition-all focus:outline-none ${buttonBg}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className={`h-7 w-7 ${iconColor}`} />
              ) : (
                <HiMenu className={`h-7 w-7 ${iconColor}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-4 bg-white/90 backdrop-blur-lg rounded-b-2xl shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-3">
            {['Home', 'Careers', 'Contact'].map((text) => (
              <a
                key={text}
                href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                className="text-gray-800 font-semibold text-lg px-2 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

