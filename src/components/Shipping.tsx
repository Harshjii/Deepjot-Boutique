import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Truck, Shield, Heart, Clock } from 'lucide-react';

const Shipping = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Shipping Information",
      icon: <Truck size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>We Ship Across India!</strong> Your favorite Deepjot Boutique pieces can reach you anywhere in the country.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Metro Cities:</strong> 2-3 business days</li>
            <li>• <strong>Tier 2 Cities:</strong> 3-5 business days</li>
            <li>• <strong>Remote Areas:</strong> 5-7 business days</li>
            <li>• <strong>Free Shipping:</strong> On orders above ₹2,999</li>
            <li>• <strong>Express Delivery:</strong> Available in select cities</li>
          </ul>
        </div>
      )
    },
    {
      title: "Care Instructions",
      icon: <Heart size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Keep your Deepjot Boutique pieces looking beautiful with proper care:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Dry Clean Only:</strong> For embellished and delicate pieces</li>
            <li>• <strong>Hand Wash:</strong> Use cold water for cotton and linen items</li>
            <li>• <strong>Storage:</strong> Hang or fold carefully to maintain shape</li>
            <li>• <strong>Ironing:</strong> Use low heat and iron inside out</li>
            <li>• <strong>Avoid:</strong> Direct sunlight and harsh chemicals</li>
          </ul>
        </div>
      )
    },
    {
      title: "Return & Exchange Policy",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We want you to love your purchase! Here's our hassle-free return policy:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>7-Day Return:</strong> From date of delivery</li>
            <li>• <strong>Condition:</strong> Items must be unworn with tags attached</li>
            <li>• <strong>Exchange:</strong> Size exchanges available within 7 days</li>
            <li>• <strong>Custom Orders:</strong> Non-returnable due to personalization</li>
            <li>• <strong>Refund Process:</strong> 5-7 business days after return received</li>
          </ul>
        </div>
      )
    },
    {
      title: "Order Processing",
      icon: <Clock size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            From order to doorstep - here's what to expect:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Order Confirmation:</strong> Instant email confirmation</li>
            <li>• <strong>Processing Time:</strong> 1-2 business days</li>
            <li>• <strong>Quality Check:</strong> Each piece is carefully inspected</li>
            <li>• <strong>Packaging:</strong> Eco-friendly, beautiful packaging</li>
            <li>• <strong>Tracking:</strong> SMS and email updates throughout</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Shipping & <span className="text-pink-400">Policies</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about ordering from Deepjot Boutique
          </p>
          <div className="w-24 h-1 bg-pink-400 mx-auto mt-8"></div>
        </div>

        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black">{item.title}</h3>
                </div>
                {openAccordion === index ? (
                  <ChevronUp className="text-gray-400" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              
              {openAccordion === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-6">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you with any queries about your order or our policies.
            </p>
            <a href="https://wa.me/917589447170" 
               className="inline-flex items-center px-6 py-3 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 transition-colors">
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;