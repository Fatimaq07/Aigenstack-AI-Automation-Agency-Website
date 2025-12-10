import { CheckCircle2, Zap, Shield, Link2, TrendingUp } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: 'Automate 90% of Manual Tasks',
      description: 'Eliminate repetitive work and focus on strategic initiatives',
    },
    {
      icon: Zap,
      title: 'Intelligent Systems That Take Real Actions',
      description: 'AI agents that execute tasks autonomously, not just recommendations',
    },
    {
      icon: TrendingUp,
      title: 'Faster Operations, Fewer Bottlenecks',
      description: 'Streamlined processes that accelerate business velocity',
    },
    {
      icon: Link2,
      title: 'Seamless Integration With Your Tools',
      description: 'Works with your existing CRM, email, and business systems',
    },
    {
      icon: Shield,
      title: 'Scalable Solutions for Growing Businesses',
      description: 'Automation that grows with your business demands',
    },
  ];

  return (
    <section id="why-choose" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose AigenStack
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The intelligent choice for businesses ready to scale with AI automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="why-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="mb-6 relative inline-block">
                      <Icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>

                  <div className="why-glow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
