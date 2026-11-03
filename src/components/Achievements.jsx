import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Award, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  PartyPopper,
  X,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievement } from '../data/portfolioData';

export default function Achievements() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3B82F6', '#8B5CF6', '#F59E0B', '#10B981']
      });
    } catch {
      // Ignore
    }
  };

  return (
    <section id="achievements" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Milestones & Recognition
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Validating technical rigor and creative problem solving through competitive hackathons.
          </p>
        </div>

        {/* Featured Achievement Card */}
        <div className="mt-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#14120D] via-[#0E0F14] to-[#0A0B0E] border border-amber-500/25 hover:border-amber-500/40 shadow-2xl transition-all duration-300"
          >
            {/* Ambient Gold/Amber Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Trophy & Badge Info */}
              <div className="md:col-span-8 space-y-5">
                
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold font-mono tracking-wide">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    3RD PLACE WINNER
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {achievement.date}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    Bengaluru
                  </span>
                </div>

                {/* Competition Name */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <span>{achievement.title}</span>
                    <button
                      onClick={triggerCelebration}
                      className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition-colors"
                      title="Celebrate milestone"
                    >
                      <PartyPopper className="w-4 h-4" />
                    </button>
                  </h3>
                  <p className="mt-1 text-sm font-mono text-amber-400/90">
                    Flagship 24-hour Student Engineering Hackathon
                  </p>
                </div>

                {/* Description */}
                <p className="text-base text-zinc-300 leading-relaxed font-normal">
                  "{achievement.description}"
                </p>

                {/* Proof & Assets Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={achievement.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-black font-semibold text-xs hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Official Certificate (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setShowPhotoModal(true)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-zinc-200 text-xs font-medium transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Event Photo</span>
                  </button>
                </div>

              </div>

              {/* Right Column: Visual Trophy Podium Badge */}
              <div className="md:col-span-4 flex flex-col items-center justify-center">
                <div className="relative p-6 rounded-2xl bg-black/40 border border-amber-500/30 flex flex-col items-center text-center shadow-xl w-full max-w-[240px]">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600/30 to-orange-500/30 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/20 mb-3">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-extrabold text-white font-mono">
                    PODIUM
                  </div>
                  <div className="text-xs font-mono text-amber-400 font-semibold tracking-wider mt-0.5">
                    BRONZE MEDAL
                  </div>
                  <div className="mt-3 text-[11px] text-zinc-400 border-t border-white/[0.08] pt-2 w-full">
                    Bengaluru Edition
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Modal for Event Photo */}
        <AnimatePresence>
          {showPhotoModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setShowPhotoModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full rounded-2xl bg-[#0D0E12] border border-white/[0.1] p-4 sm:p-6 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                  <div className="text-sm font-semibold text-white">
                    CodeDay Bengaluru — Team & Milestone Photo
                  </div>
                  <button
                    onClick={() => setShowPhotoModal(false)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="rounded-xl overflow-hidden bg-black/50 border border-white/[0.05] max-h-[70vh]">
                  <img
                    src={achievement.eventPhoto}
                    alt="CodeDay Bengaluru celebration"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-3 flex justify-between items-center text-xs text-zinc-400 font-mono">
                  <span>31 October 2026</span>
                  <a
                    href={achievement.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline flex items-center gap-1"
                  >
                    <span>Open Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
