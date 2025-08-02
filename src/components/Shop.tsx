import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Heart, Eye } from 'lucide-react';

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
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

  const categories = [
    {
      title: "Western Elegance",
      description: "Contemporary styles for the modern woman",
      image: "/bt8.jpg",
      items: "25+ Pieces",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Indo-Fusion",
      description: "Where tradition meets modernity",
      image: "/bt7.jpg",
      items: "30+ Pieces",
      gradient: "from-purple-500 to-rose-500"
    },
    {
      title: "Bespoke Designs",
      description: "Custom pieces tailored just for you",
      image: "/bt6.jpg",
      items: "Made to Order",
      gradient: "from-amber-500 to-rose-500"
    },
    {
      title: "Luxury Accessories",
      description: "Complete your look with curated pieces",
      image: "/bt5.jpg",
      items: "15+ Items",
      gradient: "from-teal-500 to-rose-500"
    }
  ];

  const featuredProducts = [
    {
      name: "Midnight Elegance Dress",
      price: "₹3,999",
      originalPrice: "₹5,999",
      image: "/bt1.jpg",
      tag: "Bestseller",
      rating: 4.9,
      reviews: 127
    },
    {
      name: "Royal Fusion Kurta Set",
      price: "₹2,799",
      originalPrice: "₹3,999",
      image: "/bt2.jpg",
      tag: "New Arrival",
      rating: 4.8,
      reviews: 89
    },
    {
      name: "Bold Statement Blazer",
      price: "₹4,599",
      originalPrice: "₹6,999",
      image: "/bt3.jpg",
      tag: "Limited Edition",
      rating: 5.0,
      reviews: 156
    },
    {
      name: "Elegant Saree",
      price: "₹5,499",
      originalPrice: "₹7,499",
      image: "/bt4.jpg",
      tag: "Classic",
      rating: 4.7,
      reviews: 102
    },
    {
      name: "Chic Lehenga",
      price: "₹6,299",
      originalPrice: "₹8,299",
      image: "/bt5.jpg",
      tag: "Trending",
      rating: 4.9,
      reviews: 134
    }
  ];

  return (
    <section id="collection" ref={sectionRef} className="py-24 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6 shadow-lg">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover pieces that speak to your soul and celebrate your unique style
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Categories */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Overlay Content */}
                  <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center ${
                    hoveredCategory === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye className="mx-auto mb-2" size={32} />
                      <p className="font-semibold">Explore Collection</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {category.items}
                    </span>
                    <ArrowRight className="text-gray-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all duration-300" size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-lg text-gray-600">Handpicked pieces that define elegance and style</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Product Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {product.tag}
                      </span>
                    </div>
                    
                    {/* Wishlist Button */}
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                      <Heart className="text-gray-600 hover:text-rose-500 transition-colors" size={18} />
                    </button>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center ${
                      hoveredProduct === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500">
                        Quick View
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h4>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-rose-600">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                        Save {Math.round((1 - parseInt(product.price.replace('₹', '').replace(',', '')) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Shop?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Connect with us on WhatsApp for personalized styling assistance and exclusive offers
              </p>
              <a
                href="https://wa.me/917589447170"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shop via WhatsApp
                <ArrowRight className="ml-3" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;