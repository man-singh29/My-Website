import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  GitBranch, 
  Github, 
  Smartphone, 
  Globe, 
  Cpu, 
  Layers, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Technology Icons mapping
const iconMap = {
  Java: <Code2 className="w-5 h-5 text-amber-400" />,
  Kotlin: <Smartphone className="w-5 h-5 text-purple-400" />,
  JavaScript: <Terminal className="w-5 h-5 text-yellow-300" />,
  HTML5: <Globe className="w-5 h-5 text-orange-400" />,
  CSS3: <Layers className="w-5 h-5 text-blue-400" />,
  Git: <GitBranch className="w-5 h-5 text-red-400" />,
  GitHub: <Github className="w-5 h-5 text-zinc-200" />,
  "Android Development": <Smartphone className="w-5 h-5 text-emerald-400" />,
  "Mobile App Development": <Layers className="w-5 h-5 text-cyan-400" />,
  "Competitive Programming": <Cpu className="w-5 h-5 text-indigo-400" />,
  "Accessibility Technology": <HeartHandshake className="w-5 h-5 text-pink-400" />
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL TOOLBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Technologies I Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A focused toolkit centered on mobile development, algorithmic problem solving, and modern engineering practices. No fake proficiency percentages—just tools I actively use and build with.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0D0E14]/80 border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {cat.name}
                </h3>
                <span className="text-xs font-mono text-zinc-500">
                  {cat.skills.length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.05] group-hover:scale-110 transition-transform">
                        {iconMap[skill.name] || <Code2 className="w-4 h-4 text-blue-400" />}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-zinc-400 font-mono truncate">
                          {skill.note}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
