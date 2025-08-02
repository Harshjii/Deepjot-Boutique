import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}. You can reach me at ${formData.email} or ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/917589447170?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your perfect piece? Let's start a conversation about your style journey.
          </p>
          <div className="w-24 h-1 bg-pink-400 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Let's Connect</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're looking for a custom design, have questions about our collection, 
                or just want to chat about fashion, we'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="https://wa.me/917589447170" 
                 className="flex items-center p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors group">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">WhatsApp</h4>
                  <p className="text-gray-600">+91 7589447170</p>
                  <p className="text-sm text-green-600">Click to chat instantly</p>
                </div>
              </a>

              <a href="https://instagram.com/deepjotboutique" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center p-6 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">Instagram</h4>
                  <p className="text-gray-600">@deepjotboutique</p>
                  <p className="text-sm text-pink-600">Follow for daily inspiration</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black">Shipping</h4>
                  <p className="text-gray-600">All across India</p>
                  <p className="text-sm text-gray-500">Free shipping on orders above ₹2,999</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-pink-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-pink-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all peer"
                  placeholder=" "
                />
                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-pink-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Phone Number (Optional)
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none transition-all peer resize-none"
                  placeholder=" "
                ></textarea>
                <label className="absolute left-4 top-4 text-gray-500 transition-all peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-pink-400 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Send Message via WhatsApp</span>
                <Send className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Your message will open in WhatsApp for instant communication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;