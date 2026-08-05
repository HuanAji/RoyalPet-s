import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingBag, ArrowUpRight, Sparkles, Check, Eye } from 'lucide-react';
import { ProductType } from './Modals';

interface FeaturedProductsProps {
  onSelectProduct: (product: ProductType) => void;
  onAddToCart: (product: ProductType) => void;
}

interface ProductItem {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  hoverImage: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  description: string;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'premium-cat-food',
    name: 'Purrfectly Ginger Cat Formula',
    price: 'Rp. 49.998',
    numericPrice: 49998,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 420,
    badge: 'BEST SELLER',
    description: 'Balanced salmon & sweet potato formula packed with vitamins, taurine, and high protein for healthy cats.',
  },
  {
    id: 'nutritious-dog-food',
    name: 'Pawprint Advanced Dog Kibble',
    price: 'Rp. 69.998',
    numericPrice: 69998,
    image: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    reviewsCount: 380,
    badge: 'TOP RATED',
    description: 'Enriched with real roasted chicken, brown rice, and essential minerals for active dogs.',
  },
  {
    id: 'royal-salmon-oil',
    name: 'Wild Alaskan Salmon Elixir',
    price: 'Rp. 85.000',
    numericPrice: 85000,
    image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    rating: 5.0,
    reviewsCount: 156,
    badge: 'VET CHOICE',
    description: 'Pure cold-pressed omega 3-6-9 supplement for silky coat, skin immunity, and joint longevity.',
  },
  {
    id: 'organic-cat-treats',
    name: 'Freeze-Dried Chicken Nibbles',
    price: 'Rp. 35.000',
    numericPrice: 35000,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 210,
    badge: '100% ORGANIC',
    description: 'Single-ingredient raw chicken bites without artificial grain fillers or chemical dyes.',
  },
  {
    id: 'dental-chews-dog',
    name: 'Mint Fresh Dental Treats',
    price: 'Rp. 55.000',
    numericPrice: 55000,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
    reviewsCount: 188,
    badge: 'FRESH BREATH',
    description: 'Cleans plaque, reduces tartar build-up, and keeps breath clean with natural spearmint.',
  },
  {
    id: 'royal-cat-tree',
    name: 'Velvet Ergonomic Cat Tower',
    price: 'Rp. 289.000',
    numericPrice: 289000,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=800',
    hoverImage: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    reviewsCount: 94,
    badge: 'ROYAL SPA',
    description: 'Multi-level plush scratching tower with natural sisal rope and memory foam lounging hammock.',
  },
];

const TABS = ['All Products', 'Cat Nutrition', 'Dog Kibble', 'Supplements'];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeTab, setActiveTab] = useState('All Products');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    if (activeTab === 'Cat Nutrition') return p.id.includes('cat');
    if (activeTab === 'Dog Kibble') return p.id.includes('dog');
    if (activeTab === 'Supplements') return p.id.includes('oil') || p.id.includes('chew');
    return true;
  });

  const handleAddClick = (e: React.MouseEvent, product: ProductItem) => {
    e.stopPropagation();
    onAddToCart(product as unknown as ProductType);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#EFFDF0]/50 text-[#1a3d1a] relative select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a3d1a]/10 text-[#1a3d1a] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Recommended Selection</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#1a3d1a] tracking-tight">
              Best Sellers for Royal Pets
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#1a3d1a] text-[#B8FF52] shadow-md scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Cards Grid with Equal 1:1 Aspect Ratio Images */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onSelectProduct(product as unknown as ProductType)}
                className="group cursor-pointer bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-2xl border border-white/60 hover:border-[#1a3d1a]/30 transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* 1:1 Square Image Container with Smooth Crossfade */}
                <div className="w-full aspect-square rounded-2xl bg-[#F0FAF2] relative overflow-hidden mb-4 border border-emerald-900/10">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0 absolute inset-0"
                  />

                  {/* Hover Secondary Image */}
                  <img
                    src={product.hoverImage}
                    alt={`${product.name} in action`}
                    className="w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute inset-0"
                  />

                  {/* Top Left Rating Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1a3d1a] shadow-md">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
                  </div>

                  {/* Top Right Special Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 z-10 bg-[#1a3d1a] text-[#B8FF52] text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Floating Button */}
                  <div className="absolute inset-0 z-10 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="bg-white/95 backdrop-blur-md text-[#1a3d1a] font-bold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={(e) => handleAddClick(e, product)}
                    aria-label="Add to Cart"
                    className={`absolute bottom-3 right-3 z-20 p-3 rounded-full transition-all duration-300 shadow-lg ${
                      addedIds[product.id]
                        ? 'bg-emerald-600 text-white scale-110'
                        : 'bg-[#1a3d1a] text-white hover:bg-[#2a5a2a] group-hover:scale-105'
                    }`}
                  >
                    {addedIds[product.id] ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ShoppingBag className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between z-10">
                  <div>
                    <h3 className="font-serif-display text-lg text-[#1a3d1a] group-hover:text-[#2a5a2a] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1.5 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 block">
                        Price
                      </span>
                      <span className="text-lg font-bold text-[#1a3d1a]">{product.price}</span>
                    </div>

                    <span className="text-xs font-bold text-[#1a3d1a] group-hover:text-emerald-700 flex items-center gap-0.5">
                      View Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
