import { Bot, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartProcess: () => void;
}

export default function Hero({ onStartProcess }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Next-Generation AI Automation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                AI Agents That Automate
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                90% of Your Manual Work
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We design intelligent, action-taking automation systems that streamline operations and help your business
              scale effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onStartProcess}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start the Process</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                View Services
              </button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="robot-container relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="w-64 h-64 text-cyan-400 robot-icon" />
              </div>
              <div className="hologram-ring absolute inset-0" />
              <div className="hologram-ring absolute inset-8" style={{ animationDelay: '0.5s' }} />
              <div className="hologram-ring absolute inset-16" style={{ animationDelay: '1s' }} />
              <div className="scanning-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
