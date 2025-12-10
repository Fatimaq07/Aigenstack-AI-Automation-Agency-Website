import { Brain, MessageSquare, Target, Mail, Calendar, Workflow } from 'lucide-react';

export default function WhatWeBuild() {
  const features = [
    {
      icon: Brain,
      title: 'AI Agents for Business Operations',
      description: 'Intelligent agents that handle complex workflows and make autonomous decisions',
    },
    {
      icon: MessageSquare,
      title: 'Customer Support Automations',
      description: '24/7 intelligent support systems that resolve issues instantly',
    },
    {
      icon: Target,
      title: 'Lead Qualification Agents',
      description: 'Smart agents that score, qualify, and route leads automatically',
    },
    {
      icon: Mail,
      title: 'CRM & Email Automations',
      description: 'Seamless integration with your CRM and communication tools',
    },
    {
      icon: Calendar,
      title: 'Appointment & Scheduling Automations',
      description: 'Automated booking systems that manage your calendar intelligently',
    },
    {
      icon: Workflow,
      title: 'Internal Workflow Automations',
      description: 'Custom workflows that eliminate repetitive internal processes',
    },
  ];

  return (
    <section id="what-we-build" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              What We Build
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge AI automation solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 h-full hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="mb-6 relative inline-block">
                      <Icon className="w-12 h-12 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="card-glow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
