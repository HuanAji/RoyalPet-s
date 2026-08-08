import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, Heart, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: 'Amanda & Milo',
    petType: 'Golden Retriever (2 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600',
    comment: 'Milo’s coat has never been this shiny! He used to be a picky eater, but he finishes his RoyalPet’s kibble in seconds every single morning.',
  },
  {
    id: 2,
    name: 'Budi & Luna',
    petType: 'British Shorthair (3 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600',
    comment: 'Luna had sensitive stomach issues before switching to the Purrfectly Ginger formula. Now she is active, playful, and healthier than ever!',
  },
  {
    id: 3,
    name: 'Clara & Oliver',
    petType: 'French Bulldog (1 yr)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=600',
    comment: 'Super fast delivery and supreme quality. The portion calculator was spot-on for Oliver’s daily diet. Highly recommended for pet parents!',
  },
  {
    id: 4,
    name: 'Daniel & Bella',
    petType: 'Maine Coon (4 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&q=80&w=600',
    comment: 'The freeze-dried chicken nibbles are Bella’s absolute favorite reward. Pure raw quality without artificial additives.',
  },
  {
    id: 5,
    name: 'Elena & Rocky',
    petType: 'Siberian Husky (2 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=600',
    comment: 'Added the Wild Alaskan Salmon Elixir to Rocky’s daily bowl. High agility, zero dry skin, and incredible coat luster!',
  },
  {
    id: 6,
    name: 'Fikri & Mochi',
    petType: 'Scottish Fold (1.5 yrs)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    petImage: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=600',
    comment: 'Mochi loved the Velvet Cat Tower immediately! Very sturdy build quality and super fast shipping.',
  },
];

// Tripled list for infinite looping marquee
const TRIPLED_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS];

export const CustomerReviews: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Set initial scroll position to middle set
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const setWidth = container.scrollWidth / 3;
      container.scrollLeft = setWidth;
    }
  }, []);

  // Continuous infinite marquee scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animId: number;

    const step = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += 1.5;
      }

      const singleSetWidth = container.scrollWidth / 3;
      if (singleSetWidth > 0) {
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 5) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-[#FFFDF5] text-[#31b1ba] relative overflow-hidden select-none border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E7] text-[#31b1ba] text-xs font-semibold mb-3 border border-[#FFC72C]/40">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
              <span>Community Stories</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl text-[#31b1ba] tracking-tight">
              Loved by 98,000+ Royal Pets
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
              Real stories from pet parents who transformed their companions' daily energy, appetite, and coat shine.
            </p>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3.5 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold flex items-center gap-2 shadow-xs hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
              <span>{isPaused ? 'Resume Auto-Scroll' : 'Pause'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleManualScroll('left')}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#31b1ba] hover:bg-[#31b1ba] hover:text-[#FFC72C] transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleManualScroll('right')}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#31b1ba] hover:bg-[#31b1ba] hover:text-[#FFC72C] transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Continuous Horizontal Scrolling Marquee */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth px-4 sm:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 sm:gap-8 pb-6 min-w-max">
          {TRIPLED_REVIEWS.map((rev, idx) => (
            <div
              key={`${rev.id}-${idx}`}
              className="w-[280px] sm:w-[330px] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shrink-0"
            >
              <div>
                {/* Pet Photo Header */}
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-4 relative bg-gray-100">
                  <img
                    src={rev.petImage}
                    alt={rev.petType}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <span className="text-[10px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 font-mono">
                      {rev.petType}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-[#31b1ba]/20 mb-1.5" />
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center gap-2.5">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#31b1ba]/20"
                />
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-[#31b1ba] flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                  </h4>
                  <span className="text-xs text-gray-400">Verified Royal Parent</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

