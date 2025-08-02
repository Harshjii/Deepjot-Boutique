import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Heart, Eye, Share2 } from 'lucide-react';

const Lookbook = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const lookbookImages = [
    {
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Unfiltered. Unapologetic. You.",
      category: "Evening Wear",
      likes: 234
    },
    {
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Bold choices, beautiful outcomes.",
      category: "Indo-Fusion",
      likes: 189
    },
    {
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Confidence is your best accessory.",
      category: "Professional",
      likes: 312
    },
    {
      image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Express yourself fearlessly.",
      category: "Casual Chic",
      likes: 267
    },
    {
      image: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Every woman is a work of art.",
      category: "Artistic",
      likes: 198
    },
    {
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      quote: "Style is a way to say who you are.",
      category: "Statement",
      likes: 345
    }
  ];

  return (
    <section id="lookbook" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mb-6 shadow-lg">
            <Eye className="text-white" size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">Lookbook</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how our designs come to life and inspire confidence in every woman
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-rose-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Lookbook Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {lookbookImages.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`Lookbook ${index + 1}`}
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                      <Heart className="text-gray-600 hover:text-rose-500 transition-colors" size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                      <Share2 className="text-gray-600 hover:text-blue-500 transition-colors" size={18} />
                    </button>
                  </div>
                  
                  {/* Likes Counter */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <Heart className="text-rose-400 fill-current" size={14} />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 flex items-center justify-center ${
                    hoveredImage === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center text-white p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <blockquote className="text-xl font-medium italic mb-4 leading-relaxed">
                        "{item.quote}"
                      </blockquote>
                      <div className="w-16 h-px bg-rose-400 mx-auto mb-4"></div>
                      <p className="text-rose-300 font-medium">Deepjot Boutique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Instagram className="text-white" size={40} />
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">Join Our Style Community</h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Share your Deepjot Boutique looks and inspire other women to embrace their unique style. 
                Tag us and become part of our fashion family!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="https://instagram.com/deepjotboutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Instagram className="mr-3" size={24} />
                  Follow @deepjotboutique
                </a>
                
                <div className="text-white/80 text-lg">
                  <span className="font-semibold text-white">10K+</span> Fashion Lovers
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-white/70">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm">Daily Posts</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm">Monthly Reach</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;