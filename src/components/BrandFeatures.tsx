import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, Sparkles, Award, PhoneCall, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SignatureAccent } from './SignatureAccent';

export const BrandFeatures: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-8 md:px-12 bg-[#081708] text-white relative overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B8FF52]/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-white/10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8FF52]/10 text-[#B8FF52] border border-[#B8FF52]/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>THE ROYAL BENCHMARK</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              WHY CHOOSE <span className="text-[#B8FF52] italic font-sans font-black">ROYALPET'S</span>
            </h2>
          </motion.div>

          <p className="text-emerald-200/70 text-sm sm:text-base max-w-md leading-relaxed">
            Eliminating fillers, grain waste, and mystery meats. Calibrated for maximum energy, coat shine, and longevity.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Main Highlight (Large - Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#B8FF52]/50 transition-all duration-500 group flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#B8FF52] text-[#081708] flex items-center justify-center font-bold shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs uppercase text-[#B8FF52] bg-[#B8FF52]/10 px-3 py-1 rounded-full border border-[#B8FF52]/30">
                  VERIFIED ORGANIC
                </span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-4xl text-white mb-3 leading-snug">
                100% Human-Grade <br className="hidden sm:block" /> Single Protein Standard
              </h3>

              <p className="text-sm text-emerald-100/70 max-w-xl leading-relaxed mb-8">
                Formulated alongside top European veterinary nutritionists. Zero bone meal, zero chemical preservatives, and zero artificial flavors.
              </p>
            </div>

            {/* Stat Row inside Card 1 */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 text-center">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <span className="block font-mono text-xl sm:text-2xl font-black text-[#B8FF52]">99.8%</span>
                <span className="text-[10px] sm:text-xs text-emerald-200/60 uppercase font-mono">Digestion Score</span>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <span className="block font-mono text-xl sm:text-2xl font-black text-white">0%</span>
                <span className="text-[10px] sm:text-xs text-emerald-200/60 uppercase font-mono">Fillers / Corn</span>
              </div>
              <div className="bg-white/5 p-3 rounded-2xl border border-white/5">
                <span className="block font-mono text-xl sm:text-2xl font-black text-[#B8FF52]">#1</span>
                <span className="text-[10px] sm:text-xs text-emerald-200/60 uppercase font-mono">Vet Recommended</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: 100% Raw Protein Stat (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 bg-gradient-to-br from-[#122e12] to-[#0a1c0a] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#B8FF52]/50 transition-all duration-500 flex flex-col justify-between relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#B8FF52] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-emerald-300/60">[ SPEED & VITALITY ]</span>
              </div>

              <div className="my-4">
                <span className="font-serif-display text-5xl sm:text-6xl text-[#B8FF52] block leading-none">
                  100%
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-200 block mt-2">
                  GRAIN-FREE & HYPOALLERGENIC
                </span>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                Protects sensitive stomachs and eliminates skin itching with active omega 3-6 fatty acids.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#B8FF52] font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8FF52]" />
                Lab Tested Batch #2026
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Bento Card 3: Express Cold-Chain Delivery (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#B8FF52]/50 transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-[#B8FF52] flex items-center justify-center border border-emerald-500/30">
                <Truck className="w-6 h-6" />
              </div>
              <span className="bg-emerald-950/80 text-[#B8FF52] text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                EXPRESS DOORSTEP
              </span>
            </div>

            <div>
              <h3 className="font-serif-display text-2xl text-white mb-2">
                Sub-24 Hours Fresh Cold-Chain
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed mb-4">
                Insulated thermal packaging guarantees kitchen-fresh quality upon arrival at your doorstep. Free shipping on orders over Rp 150.000.
              </p>
            </div>

            <div className="bg-black/30 p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-200">Live Delivery Tracking</span>
              <span className="text-[#B8FF52] font-bold">● ACTIVE 24/7</span>
            </div>
          </motion.div>

          {/* Bento Card 4: 24/7 Royal Vet Telehealth (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 bg-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#B8FF52]/50 transition-all duration-500 flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#B8FF52]/20 text-[#B8FF52] flex items-center justify-center border border-[#B8FF52]/30">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="bg-[#B8FF52] text-[#081708] text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-lg">
                FREE TELEHEALTH
              </span>
            </div>

            <div>
              <h3 className="font-serif-display text-2xl text-white mb-2">
                24/7 Royal Vet Hotline & Consults
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed mb-4">
                Direct access to certified veterinary dietitians to customize your pet's meal plan, portion control, and supplement schedule.
              </p>
            </div>

            <div className="bg-[#B8FF52]/10 p-3 rounded-2xl border border-[#B8FF52]/20 flex items-center justify-between text-xs font-mono text-[#B8FF52]">
              <span>30-Day Palate Happiness Guarantee</span>
              <span className="underline cursor-pointer hover:text-white">Learn More</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
