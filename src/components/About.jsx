import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Code, Terminal, Layers } from 'lucide-react';
import { aboutCards } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & VISION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A little about me.
          </h2>
        </div>

        {/* Story & Detailed Introduction */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              I am a first-year Computer Science student enrolled in an intensive engineering program at{' '}
              <span className="text-white font-medium">Scaler School of Technology</span> (specializing in CS and AI), while concurrently pursuing a rigorous Bachelor of Science in Computer Science from{' '}
              <span className="text-white font-medium">BITS Pilani</span>.
            </p>
            <p>
              My passion lies at the intersection of{' '}
              <span className="text-blue-400 font-medium">Android development</span>, mobile systems architecture, and{' '}
              <span className="text-violet-400 font-medium">accessible technology</span>. I am fascinated by how mobile hardware—sensors, touchscreens, and haptic engines—can bridge physical barriers and enable people to interact with information in novel, empowering ways.
            </p>
            <p>
              Beyond building applications, I regularly participate in competitive programming and hackathons to deepen my algorithmic intuition. Whether dissecting time complexity or collaborating with peers to turn a raw hackathon concept into a working prototype under pressure, I thrive on learning by doing.
            </p>
          </div>

          {/* Quick Facts / Location Pill */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Current Base</div>
                  <div className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/[0.06] space-y-2 text-xs text-zinc-400 font-mono">
                <div className="flex justify-between items-center">
                  <span>Current Year:</span>
                  <span className="text-zinc-200">First Year (Freshman)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Primary Focus:</span>
                  <span className="text-zinc-200">Mobile & Systems</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Minimal Info Cards: 01 Developer, 02 Problem Solver, 03 Builder */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, idx) => {
            const icons = [
              <Code className="w-5 h-5 text-blue-400" />,
              <Terminal className="w-5 h-5 text-indigo-400" />,
              <Layers className="w-5 h-5 text-violet-400" />
            ];

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-7 rounded-2xl bg-gradient-to-b from-[#101218]/90 to-[#0A0B0E]/90 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
              >
                {/* Glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-mono font-bold text-zinc-500 group-hover:text-blue-400 transition-colors">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.12] transition-colors">
                    {icons[idx]}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
