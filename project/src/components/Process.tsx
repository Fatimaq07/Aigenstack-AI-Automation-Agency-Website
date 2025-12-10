import { FileText, Network, Cog } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Form',
      description:
        'You fill out a short form so we understand your business goals, pain points, and automation needs.',
      icon: FileText,
      animation: 'scanning',
    },
    {
      number: '02',
      title: 'Automation Blueprint Call',
      description:
        'We review your form, analyze your workflows, and present a custom AI automation strategy.',
      icon: Network,
      animation: 'expanding',
    },
    {
      number: '03',
      title: 'Build, Integrate & Automate',
      description:
        'We create your AI agent, integrate it with your tools, and deploy a fully automated workflow that runs 24/7.',
      icon: Cog,
      animation: 'building',
    },
  ];

  return (
    <section id="process" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A streamlined 3-step workflow designed to transform your business operations
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/50 to-cyan-500/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="process-card relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent opacity-30">
                          {step.number}
                        </span>
                        <div className="relative">
                          <Icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>

                    <div className="process-glow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
