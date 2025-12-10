import { Bot, Zap, Database, Mail, Calendar, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Agent Development',
      description:
        'Custom AI agents that think, learn, and execute tasks autonomously to handle complex business processes.',
    },
    {
      icon: Zap,
      title: 'Automated Workflow Systems',
      description:
        'End-to-end workflow automation that connects your tools and eliminates manual handoffs between systems.',
    },
    {
      icon: Database,
      title: 'CRM + Communication Automations',
      description:
        'Intelligent integrations that keep your CRM updated and communications flowing without manual input.',
    },
    {
      icon: Mail,
      title: 'Lead Response & Follow-up Automation',
      description:
        'Instant lead engagement and intelligent follow-up sequences that convert prospects while you sleep.',
    },
    {
      icon: Calendar,
      title: 'Booking System Automation',
      description:
        'Smart scheduling that handles appointments, reminders, and calendar management automatically.',
    },
    {
      icon: Settings,
      title: 'Custom Business Workflow Solutions',
      description:
        'Tailored automation systems designed specifically for your unique business processes and requirements.',
    },
  ];

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI automation solutions that transform how your business operates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 h-full hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="mb-6 relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-cyan-400" />
                      <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="service-glow" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
