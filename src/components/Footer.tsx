import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full relative">
                    <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Deepjot Boutique</h3>
                <p className="text-xs text-gray-400">Fashion Designer Boutique</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Celebrating womanhood with confidence, creativity, and elegance. 
              Fashion that's unfiltered, unapologetic, and uniquely you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#shop" className="text-gray-300 hover:text-pink-400 transition-colors">Shop Collection</a></li>
              <li><a href="#lookbook" className="text-gray-300 hover:text-pink-400 transition-colors">Lookbook</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <a href="https://wa.me/917589447170" 
                 className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                <MessageCircle size={20} className="mr-3" />
                <span>WhatsApp: +91 7589447170</span>
              </a>
              <a href="https://instagram.com/deepjotboutique" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram size={20} className="mr-3" />
                <span>@deepjotboutique</span>
              </a>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">We ship across India</p>
              <p className="text-sm text-gray-400">Free shipping on orders above ₹2,999</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Deepjot Boutique. All rights reserved.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-2 text-pink-400" />
              <span>for bold & beautiful women</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;