import React from 'react';
import { ArrowUpRight, ArrowRight, Star, Plus } from 'lucide-react';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';

interface HeroTabletProps {
  onSelectProduct: (product: typeof CAT_FOOD_PRODUCT | typeof DOG_FOOD_PRODUCT) => void;
  onExploreProducts: () => void;
}

export const HeroTablet: React.FC<HeroTabletProps> = ({
  onSelectProduct,
  onExploreProducts,
}) => {
  return (
    <div className="hidden md:flex lg:hidden flex-col justify-between relative w-full h-full flex-1 overflow-hidden select-none">
      {/* Text layer (z-5) */}
      <div className="relative z-5 w-full flex flex-col items-center px-6 pt-4">
        <h1 className="font-serif-display text-[#1a3d1a] text-4xl md:text-5xl leading-[1.02] tracking-tight text-center max-w-2xl">
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
      </div>

      {/* Left Product Card: Premium Cat Food */}
      <div className="absolute top-[80px] left-3 z-20 w-[140px] animate-slide-in-left delay-600">
        <div 
          onClick={() => onSelectProduct(CAT_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/75 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-lg transition-all"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={CAT_FOOD_PRODUCT.image}
              alt={CAT_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-1.5 right-1.5 bg-[#1a3d1a] text-white p-1.5 rounded-full shadow-xs flex items-center justify-center"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-xs leading-tight line-clamp-1">
              {CAT_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#1a3d1a] font-extrabold text-xs mt-0.5">
              {CAT_FOOD_PRODUCT.price}
            </p>
          </div>
        </div>
      </div>

      {/* Right Product Card: Nutritious Dog Food */}
      <div className="absolute top-[80px] right-3 z-20 w-[140px] animate-slide-in-right delay-700">
        <div 
          onClick={() => onSelectProduct(DOG_FOOD_PRODUCT)}
          className="group cursor-pointer block bg-white/75 backdrop-blur-md p-2 rounded-2xl border border-white/80 shadow-md hover:shadow-lg transition-all"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative bg-white shadow-inner">
            <img
              src={DOG_FOOD_PRODUCT.image}
              alt={DOG_FOOD_PRODUCT.name}
              className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
            />
            <button
              aria-label="View product"
              className="absolute bottom-1.5 right-1.5 bg-[#1a3d1a] text-white p-1.5 rounded-full shadow-xs flex items-center justify-center"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-1.5 px-0.5">
            <p className="text-gray-800 font-semibold text-xs leading-tight line-clamp-1">
              {DOG_FOOD_PRODUCT.name}
            </p>
            <p className="text-[#1a3d1a] font-extrabold text-xs mt-0.5">
              {DOG_FOOD_PRODUCT.price}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom 3 Images */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-center w-full gap-0 pointer-events-none">
        {/* Left Image */}
        <div className="flex-1 relative flex items-end justify-center animate-photo-reveal delay-800">
          <img
            src={ASSETS.bottomLeftImage}
            alt="Pet with owner"
            className="w-full max-h-[46vh] object-contain object-bottom block select-none"
          />
          {/* Overlay Left */}
          <div className="absolute bottom-3 left-3 z-20 animate-fade-up delay-1000 pointer-events-auto">
            <div className="bg-white/85 backdrop-blur-md px-2.5 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-1.5">
              <div className="flex items-center -space-x-1.5">
                <img
                  src={ASSETS.avatar}
                  alt="Customer"
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
                <div className="w-6 h-6 rounded-full bg-[#1a3d1a] border-2 border-white text-white flex items-center justify-center font-bold text-[10px]">
                  <Plus className="w-2.5 h-2.5" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1a3d1a] leading-none">98K+</span>
                <span className="text-[9px] text-gray-600 font-medium">Happy owners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-[1.265] relative flex items-end justify-center animate-photo-reveal delay-600">
          <img
            src={ASSETS.bottomCenterImage}
            alt="Main pet showpiece"
            className="w-full max-h-[50vh] object-contain object-bottom block select-none"
          />
          {/* Overlay Center */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-center gap-1.5 animate-fade-up delay-1100 pointer-events-auto w-full px-2">
            <h2 className="font-serif-display text-white text-lg drop-shadow-md text-center leading-tight">
              Best Products for Your Pet
            </h2>
            <button
              onClick={onExploreProducts}
              className="bg-[#E86A10] hover:bg-[#d45e0d] text-white px-4 py-1.5 rounded-full font-medium text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative flex items-end justify-center animate-photo-reveal delay-900">
          <img
            src={ASSETS.bottomRightImage}
            alt="Cute cat"
            className="w-full max-h-[46vh] object-contain object-bottom block select-none"
          />
          {/* Overlay Right */}
          <div className="absolute bottom-3 right-3 z-20 animate-fade-up delay-1200 pointer-events-auto">
            <div className="bg-white/85 backdrop-blur-md px-2.5 py-1.5 rounded-xl shadow-md border border-white/50 flex items-center gap-1.5">
              <span className="text-sm font-bold text-[#1a3d1a] leading-none">4.6</span>
              <Star className="w-3 h-3 text-[#E86A10] fill-[#E86A10]" />
              <span className="text-[9px] font-semibold text-gray-700">Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

