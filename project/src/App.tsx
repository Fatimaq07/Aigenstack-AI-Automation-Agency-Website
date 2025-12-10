import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import WhatWeBuild from './components/WhatWeBuild';
import Services from './components/Services';
import Results from './components/Results';
import WhyChoose from './components/WhyChoose';
import AboutFounder from './components/AboutFounder';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar onStartProcess={() => setIsModalOpen(true)} />
      <main className="relative z-10">
        <Hero onStartProcess={() => setIsModalOpen(true)} />
        <Process />
        <WhatWeBuild />
        <Services />
        <Results />
        <WhyChoose />
        <AboutFounder />
        <FAQ />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
