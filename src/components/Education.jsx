import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Sparkles, BookOpen, School } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            My Academic Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A dual-track education combining rigorous university computer science foundations with industry-driven AI and software craftsmanship.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-16 max-w-4xl relative">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500/50 to-zinc-800" />

          <div className="space-y-12">
            {educationList.map((item, idx) => {
              const icons = [
                <GraduationCap className="w-5 h-5 text-blue-400" />,
                <BookOpen className="w-5 h-5 text-violet-400" />,
                <School className="w-5 h-5 text-zinc-300" />
              ];

              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-1.5 sm:left-5.5 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full bg-[#070709] border-2 border-blue-500 flex items-center justify-center shadow-md shadow-blue-500/30">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  </div>

                  {/* Card */}
                  <div className="p-6 sm:p-7 rounded-2xl bg-[#0D0E14] border border-white/[0.08] hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-blue-400 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        {item.status}
                      </span>
                      <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                      {item.institution}
                    </h3>

                    <div className="text-base font-semibold text-zinc-300 font-mono mt-1">
                      {item.degree}
                    </div>

                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
