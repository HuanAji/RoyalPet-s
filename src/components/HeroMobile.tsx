import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ArrowRight, Star, Plus } from 'lucide-react';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';
import { CurvedTitle } from './CurvedTitle';

interface HeroMobileProps {
  onSelectProduct: (product: typeof CAT_FOOD_PRODUCT | typeof DOG_FOOD_PRODUCT) => void;
  onExploreProducts: () => void;
}

export const HeroMobile: React.FC<HeroMobileProps> = ({
  onSelectProduct,
  onExploreProducts,
}) => {
  const { scrollY } = useScroll();

  const leftPetScale = useTransform(scrollY, [0, 250], [1.0, 1.70]);
  const leftPetY = useTransform(scrollY, [0, 250], [0, 5]);

  const centerPetScale = useTransform(scrollY, [0, 250], [1.0, 1.90]);
  const centerPetY = useTransform(scrollY, [0, 250], [0, 10]);

  const rightPetScale = useTransform(scrollY, [0, 250], [1.0, 1.75]);
  const rightPetY = useTransform(scrollY, [0, 250], [0, -5]);

  return (
    <div className="flex md:hidden flex-col justify-between relative w-full h-full flex-1 overflow-hidden select-none px-4 pt-4 pb-0">
      {/* Top Header & Title */}
      <div className="flex flex-col items-center text-center z-20 animate-fade-in delay-200 shrink-0 w-full">
        <div className="animate-heartbeat w-full max-w-[340px]">
          <CurvedTitle />
        </div>
        <p className="text-gray-600 text-[11px] mt-1 font-medium max-w-[280px]">
          High quality cat and dog food formulated for optimal pet health
        </p>

        {/* CTA Button */}
        <button
          onClick={onExploreProducts}
          className="mt-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white px-5 py-2 rounded-full font-semibold text-xs flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Two Side-by-Side Product Cards (Cat Food + Dog Food) */}
      <div className="grid grid-cols-2 gap-2.5 z-20 my-2 shrink-0 animate-fade-up delay-600">
        {/* Cat Food Card */}
        <div
          onClick={() => onSelectProduct(CAT_FOOD_PRODUCT)}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-white/80 shadow-xs cursor-pointer flex flex-col justify-between active:scale-[0.98] transition-transform"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white">
            <img
              src={CAT_FOOD_PRODUCT.image}
              alt={CAT_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1"
            />
            <div className="absolute bottom-1 right-1 bg-[#31b1ba] text-[#FFC72C] p-1 rounded-full shadow-xs">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1.5 flex flex-col px-0.5">
            <span className="text-[11px] font-semibold text-gray-800 line-clamp-1 leading-tight">
              {CAT_FOOD_PRODUCT.name}
            </span>
            <span className="text-xs font-bold text-[#31b1ba] mt-0.5">
              {CAT_FOOD_PRODUCT.price}
            </span>
          </div>
        </div>

        {/* Dog Food Card */}
        <div
          onClick={() => onSelectProduct(DOG_FOOD_PRODUCT)}
          className="bg-white/80 backdrop-blur-md rounded-2xl p-2 border border-white/80 shadow-xs cursor-pointer flex flex-col justify-between active:scale-[0.98] transition-transform"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white">
            <img
              src={DOG_FOOD_PRODUCT.image}
              alt={DOG_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1"
            />
            <div className="absolute bottom-1 right-1 bg-[#31b1ba] text-[#FFC72C] p-1 rounded-full shadow-xs">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
          <div className="mt-1.5 flex flex-col px-0.5">
            <span className="text-[11px] font-semibold text-gray-800 line-clamp-1 leading-tight">
              {DOG_FOOD_PRODUCT.name}
            </span>
            <span className="text-xs font-bold text-[#31b1ba] mt-0.5">
              {DOG_FOOD_PRODUCT.price}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="z-20 my-1 shrink-0 flex items-center justify-between bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-2xl border border-white/60 shadow-xs animate-fade-up delay-800">
        {/* Left Stats */}
        <div className="flex items-center gap-2">
          <div className="flex items-center -space-x-1.5">
            <img
              src={ASSETS.avatar}
              alt="User avatar"
              className="w-5 h-5 rounded-full border-2 border-white object-cover"
            />
            <div className="w-5 h-5 rounded-full bg-[#31b1ba] border-2 border-white text-[#FFC72C] flex items-center justify-center font-bold text-[8px]">
              <Plus className="w-2 h-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-[#31b1ba] leading-none">98K+</span>
            <span className="text-[9px] text-gray-600 font-medium">Happy owners</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-5 w-[1px] bg-gray-200" />

        {/* Right Rating */}
        <div className="flex items-center gap-1">
          <span className="text-xs font-bold text-[#31b1ba]">4.6</span>
          <Star className="w-3 h-3 text-[#FFC72C] fill-[#FFC72C]" />
          <span className="text-[9px] font-medium text-gray-600">Rating</span>
        </div>
      </div>

      {/* Bottom 3 Images Flex with Scroll Zoom and Entrance Reveal */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="flex items-end justify-center w-full gap-0 z-10 shrink-0 pointer-events-none mt-auto -mx-4 w-[calc(100%+2rem)] overflow-hidden"
      >
        <div className="flex-1 max-h-[18vh] overflow-hidden">
          <motion.img
            style={{ scale: leftPetScale, y: leftPetY }}
            src={ASSETS.bottomLeftImage}
            alt="Pet with owner"
            className="w-full h-full object-cover object-bottom origin-top"
          />
        </div>
        <div className="flex-[1.265] max-h-[22vh] overflow-hidden">
          <motion.img
            style={{ scale: centerPetScale, y: centerPetY }}
            src={ASSETS.bottomCenterImage}
            alt="Main pet showpiece"
            className="w-full h-full object-cover object-bottom origin-top"
          />
        </div>
        <div className="flex-1 max-h-[18vh] overflow-hidden">
          <motion.img
            style={{ scale: rightPetScale, y: rightPetY }}
            src={ASSETS.bottomRightImage}
            alt="Playful cat"
            className="w-full h-full object-cover object-bottom origin-top"
          />
        </div>
      </motion.div>
    </div>
  );
};
