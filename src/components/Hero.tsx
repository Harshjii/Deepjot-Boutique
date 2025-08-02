
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-rose-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-rose-300 rounded-full animate-bounce opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        <div className="absolute top-60 left-1/3 w-2.5 h-2.5 bg-rose-200 rounded-full animate-bounce opacity-30 animation-delay-3000"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="elegantPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                <path d="M5,5 Q10,8 15,5 Q10,12 5,15" stroke="white" strokeWidth="0.3" fill="none" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#elegantPattern)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Logo - replaced with lbbb.jpg */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="w-40 h-40 bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500 overflow-hidden">
                <img 
                  src="/lbbb.jpg" 
                  alt="LBBB Logo" 
                  className="w-32 h-32 object-cover rounded-full shadow-inner border-4 border-white"
                  draggable="false"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-rose-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              {/* Floating sparkles */}
              <Sparkles className="absolute -top-2 -right-2 text-rose-300 animate-pulse" size={24} />
              <Sparkles className="absolute -bottom-2 -left-2 text-rose-400 animate-pulse animation-delay-1000" size={20} />
            </div>
          </div>

          {/* Brand Name & Tagline */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-white to-rose-200 bg-clip-text text-transparent">
                Fashion with
              </span>
              <span className="block bg-gradient-to-r from-rose-400 to-rose-600 bg-clip-text text-transparent animate-pulse">
                Confidence
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-rose-200 font-light max-w-4xl mx-auto leading-relaxed">
              Designs for the <span className="font-bold text-white">Bold & Beautiful</span>
            </p>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Unfiltered. Unapologetic. Uniquely <span className="text-rose-400 font-medium">You</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-12">
            <a
              href="#collection"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold text-lg rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-rose-500/25"
            >
              Shop Our Collection
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={24} />
            </a>
          </div>

          {/* Subtitle */}
          <div className="pt-16 space-y-2">
            <p className="text-rose-300 font-medium tracking-wide">
              Celebrating womanhood with creativity & elegance
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;