import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/', isPage: true },
  { label: 'Services', href: '/#services', isPage: false },
  { label: 'Hosting', href: '/hosting', isPage: true },
  { label: 'About', href: '/#about', isPage: false },
  { label: 'Contact', href: '/#contact', isPage: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage: boolean) => {
    setMobileOpen(false);
    if (!isPage && isHome) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-slate-300/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/uploads/upload_1.png"
              alt="Excelsis Softworks"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.isPage ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm font-medium text-silver-dark hover:text-azure transition-colors duration-300 rounded-lg hover:bg-slate-900/5"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (isHome) {
                      e.preventDefault();
                      handleNavClick(link.href, false);
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-silver-dark hover:text-azure transition-colors duration-300 rounded-lg hover:bg-slate-900/5"
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              to="/#contact"
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  handleNavClick('/#contact', false);
                }
              }}
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-obsidian bg-azure hover:bg-azure-light transition-all duration-300 rounded-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-silver-dark hover:text-azure transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-slate-900/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-silver-dark hover:text-azure hover:bg-slate-900/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      setMobileOpen(false);
                      if (isHome) {
                        e.preventDefault();
                        handleNavClick(link.href, false);
                      }
                    }}
                    className="block px-4 py-3 text-silver-dark hover:text-azure hover:bg-slate-900/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <Link
                to="/#contact"
                onClick={(e) => {
                  setMobileOpen(false);
                  if (isHome) {
                    e.preventDefault();
                    handleNavClick('/#contact', false);
                  }
                }}
                className="block mt-3 px-4 py-3 text-center font-semibold text-obsidian bg-azure hover:bg-azure-light rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
