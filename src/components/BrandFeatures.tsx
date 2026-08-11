import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, PhoneCall, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const BrandFeatures: React.FC = () => {
  return (
    <section className="w-full pt-8 pb-12 sm:pt-12 sm:pb-16 px-4 sm:px-8 md:px-12 bg-[#FFFDF5] text-[#31b1ba] relative overflow-hidden select-none border-t border-[#31b1ba]/5">
      {/* Pure-CSS animated blobs — replaces Framer Motion infinite animate (no JS overhead) */}
      <div className="animate-blob-a absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#FFC72C]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="animate-blob-b absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#FF6B00]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#31b1ba_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-4 border-b border-[#31b1ba]/10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl text-[#31b1ba] tracking-tight">
              WHY CHOOSE <span className="text-[#FF6B00] italic font-sans font-black">ROYALPET'S</span>
            </h2>
          </motion.div>

          <p className="text-gray-600 text-xs sm:text-sm max-w-md leading-relaxed">
            Eliminating fillers, grain waste, and mystery meats. Calibrated for maximum energy, coat shine, and longevity.
          </p>
        </div>

        {/* ─── MOBILE: Stacked List Style ─── */}
        <div className="flex flex-col gap-4 md:hidden">

          {/* Premium Area Line Chart — pure CSS animation, no re-render loop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-[#31b1ba]/15 shadow-sm relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#31b1ba]/5 blur-2xl pointer-events-none rounded-full" />

            {/* Chart Header */}
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#31b1ba] uppercase tracking-widest block mb-1">Vitality Score</span>
                <span className="text-2xl font-serif-display text-[#31b1ba] leading-none">+45%</span>
              </div>
              <div className="bg-[#FFFDF5] px-2.5 py-1 rounded-full border border-[#FFC72C]/40 flex items-center gap-1.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                <span className="text-[8px] font-mono text-[#FF6B00] font-bold">30-DAY TREND</span>
              </div>
            </div>

            {/* Chart Area — pure CSS stroke animation */}
            <div className="relative h-28 w-full px-1">
              <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#31b1ba" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#31b1ba" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid lines */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="0"  x2="100" y2="0"  stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />

                {/* Gradient Area Fill — CSS clip-path animation */}
                <path
                  d="M 5 40 L 25 32 L 45 35 L 70 20 L 95 5 L 95 50 L 5 50 Z"
                  fill="url(#areaGradient)"
                  className="chart-area"
                />

                {/* Main Data Line — CSS stroke-dashoffset animation */}
                <path
                  d="M 5 40 L 25 32 L 45 35 L 70 20 L 95 5"
                  fill="none"
                  stroke="#31b1ba"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="200"
                  className="chart-line"
                />

                {/* Regular Nodes */}
                {[
                  { x: 5, y: 40, delay: '0.45s' },
                  { x: 25, y: 32, delay: '0.6s' },
                  { x: 45, y: 35, delay: '0.75s' },
                  { x: 70, y: 20, delay: '0.9s' },
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={pt.y}
                    r="2"
                    fill="white"
                    stroke="#31b1ba"
                    strokeWidth="1.5"
                    className="chart-node"
                    style={{ animationDelay: pt.delay }}
                  />
                ))}

                {/* Final Highlighted Node */}
                <circle
                  cx="95"
                  cy="5"
                  r="3.5"
                  fill="#FFF"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  filter="url(#glow)"
                  className="chart-node"
                  style={{ animationDelay: '1.1s' }}
                />
              </svg>
            </div>

            {/* X-Axis Labels */}
            <div className="flex justify-between text-[8px] font-mono text-gray-400 mt-3 px-1 font-semibold">
              <span>DAY 1</span>
              <span>DAY 15</span>
              <span>DAY 30</span>
            </div>
          </motion.div>

          {/* Stacked feature list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="bg-white rounded-2xl border border-[#31b1ba]/10 shadow-sm overflow-hidden divide-y divide-gray-100"
          >
            {/* Row 1 */}
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#31b1ba]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4.5 h-4.5 text-[#31b1ba]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#31b1ba] leading-snug">Human-Grade Protein</p>
                <p className="text-[10px] text-gray-400 leading-snug mt-0.5 truncate">Zero bone meal, zero preservatives</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#FF6B00] bg-[#FFF8E7] px-2 py-0.5 rounded-full border border-[#FFC72C]/30 shrink-0">ORGANIC</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#22828a]/15 flex items-center justify-center shrink-0">
                <Zap className="w-4.5 h-4.5 text-[#22828a]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#31b1ba] leading-snug">100% Grain-Free</p>
                <p className="text-[10px] text-gray-400 leading-snug mt-0.5 truncate">Omega 3-6-9 · Hypoallergenic</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-white bg-[#31b1ba] px-2 py-0.5 rounded-full shrink-0">VITALITY</span>
            </div>

            {/* Row 3 */}
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFF8E7] flex items-center justify-center shrink-0">
                <Truck className="w-4.5 h-4.5 text-[#FF6B00]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#31b1ba] leading-snug">Sub-24h Cold-Chain</p>
                <p className="text-[10px] text-gray-400 leading-snug mt-0.5 truncate">Free shipping · Live tracking</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#FF6B00] shrink-0">● 24/7</span>
            </div>

            {/* Row 4 */}
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#FFF8E7] flex items-center justify-center shrink-0">
                <PhoneCall className="w-4.5 h-4.5 text-[#FF6B00]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#31b1ba] leading-snug">24/7 Vet Hotline</p>
                <p className="text-[10px] text-gray-400 leading-snug mt-0.5 truncate">30-Day Happiness Guarantee</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-white bg-[#FF6B00] px-2 py-0.5 rounded-full shrink-0">FREE</span>
            </div>
          </motion.div>
        </div>

        {/* Desktop: original 12-col bento grid — hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-12 gap-5 items-stretch">

          {/* Card 1: Grand Arch Pod (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-white/95 backdrop-blur-xl rounded-t-[64px] rounded-b-[36px] p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC72C]/15 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase text-[#31b1ba] bg-[#31b1ba]/10 px-3 py-1 rounded-full border border-[#31b1ba]/20 font-bold">VERIFIED ORGANIC</span>
                <span className="text-[11px] font-mono text-[#FF6B00] font-bold tracking-wider">✦ ORGANIC CERTIFIED</span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <ShieldCheck className="w-8 h-8 text-[#31b1ba] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif-display text-2xl text-[#31b1ba] leading-tight">100% Human-Grade Single Protein Standard</h3>
              </div>
              <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-5 pl-10">
                Formulated alongside top European veterinary nutritionists. Zero bone meal, zero chemical preservatives, and zero artificial flavors.
              </p>
            </div>

            {/* Desktop Animated Line Chart — pure CSS */}
            <div className="pt-5 border-t border-[#31b1ba]/10 mt-auto">
              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-[10px] font-mono font-bold text-[#31b1ba] uppercase tracking-widest block">Vitality Score</span>
                  <span className="text-xl font-serif-display text-[#31b1ba] leading-none">+45%</span>
                </div>
                <div className="bg-[#FFFDF5] px-2.5 py-1 rounded-full border border-[#FFC72C]/40 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#FF6B00] font-bold">30-DAY TREND</span>
                </div>
              </div>

              <div className="relative h-24 w-full">
                <svg viewBox="0 0 150 40" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="areaGradientDesktop" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#31b1ba" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#31b1ba" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glowDesktop">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="150" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="0" y1="20" x2="150" y2="20" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="0" y1="0"  x2="150" y2="0"  stroke="#f1f5f9" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Gradient Area Fill */}
                  <path
                    d="M 5 32 L 35 25 L 75 28 L 115 15 L 145 5 L 145 40 L 5 40 Z"
                    fill="url(#areaGradientDesktop)"
                    className="chart-area"
                  />

                  {/* Main Data Line */}
                  <path
                    d="M 5 32 L 35 25 L 75 28 L 115 15 L 145 5"
                    fill="none"
                    stroke="#31b1ba"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="200"
                    className="chart-line"
                  />

                  {/* Regular Nodes */}
                  {[
                    { x: 5,   y: 32, delay: '0.45s' },
                    { x: 35,  y: 25, delay: '0.6s' },
                    { x: 75,  y: 28, delay: '0.75s' },
                    { x: 115, y: 15, delay: '0.9s' },
                  ].map((pt, i) => (
                    <circle
                      key={i}
                      cx={pt.x}
                      cy={pt.y}
                      r="2"
                      fill="white"
                      stroke="#31b1ba"
                      strokeWidth="1.5"
                      className="chart-node"
                      style={{ animationDelay: pt.delay }}
                    />
                  ))}

                  {/* Final Highlighted Node */}
                  <circle
                    cx="145"
                    cy="5"
                    r="3.5"
                    fill="#FFF"
                    stroke="#FF6B00"
                    strokeWidth="2"
                    filter="url(#glowDesktop)"
                    className="chart-node"
                    style={{ animationDelay: '1.1s' }}
                  />
                </svg>
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-between text-[9px] font-mono text-gray-400 mt-2 px-1 font-semibold">
                <span>DAY 1</span>
                <span>DAY 15</span>
                <span>DAY 30</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Speed & Vitality Pod (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="md:col-span-5 bg-gradient-to-br from-[#31b1ba] to-[#22828a] text-white rounded-tr-[90px] rounded-tl-[28px] rounded-b-[36px] p-6 border border-white/10 hover:border-[#FFC72C]/50 transition-all duration-300 flex flex-col justify-between relative group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span className="text-[11px] font-mono text-[#FFC72C] font-bold">SPEED &amp; VITALITY</span>
                </div>
                <span className="text-[10px] font-mono text-amber-200/70">[ HYPOALLERGENIC ]</span>
              </div>
              <div className="my-3">
                <span className="font-serif-display text-5xl text-[#FFC72C] block leading-none tracking-tight">100%</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-100 block mt-2 font-semibold">GRAIN-FREE &amp; HYPOALLERGENIC</span>
              </div>
              <p className="text-xs text-blue-100/80 leading-relaxed">Protects sensitive stomachs and eliminates skin itching with active omega 3-6 fatty acids.</p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#FFC72C] font-mono">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFC72C]" />Lab Tested Batch #2026</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Express Doorstep (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tl-[50px] rounded-br-[50px] rounded-tr-[24px] rounded-bl-[24px] p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#31b1ba] text-[#FFC72C] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs">EXPRESS DOORSTEP</span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <Truck className="w-6 h-6 text-[#31b1ba] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <h3 className="font-serif-display text-xl text-[#31b1ba] leading-tight">Sub-24 Hours Fresh Cold-Chain</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4 pl-9">
                Insulated thermal packaging guarantees kitchen-fresh quality upon arrival. Free shipping on orders over Rp 150.000.
              </p>
            </div>
            <div className="bg-[#FFFDF5] px-3.5 py-2.5 rounded-full border border-[#31b1ba]/10 flex items-center justify-between text-[11px] font-mono shadow-2xs">
              <span className="text-gray-600 font-medium">Live Delivery Tracking</span>
              <span className="text-[#FF6B00] font-bold">● ACTIVE 24/7</span>
            </div>
          </motion.div>

          {/* Card 4: 24/7 Telehealth (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[24px] rounded-br-[24px] p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#FF6B00] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs">FREE TELEHEALTH</span>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <PhoneCall className="w-6 h-6 text-[#31b1ba] shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                <h3 className="font-serif-display text-xl text-[#31b1ba] leading-tight">24/7 Royal Vet Hotline &amp; Consults</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-4 pl-9">
                Direct access to certified veterinary dietitians to customize your pet's meal plan, portion control, and supplement schedule.
              </p>
            </div>
            <div className="bg-[#FFF8E7] px-3.5 py-2.5 rounded-full border border-[#FFC72C]/40 flex items-center justify-between text-[11px] font-mono text-[#31b1ba]">
              <span>30-Day Palate Happiness Guarantee</span>
              <span className="underline font-bold cursor-pointer hover:text-[#FF6B00]">Learn More</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
