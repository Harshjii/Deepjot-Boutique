import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Instagram, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-rose-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - replaced with lbbb.jpg */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <img 
                  src="/lbbb.jpg" 
                  alt="LBBB Logo" 
                  className="w-12 h-12 object-cover rounded-full shadow-inner border-2 border-white"
                  draggable="false"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur"></div>
            </div>
            <div className="ml-4">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Deepjot Boutique
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-rose-500' : 'text-rose-200'
              }`}>
                Fashion Designer Boutique
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Collection', 'Lookbook', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-200'
                } group`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/917589447170"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-gray-700 hover:bg-rose-50' : 'text-white hover:bg-white/20'
              }`}
            >
              <Phone size={20} />
            </a>
            <a
              href="https://instagram.com/deepjotboutique"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled ? 'text-gray-700 hover:bg-rose-50' : 'text-white hover:bg-white/20'
              }`}
            >
              <Instagram size={20} />
            </a>
            <button className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-gray-700 hover:bg-rose-50' : 'text-white hover:bg-white/20'
            }`}>
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Collection', 'Lookbook', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-gray-700 hover:text-rose-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-rose-100">
                <a
                  href="https://wa.me/917589447170"
                  className="p-2 text-gray-700 hover:text-rose-500 transition-colors"
                >
                  <Phone size={20} />
                </a>
                <a
                  href="https://instagram.com/deepjotboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-rose-500 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <button className="p-2 text-gray-700 hover:text-rose-500 transition-colors">
                  <ShoppingBag size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;