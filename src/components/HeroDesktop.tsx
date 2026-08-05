import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, Star, Plus } from 'lucide-react';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';
import { CurvedTitle } from './CurvedTitle';

interface HeroDesktopProps {
  onSelectProduct: (product: typeof CAT_FOOD_PRODUCT | typeof DOG_FOOD_PRODUCT) => void;
  onExploreProducts: () => void;
}

export const HeroDesktop: React.FC<HeroDesktopProps> = ({
  onSelectProduct,
  onExploreProducts,
}) => {
  const { scrollY } = useScroll();

  // Parallax scroll for title and floating product cards
  const titleY = useTransform(scrollY, [0, 300], [0, -90]);
  const titleOpacity = useTransform(scrollY, [0, 280], [1, 0.1]);

  const leftCardX = useTransform(scrollY, [0, 300], [0, -70]);
  const leftCardY = useTransform(scrollY, [0, 300], [0, -40]);

  const rightCardX = useTransform(scrollY, [0, 300], [0, 70]);
  const rightCardY = useTransform(scrollY, [0, 300], [0, -40]);

  // High-impact dramatic scroll zoom for the 3 pet hero images
  const leftPetScale = useTransform(scrollY, [0, 450], [1.0, 2.1]);
  const leftPetY = useTransform(scrollY, [0, 450], [0, -80]);

  const centerPetScale = useTransform(scrollY, [0, 450], [1.0, 2.4]);
  const centerPetY = useTransform(scrollY, [0, 450], [0, -120]);

  const rightPetScale = useTransform(scrollY, [0, 450], [1.0, 2.1]);
  const rightPetY = useTransform(scrollY, [0, 450], [0, -80]);

  return (
    <div className="hidden lg:flex flex-col justify-between relative w-full h-full flex-1 overflow-hidden select-none">
      {/* Text layer (z-5) with parallax scroll */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-5 w-full flex flex-col items-center px-12 pt-2 lg:pt-4"
      >
        <div className="animate-heartbeat w-full max-w-4xl">
          <CurvedTitle />
        </div>
      </motion.div>

      {/* Left Product Card with horizontal scroll drift */}
      <motion.div
        style={{ x: leftCardX, y: leftCardY }}
        className="absolute top-[32px] left-6 xl:left-12 z-20 w-[clamp(130px,9vw,170px)] animate-slide-in-left delay-600"
      >
        <div 
          onClick={() => onSelectProduct(CAT_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/75 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={CAT_FOOD_PRODUCT.image}
              alt={CAT_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-1.5 right-1.5 bg-[#1a3d1a] text-white p-1.5 rounded-full hover:bg-[#2a5a2a] transition-all duration-300 shadow-md group-hover:scale-110 flex items-center justify-center"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-xs leading-tight">
              {CAT_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#1a3d1a] font-bold text-xs mt-0.5">
              {CAT_FOOD_PRODUCT.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Product Card with horizontal scroll drift */}
      <motion.div
        style={{ x: rightCardX, y: rightCardY }}
        className="absolute top-[32px] right-6 xl:right-12 z-20 w-[clamp(130px,9vw,170px)] animate-slide-in-right delay-700"
      >
        <div 
          onClick={() => onSelectProduct(DOG_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/75 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={DOG_FOOD_PRODUCT.image}
              alt={DOG_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-1.5 right-1.5 bg-[#1a3d1a] text-white p-1.5 rounded-full hover:bg-[#2a5a2a] transition-all duration-300 shadow-md group-hover:scale-110 flex items-center justify-center"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-xs leading-tight">
              {DOG_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#1a3d1a] font-bold text-xs mt-0.5">
              {DOG_FOOD_PRODUCT.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom 3 Images with high-impact scroll zoom and entrance reveal */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center w-full gap-0 pointer-events-none">
        
        {/* Left Image (Dachshund Dog) */}
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="flex-1 relative flex items-end justify-center"
        >
          <motion.img
            style={{ scale: leftPetScale, y: leftPetY }}
            src={ASSETS.bottomLeftImage}
            alt="Playful Dachshund Dog"
            className="w-full max-h-[min(50vh,420px)] object-contain object-bottom block select-none origin-bottom cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Left Badge */}
          <div className="absolute bottom-3 lg:bottom-5 left-6 lg:left-10 z-20 animate-fade-up delay-1000 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5 transition-transform hover:scale-105">
              <div className="flex items-center -space-x-2">
                <img
                  src={ASSETS.avatar}
                  alt="Customer"
                  className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <div className="w-7 h-7 rounded-full bg-[#1a3d1a] border-2 border-white text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1a3d1a] leading-none">98K+</span>
                <span className="text-[10px] text-gray-600 font-medium mt-0.5">Happy pet owners</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Image (Golden Retriever Dog) */}
        <motion.div
          initial={{ y: 160, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex-[1.265] relative flex items-end justify-center z-10"
        >
          <motion.img
            style={{ scale: centerPetScale, y: centerPetY }}
            src={ASSETS.bottomCenterImage}
            alt="Golden Retriever Showpiece Dog"
            className="w-full max-h-[min(54vh,480px)] object-contain object-bottom block select-none origin-bottom cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Center Button */}
          <div className="absolute bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center gap-2 animate-fade-up delay-1100 pointer-events-auto w-full px-4 max-w-lg">
            <h2 className="font-serif-display text-white text-lg lg:text-xl xl:text-2xl drop-shadow-md text-center leading-tight">
              Best Products for Your Pet
            </h2>
            <button
              onClick={onExploreProducts}
              className="bg-[#E86A10] hover:bg-[#d45e0d] text-white px-5 py-2 rounded-full font-medium text-xs lg:text-sm flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Image (Ginger Cat) */}
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex-1 relative flex items-end justify-center"
        >
          <motion.img
            style={{ scale: rightPetScale, y: rightPetY }}
            src={ASSETS.bottomRightImage}
            alt="Cute Playful Ginger Cat"
            className="w-full max-h-[min(50vh,420px)] object-contain object-bottom block select-none origin-bottom cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Right Badge */}
          <div className="absolute bottom-3 lg:bottom-5 right-6 lg:right-10 z-20 animate-fade-up delay-1200 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2 transition-transform hover:scale-105">
              <span className="text-base font-bold text-[#1a3d1a] leading-none">4.6</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 text-[#E86A10] fill-[#E86A10]" />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Rating</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
