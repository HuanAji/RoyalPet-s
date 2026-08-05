import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, ArrowRight, Instagram, Facebook, Twitter, Shield, Heart } from 'lucide-react';
import { ASSETS } from '../constants';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-[#132d13] text-white pt-16 sm:pt-20 pb-8 px-4 sm:px-8 md:px-12 relative overflow-hidden">
      {/* Newsletter Banner */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a3d1a] rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          {/* Subtle Glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-3 border border-white/10">
              Join the Royal Club
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Get 15% Off Your First Order
            </h3>
            <p className="text-emerald-100/70 text-xs sm:text-sm mt-2 leading-relaxed">
              Subscribe to receive exclusive nutrition tips, new product launches, and secret VIP discounts directly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto min-w-[300px]">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-emerald-200/60" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                />
              </div>
              <button
                type="submit"
                className="bg-[#EFFDF0] hover:bg-white text-[#1a3d1a] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-xs sm:text-sm text-emerald-100/70">
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              className="h-8 w-8 text-emerald-300 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="20" cy="28" rx="8" ry="14" transform="rotate(-26 20 28)" />
              <ellipse cx="40" cy="18" rx="9" ry="15" transform="rotate(-8 40 18)" />
              <ellipse cx="60" cy="18" rx="9" ry="15" transform="rotate(8 60 18)" />
              <ellipse cx="80" cy="28" rx="8" ry="14" transform="rotate(26 80 28)" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 50 38 C 28 38 18 52 18 68 C 18 84 32 92 50 92 C 68 92 82 84 82 68 C 82 52 72 38 50 38 Z
                   M 31 78 C 29 73 31 65 37 60 C 42 55 47 57 48 62 C 49 65 48 70 45 74 C 41 78 36 80 31 78 Z
                   M 69 78 C 64 80 59 78 55 74 C 52 70 51 65 52 62 C 53 57 58 55 63 60 C 69 65 71 73 69 78 Z"
              />
            </svg>
            <span className="font-serif-display text-2xl text-white font-bold tracking-tight">
              RoyalPet's
            </span>
          </div>
          <p className="max-w-sm leading-relaxed text-emerald-100/60">
            Premium, organic pet nutrition formulated by expert veterinary scientists. Delivering healthier, happier lives for your royalty companions.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" aria-label="Instagram" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 1: Shop */}
        <div>
          <h4 className="font-serif-display text-white text-base font-bold mb-4">Explore Shop</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition-colors">Cat Kibble & Wet Food</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dog Formulas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Omega & Supplements</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Organic Treats</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Beds & Accessories</a></li>
          </ul>
        </div>

        {/* Column 2: Care & Advice */}
        <div>
          <h4 className="font-serif-display text-white text-base font-bold mb-4">Pet Care</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition-colors">Calorie Calculator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Vet Nutrition Advice</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Ingredients Glossary</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pet Life Stages</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community Forum</a></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-serif-display text-white text-base font-bold mb-4">RoyalPet's</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-white transition-colors">Our Story & Mission</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability Guarantee</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Delivery & Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/50">
        <p>© {new Date().getFullYear()} RoyalPet's Indonesia. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" /> for healthy pets everywhere.
        </p>
      </div>
    </footer>
  );
};
