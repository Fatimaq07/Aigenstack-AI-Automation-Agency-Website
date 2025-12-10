import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Zap, Clock, Target } from 'lucide-react';

export default function Results() {
  const stats = [
    { icon: TrendingUp, value: 90, suffix: '%', label: 'Reduction in Manual Work' },
    { icon: Zap, value: 100, suffix: '%', label: 'Instant Task Execution' },
    { icon: Clock, value: 24, suffix: '/7', label: 'Business Automation' },
    { icon: Target, value: 10, suffix: 'x', label: 'Faster Response Times' },
  ];

  return (
    <section id="results" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results that transform business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StatCard key={index} stat={stat} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
  };
  Icon: React.ElementType;
  index: number;
}

function StatCard({ stat, Icon, index }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <div
      ref={cardRef}
      className="stat-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 text-center hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>

          <div className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {count}
              {stat.suffix}
            </span>
          </div>

          <p className="text-gray-400 font-medium">{stat.label}</p>
        </div>

        <div className="stat-glow" />
      </div>
    </div>
  );
}
