import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

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
    lineColor: 'bg-[#f76334]',
  },
  {
    id: 'dogs',
    title: 'Dog Nutrition & Toys',
    count: '190+ Products',
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
    description: 'High-protein beef & chicken feeds, dental chews & durable toys.',
    lineColor: 'bg-[#e91e63]',
  },
  {
    id: 'health',
    title: 'Health & Supplements',
    count: '85+ Products',
    tag: 'Vet Approved',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    description: 'Omega-3 oils, joint health care, probiotics & calming treats.',
    lineColor: 'bg-[#eab308]',
  },
  {
    id: 'grooming',
    title: 'Grooming & Spa',
    count: '60+ Products',
    tag: 'New Collection',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600',
    description: 'Hypoallergenic shampoos, deshedding brushes & paw balms.',
    lineColor: 'bg-[#10b981]',
  },
  {
    id: 'treats',
    title: 'Organic Care & Treats',
    count: '110+ Products',
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=600',
    description: 'Handcrafted organic jerky, catnip toys & royal leather collars.',
    lineColor: 'bg-[#3b82f6]',
  },
];

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default active (front) card is the center card (index 2 out of 5)
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 2;

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-white text-[#1a3d1a] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFFDF0] rounded-full blur-3xl pointer-events-none opacity-60 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDF6E2] rounded-full blur-3xl pointer-events-none opacity-60 -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-3 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFFDF0] text-[#1a3d1a] text-xs font-semibold tracking-wide border border-[#1a3d1a]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#1a3d1a]" />
            <span>Curated Collections</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#1a3d1a] tracking-tight leading-tight">
            Explore Royal Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
            Formulated by animal nutritionists and crafted with 100% natural ingredients for every stage of your pet's life.
          </p>
        </motion.div>

        {/* 3D Overlapping Centered Card Stack Container */}
        <div className="w-full overflow-x-auto sm:overflow-visible pb-12 pt-4 px-2">
          <div
            className="flex items-center justify-center min-w-max sm:min-w-0 min-h-[440px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {CATEGORIES.map((cat, idx) => {
              const isHovered = hoveredIndex === idx;
              const dist = idx - activeIndex; // Distance from active card
              const absDist = Math.abs(dist);

              // Highest z-index for active card (center card by default), decreasing outwards
              const zIndex = 30 - absDist * 5;
              
              // Scale: active card is larger
              const scale = isHovered ? 1.08 : dist === 0 ? 1.05 : Math.max(0.88, 1.0 - absDist * 0.05);
              
              // Vertical shift: hovered or center card lifts up slightly
              const translateY = isHovered ? '-18px' : dist === 0 ? '-8px' : `${absDist * 4}px`;
              
              // Horizontal shift: fan out cards cleanly to the left and right without any 3D tilting
              let translateX = '0px';

              if (dist < 0) {
                // Cards to the left of active card
                translateX = `${dist * 15}px`;
              } else if (dist > 0) {
                // Cards to the right of active card shift right to reveal card previews
                translateX = `${dist * 80}px`;
              }

              return (
                <div
                  key={cat.id}
                  style={{
                    zIndex,
                    transform: `scale(${scale}) translate3d(${translateX}, ${translateY}, 0)`,
                    transition: 'all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                  className={`group cursor-pointer flex flex-col rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-white border border-gray-200/80 w-[250px] sm:w-[270px] md:w-[285px] flex-shrink-0 relative transition-all duration-300 ${
                    idx > 0 ? '-ml-20 sm:-ml-24 md:-ml-32' : ''
                  } ${
                    dist === 0
                      ? 'shadow-2xl border-[#1a3d1a]/40 ring-2 ring-[#1a3d1a]/15'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-3.5 bg-gray-100">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[#1a3d1a] text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm border border-white/60">
                      {cat.tag}
                    </span>
                    <span className="absolute bottom-2.5 right-2.5 bg-[#1a3d1a] text-white p-2 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif-display text-base sm:text-lg text-[#1a3d1a] group-hover:text-[#2a5a2a] transition-colors leading-snug">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 font-medium mb-1.5">{cat.count}</p>
                    
                    {/* Color Line Separator */}
                    <div className={`w-full h-1 rounded-full my-2 ${cat.lineColor} opacity-80 group-hover:opacity-100 transition-opacity`} />

                    <p className="text-xs text-gray-600 leading-relaxed mt-auto line-clamp-2">
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
