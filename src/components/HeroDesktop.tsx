import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, Star, Plus } from 'lucide-react';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';

interface HeroDesktopProps {
  onSelectProduct: (product: typeof CAT_FOOD_PRODUCT | typeof DOG_FOOD_PRODUCT) => void;
  onExploreProducts: () => void;
}

export const HeroDesktop: React.FC<HeroDesktopProps> = ({
  onSelectProduct,
  onExploreProducts,
}) => {
  const { scrollY } = useScroll();

  // Scroll parallax transformations (Lando Norris style smooth parallax depth)
  const titleY = useTransform(scrollY, [0, 400], [0, -60]);
  const titleOpacity = useTransform(scrollY, [0, 350], [1, 0.2]);
  
  const leftCardX = useTransform(scrollY, [0, 400], [0, -40]);
  const leftCardY = useTransform(scrollY, [0, 400], [0, -20]);

  const rightCardX = useTransform(scrollY, [0, 400], [0, 40]);
  const rightCardY = useTransform(scrollY, [0, 400], [0, -20]);

  const petsScale = useTransform(scrollY, [0, 400], [1, 1.05]);
  const petsY = useTransform(scrollY, [0, 400], [0, 15]);

  return (
    <div className="hidden lg:flex flex-col justify-between relative w-full h-full flex-1 overflow-hidden select-none">
      {/* Text layer (z-5) with parallax scroll */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-5 w-full flex flex-col items-center px-12 pt-6 lg:pt-10"
      >
        <h1 className="font-serif-display text-[#1a3d1a] text-[clamp(38px,4.6vw,72px)] leading-[1.0] tracking-tight text-center max-w-4xl">
          <div className="block">
            <span className="inline-block animate-word-pop delay-200 mr-[0.25em]">Premium</span>
            <span className="inline-block animate-word-pop delay-300">Nutrition for</span>
          </div>
          <div className="block mt-1">
            <span className="inline-block animate-word-pop delay-400 mr-[0.25em]">Healthier,</span>
            <span className="inline-block animate-word-pop delay-500 mr-[0.25em]">Happier</span>
            <span className="inline-block animate-word-pop delay-600">Pets</span>
          </div>
        </h1>
      </motion.div>

      {/* Left Product Card with horizontal scroll drift */}
      <motion.div
        style={{ x: leftCardX, y: leftCardY }}
        className="absolute top-[32px] left-6 xl:left-12 z-20 w-[clamp(130px,9vw,170px)] animate-slide-in-left delay-600"
      >
        <div 
          onClick={() => onSelectProduct(CAT_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/70 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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
          className="group cursor-pointer block bg-white/70 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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

      {/* Bottom 3 Images with scale parallax */}
      <motion.div
        style={{ scale: petsScale, y: petsY }}
        className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center w-full gap-0 pointer-events-none origin-bottom"
      >
        {/* Left Image */}
        <div className="flex-1 relative flex items-end justify-center animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomLeftImage}
            alt="Pet with owner"
            className="w-full max-h-[min(50vh,420px)] object-contain object-bottom block select-none"
          />
          {/* Overlay Left */}
          <div className="absolute bottom-3 lg:bottom-5 left-6 lg:left-10 z-20 animate-fade-up delay-1000 pointer-events-auto">
            <div className="bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2.5 transition-transform hover:scale-105">
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
        </div>

        {/* Center Image */}
        <div className="flex-[1.265] relative flex items-end justify-center animate-photo-reveal delay-600">
          <img
            src={ASSETS.bottomCenterImage}
            alt="Main pet showpiece"
            className="w-full max-h-[min(54vh,480px)] object-contain object-bottom block select-none"
          />
          {/* Overlay Center */}
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
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex items-end justify-center animate-photo-reveal delay-900">
          <img
            src={ASSETS.bottomRightImage}
            alt="Cute playful cat"
            className="w-full max-h-[min(50vh,420px)] object-contain object-bottom block select-none"
          />
          {/* Overlay Right */}
          <div className="absolute bottom-3 lg:bottom-5 right-6 lg:right-10 z-20 animate-fade-up delay-1200 pointer-events-auto">
            <div className="bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-white/50 flex items-center gap-2 transition-transform hover:scale-105">
              <span className="text-base font-bold text-[#1a3d1a] leading-none">4.6</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-3.5 h-3.5 text-[#E86A10] fill-[#E86A10]" />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Rating</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


