import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  Eye, 
  Radio, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Accessibility
} from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import InteractiveHapticDemo from './InteractiveHapticDemo';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Things I've Built.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Purpose-driven engineering that tackles real-world accessibility and hardware integration challenges.
          </p>
        </div>

        {/* Featured Project Showcase: HaptiBraille */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-gradient-to-b from-[#0F1118] to-[#08090D] border border-blue-500/20 hover:border-blue-500/40 p-6 sm:p-10 shadow-2xl transition-all duration-300"
          >
            {/* Ambient Background Glow behind Card */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-600/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* Category & Platform Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium">
                    {featuredProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                    {featuredProject.platform}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                    <Accessibility className="w-3 h-3" />
                    Assistive Tech
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {featuredProject.title}
                  </h3>
                  <p className="mt-2 text-base font-medium text-blue-400 font-mono">
                    Tactile Braille Haptic Communication System
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-zinc-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    Core Technical Capabilities
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {featuredProject.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-300 leading-normal">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platform & Impact Note */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-zinc-400 leading-relaxed">
                    <span className="text-zinc-200 font-medium">Accessibility Impact:</span> Refreshable Braille hardware displays can cost $1,500 to $5,000+. HaptiBraille democratizes tactile communication using ubiquitous smartphone haptic actuators with zero auxiliary cost.
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                  </a>

                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 font-medium text-xs transition-all hover:scale-[1.02]"
                  >
                    <span>Read Architecture Spec</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Right Column: Live Interactive Simulator Card */}
              <div className="lg:col-span-6 space-y-4">
                <InteractiveHapticDemo />
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
