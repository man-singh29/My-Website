import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Compass, Users, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>LEADERSHIP & INITIATIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Beyond the Code
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Real-world execution, discipline, and entrepreneurial initiative outside traditional coursework.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Hustle 2.0 - Student Entrepreneur */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl bg-[#0D0E14] border border-white/[0.08] hover:border-cyan-500/30 p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                  Bengaluru
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Student Entrepreneur
                </h3>
                <div className="text-sm font-semibold text-cyan-400 font-mono">
                  Hustle 2.0 • Entrepreneurship Challenge
                </div>
              </div>

              {/* Key Metric Highlights Banner */}
              <div className="my-5 grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-black/40 border border-white/[0.05] text-center font-mono">
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Initial Capital</div>
                  <div className="text-sm font-bold text-zinc-200">₹1,000</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Revenue</div>
                  <div className="text-sm font-bold text-emerald-400">₹8,000+</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Net Profit</div>
                  <div className="text-sm font-bold text-cyan-300">₹3,000+</div>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3">
                {experiences[0].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Domain: Business Strategy & Execution</span>
              <span className="text-emerald-400">8x Capital Return</span>
            </div>
          </motion.div>

          {/* Card 2: NCC Cadet - Naval Unit of Visakhapatnam */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group rounded-3xl bg-[#0D0E14] border border-white/[0.08] hover:border-blue-500/30 p-7 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                  Visakhapatnam
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  NCC Cadet (Platoon Commander)
                </h3>
                <div className="text-sm font-semibold text-blue-400 font-mono">
                  Naval Unit of Visakhapatnam • Annual Training Camp
                </div>
              </div>

              {/* Leadership stats banner */}
              <div className="my-5 grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-black/40 border border-white/[0.05] text-center font-mono">
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Platoon Command</div>
                  <div className="text-sm font-bold text-blue-400">16 Cadets</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">Unit Division</div>
                  <div className="text-sm font-bold text-zinc-200">Indian Naval Wing</div>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3">
                {experiences[1].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Domain: Tactical Leadership & Discipline</span>
              <span className="text-blue-400">Naval Unit NCC</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
