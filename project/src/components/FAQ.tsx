import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do AI agents help my business?',
      answer:
        'AI agents automate repetitive tasks, handle customer interactions, qualify leads, manage communications, and execute complex workflows 24/7. They reduce manual work by up to 90%, allowing your team to focus on strategic initiatives while operations run smoothly in the background.',
    },
    {
      question: 'How fast can automations be deployed?',
      answer:
        'Deployment timelines vary based on complexity, but most automation systems can be built and deployed within 2-4 weeks. Simple workflows can be ready in days, while enterprise-level systems with multiple integrations may take longer. We prioritize getting you results quickly.',
    },
    {
      question: 'What tools and systems can integrate?',
      answer:
        'Our AI agents integrate seamlessly with CRMs (HubSpot, Salesforce, etc.), email platforms (Gmail, Outlook), communication tools (Slack, Teams), booking systems, databases, custom APIs, and virtually any business software. If it has an API, we can connect it.',
    },
    {
      question: 'Do I need technical knowledge?',
      answer:
        'Not at all. We handle all the technical implementation, integration, and maintenance. You simply describe your business processes and pain points, and we build the automation system for you. We provide training and documentation so your team can use the system confidently.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know about AI automation</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-semibold text-white pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </button>

              <div
                className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
