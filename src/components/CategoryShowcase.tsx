import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award } from 'lucide-react';

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
    bg: 'bg-[#E3F6E5]',
  },
  {
    id: 'dogs',
    title: 'Dog Nutrition & Toys',
    count: '190+ Products',
    tag: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
    description: 'High-protein beef & chicken feeds, dental chews & durable toys.',
    bg: 'bg-[#FDF6E2]',
  },
  {
    id: 'health',
    title: 'Health & Supplements',
    count: '85+ Products',
    tag: 'Vet Approved',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    description: 'Omega-3 oils, joint health care, probiotics & calming treats.',
    bg: 'bg-[#E9F3FF]',
  },
  {
    id: 'grooming',
    title: 'Grooming & Spa',
    count: '60+ Products',
    tag: 'New Collection',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=600',
    description: 'Hypoallergenic shampoos, deshedding brushes & paw balms.',
    bg: 'bg-[#FAF0E6]',
  },
];

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
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
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFFDF0] text-[#1a3d1a] text-xs font-semibold tracking-wide mb-3 border border-[#1a3d1a]/10">
              <Sparkles className="w-3.5 h-3.5 text-[#1a3d1a]" />
              <span>Curated Collections</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#1a3d1a] tracking-tight leading-tight">
              Explore Royal Categories
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
            Formulated by animal nutritionists and crafted with 100% natural ingredients for every stage of your pet's life.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col rounded-3xl p-4 sm:p-5 bg-[#FAFDFB] border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#1a3d1a]/20 transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#1a3d1a] text-xs font-bold px-2.5 py-1 rounded-full shadow-sm border border-white/60">
                  {cat.tag}
                </span>
                <span className="absolute bottom-3 right-3 bg-[#1a3d1a] text-white p-2 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif-display text-xl text-[#1a3d1a] group-hover:text-[#2a5a2a] transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 font-medium mb-2">{cat.count}</p>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-auto">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
