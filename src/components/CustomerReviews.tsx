import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Amanda & Milo',
    petType: 'Golden Retriever (2 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400',
    comment: 'Milo’s coat has never been this shiny! He used to be a picky eater, but he finishes his RoyalPet’s kibble in seconds every single morning.',
  },
  {
    id: 2,
    name: 'Budi & Luna',
    petType: 'British Shorthair (3 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400',
    comment: 'Luna had sensitive stomach issues before switching to the Purrfectly Ginger formula. Now she is active, playful, and healthier than ever!',
  },
  {
    id: 3,
    name: 'Clara & Oliver',
    petType: 'French Bulldog (1 yr)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400',
    comment: 'Super fast delivery and supreme quality. The portion calculator was spot-on for Oliver’s daily diet. Highly recommended for pet parents!',
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FAFDFB] text-[#1a3d1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFFDF0] text-[#1a3d1a] text-xs font-semibold mb-3 border border-[#1a3d1a]/10">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#1a3d1a] tracking-tight">
            Loved by 98,000+ Royal Pets
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            See real stories from pet parents who transformed their companions' daily energy and wellness.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-6 border border-gray-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Pet Photo Header */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 relative bg-gray-100">
                  <img
                    src={rev.petImage}
                    alt={rev.petType}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
                      {rev.petType}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#1a3d1a]/20 mb-2" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#1a3d1a]/20"
                />
                <div>
                  <h4 className="font-semibold text-sm text-[#1a3d1a] flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </h4>
                  <span className="text-xs text-gray-400">Verified Royal Parent</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
