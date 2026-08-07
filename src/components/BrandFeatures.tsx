import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, PhoneCall, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const BrandFeatures: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 bg-[#FFFDF5] text-[#31b1ba] relative overflow-hidden select-none border-t border-[#31b1ba]/5">
      {/* Dynamic Animated Soft Light Background Blurs */}
      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [-20, 30, -20],
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#FFC72C]/20 blur-[100px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [30, -30, 30],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 -right-20 w-[450px] h-[450px] bg-[#FF6B00]/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#31b1ba_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-[#31b1ba]/10 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF8E7] text-[#31b1ba] border border-[#FFC72C]/40 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>THE ROYAL BENCHMARK</span>
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl text-[#31b1ba] tracking-tight">
              WHY CHOOSE <span className="text-[#FF6B00] italic font-sans font-black">ROYALPET'S</span>
            </h2>
          </motion.div>

          <p className="text-gray-600 text-xs sm:text-sm max-w-md leading-relaxed">
            Eliminating fillers, grain waste, and mystery meats. Calibrated for maximum energy, coat shine, and longevity.
          </p>
        </div>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          
          {/* Card 1: Grand Arch Pod (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 bg-white/95 backdrop-blur-xl rounded-t-[50px] sm:rounded-t-[64px] rounded-b-[28px] sm:rounded-b-[36px] p-5 sm:p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFC72C]/15 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase text-[#31b1ba] bg-[#31b1ba]/10 px-3 py-1 rounded-full border border-[#31b1ba]/20 font-bold">
                  VERIFIED ORGANIC
                </span>
                <span className="text-[11px] font-mono text-[#FF6B00] font-bold tracking-wider">
                  ✦ ORGANIC CERTIFIED
                </span>
              </div>

              {/* Title with Shield Icon */}
              <div className="flex items-start gap-3 mb-2">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#31b1ba] shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif-display text-xl sm:text-2xl text-[#31b1ba] leading-tight">
                  100% Human-Grade Single Protein Standard
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed mb-5 sm:pl-10">
                Formulated alongside top European veterinary nutritionists. Zero bone meal, zero chemical preservatives, and zero artificial flavors.
              </p>
            </div>

            {/* Organic Capsule Stat Badges */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-gray-100 text-center">
              <div className="bg-[#FFFDF5] py-2.5 px-2 rounded-full border border-[#31b1ba]/10 shadow-2xs">
                <span className="block font-mono text-base sm:text-lg font-black text-[#31b1ba]">99.8%</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono font-semibold">Digestion</span>
              </div>
              <div className="bg-[#FFFDF5] py-2.5 px-2 rounded-full border border-[#31b1ba]/10 shadow-2xs">
                <span className="block font-mono text-base sm:text-lg font-black text-[#FF6B00]">0%</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono font-semibold">Fillers</span>
              </div>
              <div className="bg-[#FFFDF5] py-2.5 px-2 rounded-full border border-[#31b1ba]/10 shadow-2xs">
                <span className="block font-mono text-base sm:text-lg font-black text-[#31b1ba]">#1</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-mono font-semibold">Vet Choice</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Speed & Vitality Pod (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="md:col-span-5 bg-gradient-to-br from-[#31b1ba] to-[#22828a] text-white rounded-tr-[70px] sm:rounded-tr-[90px] rounded-tl-[28px] rounded-b-[36px] p-5 sm:p-6 border border-white/10 hover:border-[#FFC72C]/50 transition-all duration-300 flex flex-col justify-between relative group shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span className="text-[11px] font-mono text-[#FFC72C] font-bold">SPEED & VITALITY</span>
                </div>
                <span className="text-[10px] font-mono text-amber-200/70">[ HYPOALLERGENIC ]</span>
              </div>

              <div className="my-3">
                <span className="font-serif-display text-4xl sm:text-5xl text-[#FFC72C] block leading-none tracking-tight">
                  100%
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-100 block mt-2 font-semibold">
                  GRAIN-FREE & HYPOALLERGENIC
                </span>
              </div>

              <p className="text-xs text-blue-100/80 leading-relaxed">
                Protects sensitive stomachs and eliminates skin itching with active omega 3-6 fatty acids.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#FFC72C] font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC72C]" />
                Lab Tested Batch #2026
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* Card 3: Express Doorstep (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tl-[50px] rounded-br-[50px] rounded-tr-[24px] rounded-bl-[24px] p-5 sm:p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#31b1ba] text-[#FFC72C] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs">
                  EXPRESS DOORSTEP
                </span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <Truck className="w-6 h-6 text-[#31b1ba] shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <h3 className="font-serif-display text-lg sm:text-xl text-[#31b1ba] leading-tight">
                  Sub-24 Hours Fresh Cold-Chain
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-4 sm:pl-9">
                Insulated thermal packaging guarantees kitchen-fresh quality upon arrival at your doorstep. Free shipping on orders over Rp 150.000.
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
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tr-[60px] rounded-bl-[60px] rounded-tl-[24px] rounded-br-[24px] p-5 sm:p-6 border border-[#31b1ba]/10 hover:border-[#31b1ba]/30 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-[#FF6B00] text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-2xs">
                  FREE TELEHEALTH
                </span>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <PhoneCall className="w-6 h-6 text-[#31b1ba] shrink-0 mt-0.5 group-hover:rotate-12 transition-transform" />
                <h3 className="font-serif-display text-lg sm:text-xl text-[#31b1ba] leading-tight">
                  24/7 Royal Vet Hotline & Consults
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-4 sm:pl-9">
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
