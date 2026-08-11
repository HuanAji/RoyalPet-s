import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory?: (category: string) => void;
}

const CATEGORIES = [
  {
    id: 'cats',
    title: 'Cat Essentials',
    count: '140+ Products',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600',
    description: 'Grain-free kibble, salmon pastes, scratching posts & cozy cat beds.',
    lineColor: 'bg-[#FF6B00]',
  },
  {
    id: 'dogs',
    title: 'Dog Nutrition & Toys',
    count: '190+ Products',
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
    description: 'High-protein beef & chicken feeds, dental chews & durable toys.',
    lineColor: 'bg-[#31b1ba]',
  },
  {
    id: 'health',
    title: 'Health & Supplements',
    count: '85+ Products',
    tag: 'Vet Approved',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    description: 'Omega-3 oils, joint health care, probiotics & calming treats.',
    lineColor: 'bg-[#FFC72C]',
  },
  {
    id: 'grooming',
    title: 'Grooming & Spa',
    count: '60+ Products',
    tag: 'New Collection',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600',
    description: 'Hypoallergenic shampoos, deshedding brushes & paw balms.',
    lineColor: 'bg-[#00A3AD]',
  },
  {
    id: 'treats',
    title: 'Organic Care & Treats',
    count: '110+ Products',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=600',
    description: 'Handcrafted organic jerky, catnip toys & royal leather collars.',
    lineColor: 'bg-[#E05E00]',
  },
];

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Default active (front) card is the center card (index 2 out of 5)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 2;

  return (
    <section className="w-full pt-3 pb-4 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 px-1 sm:px-8 md:px-12 bg-[#FFFDF5] text-[#31b1ba] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFF8E7] rounded-full blur-3xl pointer-events-none opacity-80 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E0F2FE] rounded-full blur-3xl pointer-events-none opacity-50 -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-2 sm:mb-6 md:mb-8 gap-1.5 sm:gap-3 max-w-2xl mx-auto px-2"
        >

          <h2 className="font-serif-display text-2xl sm:text-4xl md:text-5xl text-[#31b1ba] tracking-tight leading-tight">
            Explore Royal Categories
          </h2>
          <p className="text-gray-600 text-xs sm:text-base leading-relaxed mt-0.5 sm:mt-1">
            Formulated by animal nutritionists and crafted with 100% natural ingredients for every stage of your pet's life.
          </p>
        </motion.div>

        {/* Responsive Card Fan Container */}
        <div className="w-full flex items-center justify-center overflow-hidden py-1 sm:py-4 px-1">
          <div
            className="flex items-center justify-center min-h-[220px] min-[370px]:min-h-[235px] sm:min-h-[420px] w-full max-w-full"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {CATEGORIES.map((cat, idx) => {
              const isHovered = hoveredIndex === idx;
              const dist = idx - activeIndex; // Distance from active card
              const absDist = Math.abs(dist);

              // Highest z-index for active card (center card by default), decreasing outwards
              const zIndex = 30 - absDist * 5;
              
              // Scale: active card is larger
              const scale = isHovered 
                ? (isMobile ? 1.06 : 1.08) 
                : dist === 0 
                ? (isMobile ? 1.04 : 1.05) 
                : Math.max(0.85, 0.96 - absDist * 0.05);
              
              // Vertical shift
              const translateY = isHovered 
                ? (isMobile ? '-8px' : '-18px') 
                : dist === 0 
                ? (isMobile ? '-4px' : '-8px') 
                : `${absDist * (isMobile ? 2 : 4)}px`;
              
              // Horizontal shift
              let translateX = '0px';

              if (dist < 0) {
                translateX = `${dist * (isMobile ? 2 : 12)}px`;
              } else if (dist > 0) {
                translateX = `${dist * (isMobile ? 4 : 22)}px`;
              }

              return (
                <div
                  key={cat.id}
                  style={{
                    zIndex,
                    transform: `scale(${scale}) translate3d(${translateX}, ${translateY}, 0)`,
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                  className={`group cursor-pointer flex flex-col rounded-xl min-[380px]:rounded-2xl sm:rounded-3xl p-2 min-[380px]:p-2.5 sm:p-5 bg-white border border-gray-200/80 w-[108px] min-[370px]:w-[120px] min-[420px]:w-[135px] sm:w-[240px] md:w-[270px] lg:w-[285px] flex-shrink-0 relative transition-all duration-300 ${
                    idx > 0 ? '-ml-12 min-[370px]:-ml-14 min-[420px]:-ml-16 sm:-ml-20 md:-ml-28 lg:-ml-32' : ''
                  } ${
                    dist === 0
                      ? 'shadow-xl border-[#31b1ba]/50 ring-2 ring-[#FFC72C]'
                      : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-lg min-[380px]:rounded-xl sm:rounded-2xl overflow-hidden mb-1.5 sm:mb-3.5 bg-gray-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-1 left-1 sm:top-2.5 sm:left-2.5 bg-white/95 backdrop-blur-md text-[#31b1ba] text-[7px] min-[370px]:text-[8px] sm:text-xs font-bold px-1.5 py-0.5 rounded-full shadow-2xs border border-white/60 truncate max-w-[85%]">
                      {cat.tag}
                    </span>
                    <span className="absolute bottom-1 right-1 sm:bottom-2.5 sm:right-2.5 bg-[#31b1ba] text-[#FFC72C] p-0.5 min-[380px]:p-1 sm:p-2 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="w-2.5 h-2.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif-display text-[10px] min-[370px]:text-[11px] sm:text-base md:text-lg text-[#31b1ba] group-hover:text-[#FF6B00] transition-colors leading-tight font-bold line-clamp-1">
                        {cat.title}
                      </h3>
                      <p className="text-[8px] min-[370px]:text-[9px] sm:text-xs text-gray-500 font-medium mt-0.5">{cat.count}</p>
                    </div>
                    
                    {/* Color Line Separator */}
                    <div className={`w-full h-0.5 sm:h-1 rounded-full my-1 sm:my-2 ${cat.lineColor} opacity-80 group-hover:opacity-100 transition-opacity`} />

                    <p className="text-[8px] min-[370px]:text-[9px] sm:text-xs text-gray-600 leading-tight line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
