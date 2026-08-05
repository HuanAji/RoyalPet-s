import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Truck, HeartHandshake, Sparkles, Award } from 'lucide-react';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: '100% Organic & Vet Approved',
    description: 'No fillers, artificial preservatives, or mystery meats. Pure human-grade ingredients.',
  },
  {
    icon: Truck,
    title: 'Express Doorstep Delivery',
    description: 'Fast nationwide shipping with real-time tracking and free delivery for orders over Rp 150.000.',
  },
  {
    icon: Sparkles,
    title: 'Tailored Diet Formulas',
    description: 'Recipes calibrated specifically for energy levels, digestive sensitivity, and age milestones.',
  },
  {
    icon: HeartHandshake,
    title: 'Royal Guarantee & Support',
    description: '30-day palate happiness guarantee or full refund, plus 24/7 access to pet care advisors.',
  },
];

export const BrandFeatures: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-8 md:px-12 bg-[#1a3d1a] text-white relative overflow-hidden">
      {/* Decorative ambient background curves */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-3 border border-white/10">
            <Award className="w-3.5 h-3.5" />
            <span>Why Choose RoyalPet's</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            The Royal Standard of Pet Care
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base mt-3 leading-relaxed">
            Crafted with passion, driven by science, and loved by pets across the nation.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="p-3.5 rounded-2xl bg-[#EFFDF0] text-[#1a3d1a] mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-xl text-white mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
