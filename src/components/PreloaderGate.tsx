import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Play } from 'lucide-react';

interface PreloaderGateProps {
  onLoaded: () => void;
}

export const PreloaderGate: React.FC<PreloaderGateProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onLoaded();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#0F260F] text-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none font-sans"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B8FF52] animate-pulse" />
              <span className="text-xs tracking-widest font-mono uppercase text-[#B8FF52]">
                ROYALPET'S® ARCHIVE 2026
              </span>
            </div>
            <div className="text-xs font-mono text-emerald-300/60 uppercase tracking-widest">
              [ LANDONORRIS INSP ]
            </div>
          </div>

          {/* Center Gate Display */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto z-10 my-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8FF52]/10 border border-[#B8FF52]/30 text-[#B8FF52] text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Preloader Gate</span>
            </motion.div>

            <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none mb-6">
              LOAD <span className="text-[#B8FF52] italic font-sans font-black">ROYAL</span> EXPERIENCE
            </h1>

            <p className="text-emerald-100/70 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
              Experience the next generation of organic pet nutrition, interactive calculators, and smooth 60fps animations.
            </p>

            {/* Interactive Progress / Action Button */}
            <div className="relative min-h-[64px] flex items-center justify-center">
              {!isReady ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-64 sm:w-80 h-2 bg-emerald-950 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#10B981] to-[#B8FF52]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="font-mono text-xs text-[#B8FF52] tracking-widest">
                    INITIALIZING EXPERIENCE ... {progress}%
                  </span>
                </div>
              ) : (
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  className="group relative inline-flex items-center gap-3 bg-[#B8FF52] hover:bg-[#a2e63e] text-[#0F260F] font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    ENTER EXPERIENCE
                  </span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}
            </div>
          </div>

          {/* Bottom Info Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-7xl mx-auto z-10 text-xs font-mono text-emerald-200/50 gap-2 border-t border-white/10 pt-4">
            <span>© 2026 ROYALPET'S ALL RIGHTS RESERVED</span>
            <span className="text-[#B8FF52]">PRESS / CLICK TO UNLOCK FULL INTERACTIVE CANVAS</span>
          </div>

          {/* Background Graphic Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#B8FF52_1px,transparent_1px)] [background-size:24px_24px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
