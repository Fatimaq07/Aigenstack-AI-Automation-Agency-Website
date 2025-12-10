import { Sparkles, Code, Brain } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Meet the Founder
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Founder Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center shadow-[0_0_40px_10px_rgba(0,200,255,0.15)]">
              
              {/* 👉 Replace this path with your image path */}
              <img
                src="/src/assets/founder.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Glow behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-3xl opacity-30 animate-pulse" />
          </div>

          {/* Founder Info */}
          <div className="space-y-6">

            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Hi, I'm Fatima
            </h3>

            <p className="text-xl text-cyan-400 font-semibold mb-4">
              Developer, AI Agent & Automation Builder
            </p>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I help businesses scale by designing intelligent AI agents and automation
                systems that replace manual work with smart, self-running workflows.
              </p>

              <p>
                I focus on solving real business problems using AI—building systems that
                don’t just assist, but take action, streamline operations, and deliver measurable results.
              </p>

              <p>
                With experience in automation and modern development, my aim is to help
                companies work more efficiently and make better use of AI in their day-to-day processes.
              </p>

              <p className="text-cyan-400 font-semibold pt-4">
                I believe every business deserves automation and I build the systems that make it possible.
              </p>
            </div>

            {/* Focus + Expertise */}
            <div className="flex items-center space-x-6 pt-8">

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Focus</div>
                  <div className="font-semibold text-white">AI Automation</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Expertise</div>
                  <div className="font-semibold text-white">Development</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
