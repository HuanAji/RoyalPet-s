import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Award, PhoneCall, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const BrandFeatures: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#F4FBF5] text-[#1a3d1a] relative overflow-hidden select-none border-t border-emerald-900/5">
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
        className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-[#B8FF52]/30 blur-[120px] rounded-full pointer-events-none"
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
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-emerald-200/50 blur-[140px] rounded-full pointer-events-none"
      />

      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1a3d1a_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-[#1a3d1a]/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a3d1a]/10 text-[#1a3d1a] border border-[#1a3d1a]/20 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>THE ROYAL BENCHMARK</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-[#1a3d1a] tracking-tight">
              WHY CHOOSE <span className="text-emerald-700 italic font-sans font-black">ROYALPET'S</span>
            </h2>
          </motion.div>

          <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
            Eliminating fillers, grain waste, and mystery meats. Calibrated for maximum energy, coat shine, and longevity.
          </p>
        </div>

        {/* Organic Non-Boxy Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Organic Shape 1: Grand Arch Pod (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white/95 backdrop-blur-xl rounded-t-[60px] sm:rounded-t-[80px] rounded-b-[36px] sm:rounded-b-[48px] p-8 sm:p-10 border border-emerald-900/10 hover:border-emerald-700/40 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden shadow-xl hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#B8FF52]/30 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase text-[#1a3d1a] bg-[#1a3d1a]/10 px-4 py-1.5 rounded-full border border-[#1a3d1a]/20 font-bold">
                  VERIFIED ORGANIC
                </span>
                <span className="text-xs font-mono text-emerald-800 font-bold tracking-wider">
                  ✦ ORGANIC CERTIFIED
                </span>
              </div>

              {/* Title with Shield Icon */}
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-800 shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-serif-display text-2xl sm:text-4xl text-[#1a3d1a] leading-tight">
                  100% Human-Grade Single Protein Standard
                </h3>
              </div>

              <p className="text-sm text-gray-600 max-w-xl leading-relaxed mb-8 sm:pl-16">
                Formulated alongside top European veterinary nutritionists. Zero bone meal, zero chemical preservatives, and zero artificial flavors.
              </p>
            </div>

            {/* Organic Capsule Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 text-center">
              <div className="bg-[#FAFDFB] py-3.5 px-2 rounded-full border border-emerald-900/10 shadow-xs">
                <span className="block font-mono text-xl sm:text-2xl font-black text-emerald-800">99.8%</span>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono font-semibold">Digestion</span>
              </div>
              <div className="bg-[#FAFDFB] py-3.5 px-2 rounded-full border border-emerald-900/10 shadow-xs">
                <span className="block font-mono text-xl sm:text-2xl font-black text-[#1a3d1a]">0%</span>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono font-semibold">Fillers</span>
              </div>
              <div className="bg-[#FAFDFB] py-3.5 px-2 rounded-full border border-emerald-900/10 shadow-xs">
                <span className="block font-mono text-xl sm:text-2xl font-black text-emerald-800">#1</span>
                <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-mono font-semibold">Vet Choice</span>
              </div>
            </div>
          </motion.div>

          {/* Organic Shape 2: Asymmetric Tear-Drop / Slanted Organic Pod (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-gradient-to-br from-[#1a3d1a] to-[#0d260d] text-white rounded-tr-[90px] sm:rounded-tr-[120px] rounded-tl-[36px] rounded-b-[48px] p-8 sm:p-10 border border-white/10 hover:border-[#B8FF52]/50 transition-all duration-500 flex flex-col justify-between relative group shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <Zap className="w-4 h-4 text-[#B8FF52]" />
                  <span className="text-xs font-mono text-[#B8FF52] font-bold">SPEED & VITALITY</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300/70">[ HYPOALLERGENIC ]</span>
              </div>

              <div className="my-6">
                <span className="font-serif-display text-6xl sm:text-7xl text-[#B8FF52] block leading-none tracking-tight">
                  100%
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-100 block mt-3 font-semibold">
                  GRAIN-FREE & HYPOALLERGENIC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Protects sensitive stomachs and eliminates skin itching with active omega 3-6 fatty acids.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B8FF52] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8FF52]" />
                Lab Tested Batch #2026
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>

          {/* Organic Shape 3: Slanted Bottom Wave Pod (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tl-[70px] rounded-br-[70px] rounded-tr-[30px] rounded-bl-[30px] p-8 border border-emerald-900/10 hover:border-emerald-700/40 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#1a3d1a] text-[#B8FF52] text-[11px] font-mono font-bold px-4 py-1.5 rounded-full shadow-xs">
                  EXPRESS DOORSTEP
                </span>
              </div>

              <div className="flex items-start gap-4 mb-2">
                <Truck className="w-8 h-8 text-emerald-800 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1a3d1a] leading-tight">
                  Sub-24 Hours Fresh Cold-Chain
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:pl-12">
                Insulated thermal packaging guarantees kitchen-fresh quality upon arrival at your doorstep. Free shipping on orders over Rp 150.000.
              </p>
            </div>

            <div className="bg-[#FAFDFB] px-4 py-3 rounded-full border border-emerald-900/10 flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="text-gray-600 font-medium">Live Delivery Tracking</span>
              <span className="text-emerald-800 font-bold">● ACTIVE 24/7</span>
            </div>
          </motion.div>

          {/* Organic Shape 4: Rounded Top-Right Arch Pod (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 bg-white/95 backdrop-blur-xl rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[30px] rounded-br-[30px] p-8 border border-emerald-900/10 hover:border-emerald-700/40 transition-all duration-500 flex flex-col justify-between group shadow-xl hover:shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-emerald-800 text-white text-[11px] font-mono font-bold px-4 py-1.5 rounded-full shadow-xs">
                  FREE TELEHEALTH
                </span>
              </div>

              <div className="flex items-start gap-4 mb-2">
                <PhoneCall className="w-8 h-8 text-emerald-800 shrink-0 mt-1 group-hover:rotate-12 transition-transform" />
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#1a3d1a] leading-tight">
                  24/7 Royal Vet Hotline & Consults
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 sm:pl-12">
                Direct access to certified veterinary dietitians to customize your pet's meal plan, portion control, and supplement schedule.
              </p>
            </div>

            <div className="bg-[#EFFDF0] px-4 py-3 rounded-full border border-emerald-200 flex items-center justify-between text-xs font-mono text-[#1a3d1a]">
              <span>30-Day Palate Happiness Guarantee</span>
              <span className="underline font-bold cursor-pointer hover:text-emerald-700">Learn More</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
