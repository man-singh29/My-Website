import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, ExternalLink, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { competitiveProgrammingInfo } from '../data/portfolioData';

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming" className="relative py-24 sm:py-32 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ALGORITHMS & DATA STRUCTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {competitiveProgrammingInfo.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {competitiveProgrammingInfo.intro}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Language Highlight & Approach */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Java Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-7 rounded-3xl bg-[#0D0E14] border border-white/[0.08] space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Primary Competitive Language: {competitiveProgrammingInfo.language}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      Standard Libraries, Collections & Fast I/O
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Active Focus
                </span>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {competitiveProgrammingInfo.languageNote} I focus on developing clean, modular solutions with strict attention to asymptotic complexity (O(N log N), dynamic programming states, two-pointer scanning, and graph traversals).
              </p>

              {/* Code Snippet Box (Syntactically accurate Java sample showing clean algorithmic style) */}
              <div className="rounded-xl bg-[#070709] border border-white/[0.06] p-4 font-mono text-xs text-zinc-300 overflow-x-auto">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.05] text-[10px] text-zinc-500">
                  <span>FastScanner.java</span>
                  <span>Java 21</span>
                </div>
                <pre className="text-zinc-300">
                  <span className="text-violet-400">public class</span> <span className="text-yellow-300">Solution</span> &#123;<br />
                  &nbsp;&nbsp;<span className="text-violet-400">public static void</span> <span className="text-blue-400">main</span>(String[] args) &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-500">// Algorithmic problem solver template</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;FastScanner in = <span className="text-violet-400">new</span> FastScanner();<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">int</span> t = in.nextInt();<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">while</span> (t-- &gt; 0) solve(in);<br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;
                </pre>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Platform Profiles (Transparently labeled placeholders) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#0D0E14] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Terminal className="w-4 h-4 text-blue-400" />
                <span>Coding Platform Profiles</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Profile records and handles are currently being synced with public competitive platforms. Verified links will update dynamically below.
              </p>

              <div className="space-y-3 pt-2">
                {competitiveProgrammingInfo.profiles.map((profile) => (
                  <div
                    key={profile.platform}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="font-semibold text-sm text-white">{profile.platform}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                        Placeholder
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-xs text-zinc-400 font-mono">
                      <span>Handle: <span className="text-zinc-300">{profile.handle}</span></span>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[11px] font-mono text-zinc-400">
                <span className="text-zinc-300 font-medium">Honest Note:</span> Rankings and solve statistics will appear here once officially indexed from upcoming contests.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
