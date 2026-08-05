import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ShoppingBag, Heart, ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { ProductType } from './Modals';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';

interface FeaturedProductsProps {
  onSelectProduct: (product: ProductType) => void;
  onAddToCart: (product: ProductType) => void;
}

const PRODUCTS_DATA: ProductType[] = [
  {
    id: 'premium-cat-food',
    name: 'Purrfectly Ginger Cat Food',
    price: 'Rp. 49.998',
    numericPrice: 49998,
    image: ASSETS.catFoodImage,
    rating: 4.9,
    reviewsCount: 420,
    description: 'Balanced salmon & sweet potato formula packed with vitamins, taurine, and high protein for healthy cats.',
  },
  {
    id: 'nutritious-dog-food',
    name: 'Pawprint Advanced Dog Food',
    price: 'Rp. 69.998',
    numericPrice: 69998,
    image: ASSETS.dogFoodImage,
    rating: 4.8,
    reviewsCount: 380,
    description: 'Teal recipe adult kibble enriched with real chicken, brown rice, and essential minerals for high energy.',
  },
  {
    id: 'royal-salmon-oil',
    name: 'Wild Alaskan Salmon Oil',
    price: 'Rp. 85.000',
    numericPrice: 85000,
    image: 'https://images.unsplash.com/photo-1608248597260-6521e1f822e1?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviewsCount: 156,
    description: 'Pure cold-pressed omega 3-6-9 supplement for shiny coat, healthy skin, and joint support.',
  },
  {
    id: 'organic-cat-treats',
    name: 'Freeze-Dried Chicken Nibbles',
    price: 'Rp. 35.000',
    numericPrice: 35000,
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 210,
    description: '100% single ingredient raw chicken bites without preservatives or grain fillers.',
  },
  {
    id: 'dental-chews-dog',
    name: 'Mint Fresh Dental Chews',
    price: 'Rp. 55.000',
    numericPrice: 55000,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewsCount: 188,
    description: 'Cleans teeth, reduces tartar build-up, and freshens breath naturally.',
  },
  {
    id: 'royal-cat-tree',
    name: 'Velvet Ergonomic Cat Tower',
    price: 'Rp. 289.000',
    numericPrice: 289000,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 94,
    description: 'Multi-level plush scratching tree with hanging sisal rope and soft resting hammock.',
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

  const handleAddClick = (e: React.MouseEvent, product: ProductType) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#EFFDF0]/50 text-[#1a3d1a] relative">
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
              <Sparkles className="w-3.5 h-3.5" />
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
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  activeTab === tab
                    ? 'bg-[#1a3d1a] text-white shadow-md scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => onSelectProduct(product)}
                className="group cursor-pointer bg-white rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl border border-white/60 hover:border-[#1a3d1a]/30 transition-all duration-300 flex flex-col relative"
              >
                {/* Image Container */}
                <div className="aspect-square rounded-2xl bg-[#FAFDFB] relative overflow-hidden mb-4 p-4 flex items-center justify-center border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#1a3d1a] shadow-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
                  </div>

                  <button
                    onClick={(e) => handleAddClick(e, product)}
                    aria-label="Add to Cart"
                    className={`absolute bottom-3 right-3 p-3 rounded-full transition-all duration-300 shadow-md ${
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
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif-display text-lg text-[#1a3d1a] group-hover:text-[#2a5a2a] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Price</span>
                      <span className="text-lg font-bold text-[#1a3d1a]">{product.price}</span>
                    </div>

                    <span className="text-xs font-semibold text-[#1a3d1a] group-hover:underline flex items-center gap-0.5">
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
