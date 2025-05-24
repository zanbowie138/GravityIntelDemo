import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import icon from "../assets/icon_transparent.png";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = 800;
    const handleScroll = () => setIsScrolled(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBoxBase = "max-w-6xl mx-auto backdrop-blur-md shadow-lg rounded-2xl";
  const fixedNavVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <>
      <nav
        className={`w-full z-50`}
      >
        <div className={`${navBoxBase} bg-slate-700/60 border border-white/10 z-50 my-3`}>
          <NavbarContent isScrolled={false} />
        </div>
      </nav>

      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            className="w-full z-50 fixed top-5 left-0"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fixedNavVariants}
          >
            <div className={`${navBoxBase} bg-white/70 border border-black/20 shadow-xl`}>
              <NavbarContent isScrolled={true} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function NavbarContent({ isScrolled }: { isScrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const navStyles = {
    textColor: isScrolled ? 'text-gray-900' : 'text-white',
    linkColor: isScrolled ? 'black' : 'white',
    buttonBg: isScrolled ? 'bg-white/80' : 'bg-white/30',
    iconColor: isScrolled ? 'text-blue-700' : 'text-white',
    mobileMenuBg: 'bg-white/90 backdrop-blur-lg rounded-b-2xl shadow-xl',
    mobileLinkColor: 'text-gray-800',
  };

  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16 py-3 z-50">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img className="h-12 w-12 rounded-xl" src={icon.src} alt="GravityIntel Logo" />
            <span className={`text-2xl font-extrabold ${navStyles.textColor}`}>GravityIntel</span>
          </a>
          <LayoutGroup>
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative font-semibold text-lg px-2 rounded-lg"
                  initial={{
                    color: navStyles.linkColor,
                  }}
                  whileHover={{
                    color: isScrolled ? "#2563eb" : "#bae6fd",
                    transition: { type: "spring", stiffness: 400, damping: 20 }
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ display: "inline-block" }}
                >
                  <span>{link.name}</span>
                  {hoveredIdx === idx && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 w-4/5 bg-gradient-to-r from-blue-400 to-indigo-600"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </LayoutGroup>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-full shadow-md transition-all focus:outline-none ${navStyles.buttonBg}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className={`h-7 w-7 ${navStyles.iconColor}`} />
              ) : (
                <HiMenu className={`h-7 w-7 ${navStyles.iconColor}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden px-6 pt-2 pb-4 animate-fade-in-down ${navStyles.mobileMenuBg}`}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-semibold text-lg px-2 py-2 rounded-lg transition-colors duration-200 ${navStyles.mobileLinkColor}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

