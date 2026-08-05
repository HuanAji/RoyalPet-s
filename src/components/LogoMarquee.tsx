import React from 'react';
import { motion } from 'motion/react';
import { Shield, Award, Sparkles, HeartHandshake } from 'lucide-react';

const LOGOS = [
  { name: 'VET CARE INT', tag: 'Certified Organic' },
  { name: 'PET MD', tag: '5-Star Rating' },
  { name: 'ROYAL VET ASSOC', tag: 'Official Partner' },
  { name: 'ANIMAL HEALTH LABS', tag: 'Grain Free Standard' },
  { name: 'GLOBAL PET CARE', tag: 'Top Brand 2026' },
  { name: 'NUTRITION FIRST', tag: '100% Salmon Oil' },
  { name: 'WORLD PET CLUB', tag: 'VIP Choice' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="w-full bg-[#0d210d] text-white py-6 border-y border-white/10 overflow-hidden relative select-none">
      {/* Subtle Lime Ambient Light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-[#B8FF52]/10 blur-2xl rounded-full pointer-events-none" />
      
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: 'linear',
          }}
          className="flex items-center whitespace-nowrap gap-8 sm:gap-16 shrink-0"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-[#B8FF52] group-hover:rotate-45 transition-transform" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-emerald-100">
                {logo.name}
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#B8FF52]/20 text-[#B8FF52] px-2 py-0.5 rounded-md border border-[#B8FF52]/30">
                {logo.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
