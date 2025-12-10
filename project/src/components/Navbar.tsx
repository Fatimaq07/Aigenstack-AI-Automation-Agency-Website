import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';

interface NavbarProps {
  onStartProcess: () => void;
}

export default function Navbar({ onStartProcess }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-xl shadow-blue-500/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="./src/logo.png" alt="logo" className="w-17 h-12 object-contain" />

            <span>
              AigenStack
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={onStartProcess}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Start the Process
            </button>
          </div>

          <button
            onClick={onStartProcess}
            className="md:hidden px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
