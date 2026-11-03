import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Volume2, Smartphone, Sparkles, RefreshCw } from 'lucide-react';

// Standard 6-dot Braille patterns (dots 1 to 6)
// (1) (4)
// (2) (5)
// (3) (6)
const brailleMap = {
  a: [1],
  b: [1, 2],
  c: [1, 4],
  d: [1, 4, 5],
  e: [1, 5],
  f: [1, 2, 4],
  g: [1, 2, 4, 5],
  h: [1, 2, 5],
  i: [2, 4],
  j: [2, 4, 5],
  k: [1, 3],
  l: [1, 2, 3],
  m: [1, 3, 4],
  n: [1, 3, 4, 5],
  o: [1, 3, 5],
  p: [1, 2, 3, 4],
  q: [1, 2, 3, 4, 5],
  r: [1, 2, 3, 5],
  s: [2, 3, 4],
  t: [2, 3, 4, 5],
  u: [1, 3, 6],
  v: [1, 2, 3, 6],
  w: [2, 4, 5, 6],
  x: [1, 3, 4, 6],
  y: [1, 3, 4, 5, 6],
  z: [1, 3, 5, 6],
  ' ': []
};

export default function InteractiveHapticDemo() {
  const [inputText, setInputText] = useState('CODE');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChar, setActiveChar] = useState('');
  const [activeDot, setActiveDot] = useState(null);
  const [audioFeedback, setAudioFeedback] = useState(true);
  const [vibrationSupported, setVibrationSupported] = useState(false);
  
  const audioCtxRef = useRef(null);
  const stopSignalRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      setVibrationSupported(true);
    }
  }, []);

  const playClickSound = (pitch = 240) => {
    if (!audioFeedback) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio not permitted or supported
    }
  };

  const triggerDotHaptic = (dotNum) => {
    if (vibrationSupported) {
      try {
        navigator.vibrate(60);
      } catch {
        // Ignore
      }
    }
    playClickSound(180 + dotNum * 35);
  };

  const stopTransmission = () => {
    stopSignalRef.current = true;
    setIsPlaying(false);
    setActiveChar('');
    setActiveDot(null);
    if (vibrationSupported) {
      try {
        navigator.vibrate(0);
      } catch {
        // Ignore
      }
    }
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const transmitTactileBraille = async () => {
    if (isPlaying) {
      stopTransmission();
      return;
    }

    const text = (inputText || 'HELLO').trim().toLowerCase();
    if (!text) return;

    setIsPlaying(true);
    stopSignalRef.current = false;

    for (let i = 0; i < text.length; i++) {
      if (stopSignalRef.current) break;

      const char = text[i];
      setActiveChar(char.toUpperCase());
      const activeDots = brailleMap[char] || [];

      // Scan dots 1 to 6
      for (let dot = 1; dot <= 6; dot++) {
        if (stopSignalRef.current) break;

        const isRaised = activeDots.includes(dot);
        setActiveDot(dot);

        if (isRaised) {
          triggerDotHaptic(dot);
          await sleep(110);
        } else {
          await sleep(65);
        }
      }

      setActiveDot(null);
      // Inter-character pause
      await sleep(260);
    }

    setIsPlaying(false);
    setActiveChar('');
    setActiveDot(null);
  };

  // Get current braille dots for active character or preview first letter
  const displayChar = activeChar ? activeChar.toLowerCase() : (inputText[0]?.toLowerCase() || 'c');
  const currentRaisedDots = brailleMap[displayChar] || [];

  return (
    <div className="w-full rounded-2xl bg-[#090A0E] border border-white/[0.08] p-5 sm:p-6 shadow-2xl relative overflow-hidden">
      
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider">
            Interactive Tactile Simulator
          </span>
        </div>
        
        <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
          <button
            onClick={() => setAudioFeedback(!audioFeedback)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
              audioFeedback ? 'bg-blue-500/20 text-blue-300' : 'bg-white/[0.04] text-zinc-500'
            }`}
            title="Toggle acoustic tactile feedback"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{audioFeedback ? 'Sound On' : 'Muted'}</span>
          </button>
          
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-zinc-400">
            <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
            {vibrationSupported ? 'Haptics Available' : 'Audio Mode'}
          </span>
        </div>
      </div>

      {/* Main Simulation Layout */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        
        {/* Left: 6-Dot Braille Matrix Cell */}
        <div className="sm:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-black/40 border border-white/[0.05]">
          <div className="text-[11px] font-mono text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-1.5">
            <span>Cell:</span>
            <span className="text-white font-bold text-sm bg-white/[0.08] px-2 py-0.5 rounded">
              {displayChar.toUpperCase()}
            </span>
          </div>

          {/* 6 Dots: 2 columns of 3 rows */}
          {/* Col 1: dots 1, 2, 3 | Col 2: dots 4, 5, 6 */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-3 bg-zinc-950/70 rounded-2xl border border-white/[0.06] shadow-inner">
            {[1, 4, 2, 5, 3, 6].map((dotNum) => {
              const isRaised = currentRaisedDots.includes(dotNum);
              const isScanning = activeDot === dotNum;

              return (
                <div key={dotNum} className="flex flex-col items-center gap-1">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-all duration-150 ${
                      isScanning && isRaised
                        ? 'bg-blue-400 text-black scale-125 shadow-lg shadow-blue-400/80 ring-4 ring-blue-500/40'
                        : isScanning && !isRaised
                        ? 'bg-zinc-700 text-zinc-300 scale-110 ring-2 ring-zinc-500/30'
                        : isRaised
                        ? 'bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/30'
                        : 'bg-zinc-900 border border-zinc-800 text-zinc-600'
                    }`}
                  >
                    {dotNum}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 text-[10px] font-mono text-zinc-400">
            {isPlaying ? (
              <span className="text-blue-400 animate-pulse">Transmitting tactile pulses...</span>
            ) : (
              'Serialized UEB scanning (1→6)'
            )}
          </div>
        </div>

        {/* Right: Input & Controls */}
        <div className="sm:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">
              Enter Text / Tap Word to Translate:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                maxLength={12}
                disabled={isPlaying}
                onChange={(e) => setInputText(e.target.value.toUpperCase())}
                placeholder="e.g. HELLO"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white font-mono text-sm tracking-widest uppercase focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              />
              <button
                onClick={transmitTactileBraille}
                className={`px-4 py-2.5 rounded-xl font-medium text-xs flex items-center gap-2 transition-all shrink-0 ${
                  isPlaying
                    ? 'bg-rose-600 hover:bg-rose-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Feel Pulse</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="text-[11px] font-mono text-zinc-400 block mb-1.5">
              Quick Test Presets:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['HAPTI', 'BRAILLE', 'HELP', 'HELLO', 'MANISH'].map((word) => (
                <button
                  key={word}
                  disabled={isPlaying}
                  onClick={() => {
                    setInputText(word);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-colors ${
                    inputText === word
                      ? 'bg-blue-600/20 border-blue-500/40 text-blue-300'
                      : 'bg-white/[0.02] border-white/[0.06] text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  } disabled:opacity-50`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-500/[0.04] border border-blue-500/15 text-[11px] text-zinc-300 leading-normal">
            <span className="text-blue-400 font-semibold">Live Experience:</span> Active dots buzz the phone motor or emit subtle synthesized acoustic cues to represent tactile vibration.
          </div>
        </div>

      </div>

    </div>
  );
}
