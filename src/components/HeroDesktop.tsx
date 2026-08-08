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

  // Zoom with higher vertical placement (reduced/negative Y shift) so pet faces & cat eyes are positioned higher up
  const leftPetScale = useTransform(scrollY, [0, 450], [1.0, 1.95]);
  const leftPetY = useTransform(scrollY, [0, 450], [0, 10]);

  const centerPetScale = useTransform(scrollY, [0, 450], [1.0, 2.2]);
  const centerPetY = useTransform(scrollY, [0, 450], [0, 20]);

  const rightPetScale = useTransform(scrollY, [0, 450], [1.0, 2.05]);
  const rightPetY = useTransform(scrollY, [0, 450], [0, -15]);

  return (
    <div className="flex flex-col justify-between relative w-full h-full flex-1 overflow-hidden select-none">
      {/* Text layer (z-5) with parallax scroll */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-5 w-full flex flex-col items-center px-2 sm:px-12 pt-1 sm:pt-2 lg:pt-4"
      >
        <div className="animate-heartbeat w-[75%] min-[380px]:w-[80%] sm:w-full max-w-4xl">
          <CurvedTitle />
        </div>
      </motion.div>

      {/* Left Product Card with horizontal scroll drift */}
      <motion.div
        style={{ x: leftCardX, y: leftCardY }}
        className="absolute top-[4px] min-[380px]:top-[8px] sm:top-[20px] lg:top-[32px] left-1 sm:left-6 xl:left-12 z-20 w-[64px] min-[380px]:w-[74px] min-[440px]:w-[88px] sm:w-[120px] lg:w-[clamp(130px,9vw,170px)] animate-slide-in-left delay-600"
      >
        <div 
          onClick={() => onSelectProduct(CAT_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/80 backdrop-blur-md p-1 sm:p-2 rounded-lg sm:rounded-2xl border border-white/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="aspect-square rounded-md sm:rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={CAT_FOOD_PRODUCT.image}
              alt={CAT_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-0.5 sm:p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-0.5 right-0.5 sm:bottom-1.5 sm:right-1.5 bg-[#31b1ba] text-white p-0.5 sm:p-1.5 rounded-full hover:bg-[#22828a] transition-all duration-300 shadow-md group-hover:scale-110 flex items-center justify-center"
            >
              <ArrowUpRight className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#FFC72C]" />
            </button>
          </div>
          <div className="mt-0.5 sm:mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-[7px] min-[380px]:text-[8px] sm:text-xs leading-tight line-clamp-1">
              {CAT_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#31b1ba] font-bold text-[7px] min-[380px]:text-[8px] sm:text-xs mt-0.5">
              {CAT_FOOD_PRODUCT.price}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Right Product Card with horizontal scroll drift */}
      <motion.div
        style={{ x: rightCardX, y: rightCardY }}
        className="absolute top-[4px] min-[380px]:top-[8px] sm:top-[20px] lg:top-[32px] right-1 sm:right-6 xl:right-12 z-20 w-[64px] min-[380px]:w-[74px] min-[440px]:w-[88px] sm:w-[120px] lg:w-[clamp(130px,9vw,170px)] animate-slide-in-right delay-700"
      >
        <div 
          onClick={() => onSelectProduct(DOG_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/80 backdrop-blur-md p-1 sm:p-2 rounded-lg sm:rounded-2xl border border-white/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="aspect-square rounded-md sm:rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={DOG_FOOD_PRODUCT.image}
              alt={DOG_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-0.5 sm:p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-0.5 right-0.5 sm:bottom-1.5 sm:right-1.5 bg-[#31b1ba] text-white p-0.5 sm:p-1.5 rounded-full hover:bg-[#22828a] transition-all duration-300 shadow-md group-hover:scale-110 flex items-center justify-center"
            >
              <ArrowUpRight className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#FFC72C]" />
            </button>
          </div>
          <div className="mt-0.5 sm:mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-[7px] min-[380px]:text-[8px] sm:text-xs leading-tight line-clamp-1">
              {DOG_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#31b1ba] font-bold text-[7px] min-[380px]:text-[8px] sm:text-xs mt-0.5">
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
            className="w-full max-h-[190px] min-[380px]:max-h-[220px] sm:max-h-[min(50vh,420px)] object-contain object-bottom block select-none origin-top cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Left Badge */}
          <div className="absolute bottom-1 sm:bottom-3 lg:bottom-5 left-1 sm:left-6 lg:left-10 z-20 animate-fade-up delay-1000 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md px-1 min-[380px]:px-1.5 sm:px-3.5 py-0.5 sm:py-2 rounded-md sm:rounded-2xl shadow-md border border-white/50 flex items-center gap-1 sm:gap-2.5 transition-transform hover:scale-105">
              <div className="flex items-center -space-x-1 sm:-space-x-2">
                <img
                  src={ASSETS.avatar}
                  alt="Customer"
                  className="w-3.5 h-3.5 sm:w-7 sm:h-7 rounded-full border-2 border-white object-cover shadow-xs"
                />
                <div className="w-3.5 h-3.5 sm:w-7 sm:h-7 rounded-full bg-[#31b1ba] border-2 border-white text-[#FFC72C] flex items-center justify-center font-bold text-[7px] sm:text-xs shadow-xs">
                  <Plus className="w-2 h-2 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] sm:text-xs font-bold text-[#31b1ba] leading-none">98K+</span>
                <span className="text-[6px] sm:text-[10px] text-gray-600 font-medium mt-0.5 whitespace-nowrap">Happy pet owners</span>
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
            className="w-full max-h-[220px] min-[380px]:max-h-[250px] sm:max-h-[min(54vh,480px)] object-contain object-bottom block select-none origin-top cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Center Button */}
          <div className="absolute bottom-1 sm:bottom-3 lg:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center gap-0.5 sm:gap-2 animate-fade-up delay-1100 pointer-events-auto w-full px-0.5 sm:px-4 max-w-lg">
            <h2 className="font-serif-display text-white text-[8px] min-[360px]:text-[10px] min-[420px]:text-xs sm:text-lg lg:text-xl xl:text-2xl drop-shadow-md text-center leading-tight whitespace-nowrap">
              Best Products for Your Pet
            </h2>
            <button
              onClick={onExploreProducts}
              className="bg-[#FF6B00] hover:bg-[#e05e00] text-white px-2 sm:px-5 py-0.5 sm:py-2 rounded-full font-semibold text-[7px] min-[380px]:text-[8px] sm:text-xs lg:text-sm flex items-center gap-0.5 sm:gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-2 h-2 sm:w-3.5 sm:h-3.5" />
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
            className="w-full max-h-[190px] min-[380px]:max-h-[220px] sm:max-h-[min(50vh,420px)] object-contain object-bottom block select-none origin-top cursor-pointer pointer-events-auto transition-filter duration-300 hover:brightness-105"
          />
          {/* Overlay Right Badge */}
          <div className="absolute bottom-1 sm:bottom-3 lg:bottom-5 right-1 sm:right-6 lg:right-10 z-20 animate-fade-up delay-1200 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md px-1 min-[380px]:px-1.5 sm:px-3.5 py-0.5 sm:py-2 rounded-md sm:rounded-2xl shadow-md border border-white/50 flex items-center gap-0.5 sm:gap-2 transition-transform hover:scale-105">
              <span className="text-[8px] sm:text-base font-bold text-[#31b1ba] leading-none">4.6</span>
              <div className="flex items-center gap-0.5">
                <Star className="w-2 h-2 sm:w-3.5 sm:h-3.5 text-[#FFC72C] fill-[#FFC72C]" />
              </div>
              <span className="text-[7px] sm:text-[11px] font-semibold text-gray-700 hidden min-[380px]:inline">Rating</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
