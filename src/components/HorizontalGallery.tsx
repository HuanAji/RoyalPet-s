import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { SignatureAccent } from './SignatureAccent';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  image: string;
  signature: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Formula Precision Labs',
    subtitle: 'Cold-pressed salmon oils & grain-free organic protein synthesis.',
    category: 'On Duty • Nutrition',
    tag: '#01 LAB TESTED',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop',
    signature: '100% Pure Salmon',
  },
  {
    id: '2',
    title: 'Peak Athletic Coat & Joints',
    subtitle: 'Enriched with omega 3-6-9 for show-grade shine and active agility.',
    category: 'Champion Results',
    tag: '#02 VET APPROVED',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop',
    signature: 'Agility & Power',
  },
  {
    id: '3',
    title: 'Ergonomic Velvet Towers',
    subtitle: 'Orthopedic memory foam cat trees and therapeutic dog loungers.',
    category: 'Off Duty • Rest & Play',
    tag: '#03 ROYAL LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    signature: 'Deep Comfort Sleep',
  },
  {
    id: '4',
    title: 'Freeze-Dried Chicken Nibbles',
    subtitle: 'Zero preservatives, 100% single ingredient human grade treats.',
    category: 'Daily Treats',
    tag: '#04 RAW NUTRITION',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop',
    signature: 'Picky Eater Favorite',
  },
  {
    id: '5',
    title: 'Sensory Enrichment Toys',
    subtitle: 'Mentally stimulating puzzle feeders and organic catnip pods.',
    category: 'Special Care',
    tag: '#05 MIND & PLAY',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
    signature: 'Stress Relief',
  },
];

export const HorizontalGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  // Trigger scroll-driven transform when the images container reaches viewport center
  const { scrollYProgress } = useScroll({
    target: scrollableRef,
    offset: ['start center', 'end start'],
  });

  // Hold x at 0% from progress 0 to 0.2 so Card #1 is fully visible when images arrive at center
  const xTransform = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], ['0%', '0%', '-55%', '-55%']);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollableRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollableRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#22828a] text-white py-20 sm:py-28 relative overflow-hidden select-none"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFC72C]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/10 text-[#FFC72C] border border-[#FFC72C]/30 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Interactive Gallery</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight">
              ON DUTY <span className="text-[#FFC72C] italic font-sans font-extrabold">&</span> OFF DUTY
            </h2>
          </motion.div>

          {/* Controls & Signature */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 mr-4">
              <button
                onClick={() => handleManualScroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFC72C] hover:text-[#22828a] transition-colors flex items-center justify-center border border-white/20 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleManualScroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFC72C] hover:text-[#22828a] transition-colors flex items-center justify-center border border-white/20 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <SignatureAccent text="Royal Champions" />
          </div>
        </div>
      </div>

      {/* Horizontal Carousel (Scroll-driven + manual scroll fallback) */}
      <div
        ref={scrollableRef}
        className="relative w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth px-4 sm:px-8 md:px-12"
      >
        <motion.div
          style={{ x: xTransform }}
          className="flex gap-6 sm:gap-8 pb-8 min-w-max"
        >
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="w-[290px] sm:w-[380px] bg-white/5 backdrop-blur-xl rounded-3xl p-5 border border-white/10 hover:border-[#FFC72C]/60 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="aspect-[16/11] rounded-2xl overflow-hidden mb-5 relative bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <span className="absolute top-3 left-3 bg-[#FFC72C] text-[#22828a] text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </span>

                  <span className="absolute bottom-3 right-3 text-xs font-serif-display italic text-[#FFC72C] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    "{item.signature}"
                  </span>
                </div>

                <span className="text-[11px] font-mono font-bold tracking-widest text-[#FFC72C] uppercase block mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif-display text-xl sm:text-2xl text-white group-hover:text-[#FFC72C] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-200/80">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC72C]" />
                  Verified Royal Standard
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-[#FFC72C] transition-all" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
