import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X, RotateCcw, ShieldCheck, Zap } from 'lucide-react';
import { SignatureAccent } from './SignatureAccent';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  image: string;
  signature: string;
  spec: string;
  highlight: string;
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
    spec: 'OMEGA-3 4,500mg',
    highlight: 'Cold-pressed Extraction',
  },
  {
    id: '2',
    title: 'Peak Athletic Coat & Joints',
    subtitle: 'Enriched with omega 3-6-9 for show-grade shine and active agility.',
    category: 'Champion Results',
    tag: '#02 VET APPROVED',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop',
    signature: 'Agility & Power',
    spec: 'GLUCOSAMINE 850mg',
    highlight: 'Active Recovery Formula',
  },
  {
    id: '3',
    title: 'Ergonomic Velvet Towers',
    subtitle: 'Orthopedic memory foam cat trees and therapeutic dog loungers.',
    category: 'Off Duty • Rest & Play',
    tag: '#03 ROYAL LIFESTYLE',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    signature: 'Deep Comfort Sleep',
    spec: 'MEMORY FOAM 12cm',
    highlight: 'Spine & Joint Support',
  },
  {
    id: '4',
    title: 'Freeze-Dried Chicken Nibbles',
    subtitle: 'Zero preservatives, 100% single ingredient human grade treats.',
    category: 'Daily Treats',
    tag: '#04 RAW NUTRITION',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=800&auto=format&fit=crop',
    signature: 'Picky Eater Favorite',
    spec: '100% SINGLE PROTEIN',
    highlight: 'Vacuum Freeze-Dried',
  },
  {
    id: '5',
    title: 'Sensory Enrichment Toys',
    subtitle: 'Mentally stimulating puzzle feeders and organic catnip pods.',
    category: 'Special Care',
    tag: '#05 MIND & PLAY',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop',
    signature: 'Stress Relief',
    spec: 'BPA-FREE RUBBER',
    highlight: 'IQ Stimulation Module',
  },
];

/* =========================================================
   Lando Norris Style 3D Interactive Tilt & Parallax Card
   ========================================================= */
interface LandoNorrisCardProps {
  item: GalleryItem;
  idx: number;
  onOpenInspect: (item: GalleryItem) => void;
}

const LandoNorrisCard: React.FC<LandoNorrisCardProps> = ({ item, idx, onOpenInspect }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Raw Motion Values for Mouse Position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth Springs for Tilt & Spotlight
  const mouseX = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), { stiffness: 200, damping: 25 });

  const [isHovered, setIsHovered] = useState(false);

  // High-performance Framer Motion template for the glow (no React re-renders)
  const spotX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);
  const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${spotX}% ${spotY}%, rgba(255, 199, 44, 0.25), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = (mouseXPos / width) - 0.5;
    const yPct = (mouseYPos / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className="perspective-1000 py-4 shrink-0"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenInspect(item)}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="w-[290px] sm:w-[360px] bg-[#144d52]/90 rounded-[32px] p-5 sm:p-6 border border-white/20 hover:border-[#FFC72C] transition-colors duration-300 group flex flex-col justify-between relative cursor-pointer shadow-2xl overflow-hidden select-none"
      >
        {/* Lando Norris Neon Glow Reflection Follower */}
        <motion.div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: spotlightBackground,
          }}
        />

        {/* Ambient Top Rim Neon Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC72C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
          {/* Main Photo with 3D Pop Out & Parallax Layering */}
          <div
            className="aspect-[16/11] rounded-2xl overflow-hidden mb-5 relative bg-black/60 shadow-inner group/photo"
            style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                transform: isHovered ? 'scale(1.1) translateZ(10px)' : 'scale(1) translateZ(0px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Tag Badge Floating in 3D */}
            <span
              style={{ transform: 'translateZ(45px)' }}
              className="absolute top-3 left-3 bg-[#FFC72C] text-[#22828a] text-[10px] font-mono font-black px-3 py-1 rounded-full shadow-xl tracking-wider uppercase flex items-center gap-1 border border-white/40"
            >
              <Zap className="w-3 h-3 text-[#FF6B00]" />
              {item.tag}
            </span>

            {/* Inspect / Zoom Button Badge */}
            <span
              style={{ transform: 'translateZ(50px)' }}
              className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold p-2 rounded-full border border-white/20 group-hover:bg-[#FFC72C] group-hover:text-[#22828a] transition-all duration-300"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </span>

            {/* Signature Tag */}
            <span
              style={{ transform: 'translateZ(40px)' }}
              className="absolute bottom-3 right-3 text-xs font-serif-display italic text-[#FFC72C] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20"
            >
              "{item.signature}"
            </span>
          </div>

          {/* Text Info */}
          <div style={{ transform: 'translateZ(20px)' }}>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#FFC72C] uppercase block mb-1">
              {item.category}
            </span>

            <h3 className="font-serif-display text-xl sm:text-2xl text-white group-hover:text-[#FFC72C] transition-colors leading-snug mb-2">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed line-clamp-2">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Footer Specification Tag */}
        <div
          style={{ transform: 'translateZ(25px)' }}
          className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs"
        >
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#FFC72C] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
            {item.spec}
          </span>
          <div className="flex items-center gap-1 text-white group-hover:text-[#FFC72C] font-mono text-xs font-bold transition-colors">
            <span>INSPECT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   Interactive Lando Norris Style 3D Showcase Spotlight Modal
   ========================================================= */
interface InspectModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

const LandoNorrisInspectModal: React.FC<InspectModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Use MotionValues for 60fps performance without React re-renders
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });
  
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  if (!item) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    // Fixed math to maintain current rotation accurately when starting a new drag
    startPos.current = { 
      x: e.clientX - rotateY.get() * 2, 
      y: e.clientY + rotateX.get() * 2 
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    rotateY.set(deltaX * 0.5);
    rotateX.set(-deltaY * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetRotation = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl overflow-y-auto"
      >
        {/* Background Radial Neon Beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFC72C]/15 blur-[160px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-[#13494e] border border-[#FFC72C]/40 rounded-[36px] p-6 sm:p-10 text-white shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-[#FFC72C] hover:text-[#13494e] transition-colors flex items-center justify-center border border-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3D Interactive Portrait Canvas */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
              <div
                className="perspective-1000 w-full max-w-md aspect-[4/3] rounded-3xl cursor-grab active:cursor-grabbing relative select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <motion.div
                  style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="w-full h-full rounded-3xl overflow-hidden border-2 border-[#FFC72C]/60 shadow-2xl relative bg-black/80"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="bg-[#FFC72C] text-[#13494e] font-black px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-[#FFC72C] font-bold bg-black/60 px-3 py-1 rounded-full border border-white/20">
                      3D PERSPECTIVE VIEW
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Controls guide */}
              <div className="flex items-center gap-4 mt-4 text-xs font-mono text-amber-200/80">
                <span>🖱️ Click & Drag image to tilt 3D angle</span>
                <button
                  onClick={resetRotation}
                  className="flex items-center gap-1 text-[#FFC72C] underline cursor-pointer hover:text-white"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset View
                </button>
              </div>
            </div>

            {/* Details Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFC72C]/20 text-[#FFC72C] border border-[#FFC72C]/40 text-xs font-mono font-bold uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span>LANDO NORRIS 3D SPOTLIGHT</span>
                </div>

                <span className="text-xs font-mono text-amber-300 block uppercase font-bold tracking-wider mb-1">
                  {item.category}
                </span>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-white mb-3 leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-blue-100/80 leading-relaxed mb-6">
                  {item.subtitle}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs">
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/10">
                    <span className="text-gray-300">FORMULA SPEC:</span>
                    <span className="text-[#FFC72C] font-bold">{item.spec}</span>
                  </div>
                  <div className="flex items-center justify-between bg-white/5 p-3 rounded-2xl border border-white/10">
                    <span className="text-gray-300">HIGHLIGHT:</span>
                    <span className="text-white font-bold">{item.highlight}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-serif-display italic text-[#FFC72C]">
                  "{item.signature}"
                </span>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#FFC72C] text-[#13494e] font-bold font-mono text-xs hover:bg-white transition-colors cursor-pointer"
                >
                  CLOSE INSPECTOR
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* =========================================================
   Main Horizontal Gallery Component with Lando Norris Overlapping Scroll
   ========================================================= */
export const HorizontalGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [inspectItem, setInspectItem] = useState<GalleryItem | null>(null);

  // Scroll-driven section overlap transform
  // offset: starts when section bottom enters viewport, ends when section top nears viewport top
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start 10%'],
  });

  // To make the overlap very pronounced (like the previous section is pinned),
  // we use a large negative margin (-mt-[480px]) and start the Y transform at 480.
  // This means it starts perfectly adjacent to the previous section, and slides up to -80px,
  // traveling 560px *faster* than the normal scroll speed.
  const sectionY = useTransform(sectionScrollProgress, [0, 1], [480, -80]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollableRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollableRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      ref={containerRef}
      style={{
        y: sectionY,
        willChange: 'transform',
      }}
      className="w-full bg-[#22828a] text-white pt-12 pb-20 sm:pt-18 sm:pb-28 relative overflow-hidden select-none z-20 rounded-none -mt-[480px] border-t border-white/20 shadow-2xl"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFC72C]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#FF6B00]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-6 sm:mb-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="font-serif-display text-4xl sm:text-6xl text-white tracking-tight leading-none">
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

      {/* Horizontal Carousel */}
      <div
        ref={scrollableRef}
        className="relative w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth px-4 sm:px-8 md:px-12 z-10"
      >
        {/* Native scroll only — no conflicting motion x-transform */}
        <div className="flex gap-6 sm:gap-8 pb-8 min-w-max">
          {GALLERY_ITEMS.map((item, idx) => (
            <LandoNorrisCard
              key={item.id}
              item={item}
              idx={idx}
              onOpenInspect={(itemToInspect) => setInspectItem(itemToInspect)}
            />
          ))}
        </div>
      </div>

      {/* 3D Spotlight Inspector Modal */}
      <LandoNorrisInspectModal
        item={inspectItem}
        onClose={() => setInspectItem(null)}
      />
    </motion.section>
  );
};

