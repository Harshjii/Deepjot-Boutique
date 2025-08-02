import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Shop from './components/Shop';
import Lookbook from './components/Lookbook';
import Shipping from './components/Shipping';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Shop />
      <Lookbook />
      <Shipping />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;