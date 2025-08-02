import React, { useEffect, useRef, useState } from 'react';
import { Heart, Sparkles, Users, Award, Scissors, Crown } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: <Heart className="text-white" size={28} />,
      title: "Passionate Design",
      description: "Every piece is crafted with love, attention to detail, and a deep understanding of what makes women feel confident and beautiful.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: <Sparkles className="text-white" size={28} />,
      title: "Unique Pieces",
      description: "From Western wear to Indo-fusion, our collection features one-of-a-kind designs that celebrate your individuality.",
      gradient: "from-purple-500 to-rose-500"
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: "Empowering Community",
      description: "Join a sisterhood of bold, beautiful women who aren't afraid to express themselves through fashion.",
      gradient: "from-rose-500 to-red-500"
    },
    {
      icon: <Award className="text-white" size={28} />,
      title: "Premium Quality",
      description: "We use only the finest fabrics and materials, ensuring each piece is as durable as it is beautiful.",
      gradient: "from-amber-500 to-rose-500"
    },
    {
      icon: <Scissors className="text-white" size={28} />,
      title: "Custom Tailoring",
      description: "Bespoke designs tailored to your measurements and style preferences for the perfect fit.",
      gradient: "from-teal-500 to-rose-500"
    },
    {
      icon: <Crown className="text-white" size={28} />,
      title: "Luxury Experience",
      description: "From consultation to delivery, we provide a premium boutique experience that makes you feel like royalty.",
      gradient: "from-violet-500 to-rose-500"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-rose-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6 shadow-lg">
            <Heart className="text-white" size={32} />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">Deepjot Boutique</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Where tradition meets innovation, and every woman finds her perfect expression of style
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                Our <span className="text-rose-500">Story</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Deepjot Boutique was born from a passion for <strong className="text-rose-600">raw, unfiltered fashion</strong> that celebrates 
                the modern woman's journey. We believe that every woman deserves to feel confident, bold, and 
                beautiful in her own skin.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our designs aren't just clothes — they're <strong className="text-rose-600">statements of empowerment</strong>. Each piece is carefully crafted to 
                inspire women to embrace their individuality and express their unique style with unwavering confidence.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 rounded-2xl border-l-4 border-rose-400 shadow-lg">
              <blockquote className="text-2xl font-medium text-gray-800 italic leading-relaxed">
                "Fashion is not just about what you wear, it's about how you feel when you wear it."
              </blockquote>
              <cite className="text-rose-600 font-semibold mt-4 block">— Deepjot, Founder & Designer</cite>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="/bt1.jpg" 
                alt="Fashion Design Process" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Crafting Excellence</p>
                <p className="text-sm opacity-90">Every detail matters</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-rose-400 rounded-full opacity-15 blur-xl"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h4>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to Express Your Style?</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of confident women who have discovered their perfect style with Deepjot Boutique
              </p>
              <a
                href="#collection"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;