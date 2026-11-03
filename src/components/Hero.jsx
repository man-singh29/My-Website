import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Smartphone, 
  Code2, 
  Cpu, 
  ChevronDown,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Content */}
          <motion.div 
            className="lg:col-span-7 text-left space-y-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">
                HELLO, I'M
              </span>
            </div>

            {/* Name Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
                Manish <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">Singh.</span>
              </h1>

              {/* Animated Cycling Subtitle */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={subtitleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-center gap-2 text-lg sm:text-2xl font-semibold text-blue-400 font-mono"
                  >
                    <span className="text-zinc-600 font-sans">&gt;</span>
                    <span>{personalInfo.subtitles[subtitleIndex]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Icons & Direct Links */}
            <div className="pt-4 flex items-center gap-5">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                CONNECT
              </span>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-zinc-700 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-[#0A66C2] bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-zinc-700 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg text-zinc-400 hover:text-rose-400 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-zinc-700 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Photograph with Floating Badges */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Subtle Glowing Aura Backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-violet-600/20 to-cyan-500/20 blur-2xl transform scale-105 -z-10 animate-pulse-subtle" />
              
              {/* Photo Frame Container */}
              <div className="group relative w-full h-full rounded-3xl p-1.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#121318] relative">
                  <img
                    src="./profile.jpeg"
                    alt="Manish Singh - Computer Science Student & Android Developer"
                    className="w-full h-full object-cover object-center filter grayscale-[8%] contrast-[1.05] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070709]/80 via-[#070709]/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge 1: Android Development (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0F1015]/90 border border-blue-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <div className="p-1 rounded-md bg-emerald-500/20 text-emerald-400">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-wide">Android Development</div>
                  <div className="text-[9px] text-zinc-400 font-mono">Mobile Engineering</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Java (Left Center) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -left-4 sm:-left-8 px-3.5 py-2 rounded-xl bg-[#0F1015]/90 border border-violet-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <div className="p-1 rounded-md bg-violet-500/20 text-violet-400">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-wide">Java & Kotlin</div>
                  <div className="text-[9px] text-zinc-400 font-mono">Core Languages</div>
                </div>
              </motion.div>

              {/* Floating Badge 3: Problem Solving (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 right-4 sm:right-6 px-3.5 py-2 rounded-xl bg-[#0F1015]/90 border border-indigo-500/30 backdrop-blur-md shadow-xl flex items-center gap-2"
              >
                <div className="p-1 rounded-md bg-blue-500/20 text-blue-400">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-wide">Problem Solving</div>
                  <div className="text-[9px] text-zinc-400 font-mono">Algorithms & Logic</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="pt-16 sm:pt-20 flex flex-col items-center justify-center text-center text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-blue-400 group-hover:text-blue-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
