import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Heart, CheckCircle2, ArrowRight, Baby, Crown, Home, Activity, Zap } from 'lucide-react';
import { ProductType } from './Modals';
import { CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from '../constants';

interface PetNutritionCalculatorProps {
  onSelectProduct: (product: ProductType) => void;
}

export const PetNutritionCalculator: React.FC<PetNutritionCalculatorProps> = ({
  onSelectProduct,
}) => {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [ageGroup, setAgeGroup] = useState<'young' | 'adult' | 'senior'>('adult');
  const [weight, setWeight] = useState<number>(8);
  const [activity, setActivity] = useState<'relaxed' | 'moderate' | 'active'>('moderate');

  // Calculation Logic
  const baseFactor = petType === 'dog' ? 70 : 60;
  const weightExponent = 0.75;
  const rer = baseFactor * Math.pow(weight, weightExponent); // Resting Energy Requirement

  let activityMultiplier = 1.4;
  if (activity === 'relaxed') activityMultiplier = 1.2;
  if (activity === 'active') activityMultiplier = 1.8;

  let ageMultiplier = 1.0;
  if (ageGroup === 'young') ageMultiplier = 1.5;
  if (ageGroup === 'senior') ageMultiplier = 0.9;

  const dailyCalories = Math.round(rer * activityMultiplier * ageMultiplier);
  const dailyGrams = Math.round(dailyCalories / 3.8); // Avg 3.8 kcal per gram of kibble

  const recommendedProduct = petType === 'cat' ? CAT_FOOD_PRODUCT : DOG_FOOD_PRODUCT;

  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 bg-[#FFFDF5] text-[#31b1ba] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E7] text-[#31b1ba] text-xs font-semibold mb-3 border border-[#FFC72C]/40">
            <Calculator className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-[#31b1ba] tracking-tight">
            Royal Nutrition Calculator
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Every pet is unique. Calculate exact daily caloric needs and recommended portion sizes based on weight, age, and activity level.
          </p>
        </motion.div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Step 1: Pet Type */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  1. Select Companion
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setPetType('dog');
                      setWeight(10);
                    }}
                    className={`p-2.5 sm:p-3 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all border relative cursor-pointer group ${
                      petType === 'dog'
                        ? 'bg-[#FFF8E7] text-[#31b1ba] border-[#31b1ba] ring-2 ring-[#31b1ba]/30 shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#31b1ba]/40 hover:bg-gray-50'
                    }`}
                  >
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
                      <img
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=200"
                        alt="Dog"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#31b1ba] leading-tight">Dog</span>
                      <span className="text-[11px] text-gray-500 font-normal">Anjing</span>
                    </div>
                    {petType === 'dog' && (
                      <div className="ml-auto bg-[#31b1ba] text-white p-1 rounded-full shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPetType('cat');
                      setWeight(4);
                    }}
                    className={`p-2.5 sm:p-3 rounded-2xl font-semibold text-sm flex items-center gap-3 transition-all border relative cursor-pointer group ${
                      petType === 'cat'
                        ? 'bg-[#FFF8E7] text-[#31b1ba] border-[#31b1ba] ring-2 ring-[#31b1ba]/30 shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-[#31b1ba]/40 hover:bg-gray-50'
                    }`}
                  >
                    <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-xs">
                      <img
                        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200"
                        alt="Cat"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#31b1ba] leading-tight">Cat</span>
                      <span className="text-[11px] text-gray-500 font-normal">Kucing</span>
                    </div>
                    {petType === 'cat' && (
                      <div className="ml-auto bg-[#31b1ba] text-white p-1 rounded-full shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Step 2: Age Category */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  2. Life Stage
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    {
                      key: 'young',
                      label: petType === 'dog' ? 'Puppy' : 'Kitten',
                      age: '< 1 Year',
                      icon: Baby,
                      color: 'text-[#FF6B00]',
                    },
                    {
                      key: 'adult',
                      label: 'Adult',
                      age: '1 - 7 Years',
                      icon: Heart,
                      color: 'text-[#31b1ba]',
                    },
                    {
                      key: 'senior',
                      label: 'Senior',
                      age: '7+ Years',
                      icon: Crown,
                      color: 'text-[#FFC72C]',
                    },
                  ].map((item) => {
                    const IconComp = item.icon;
                    const isSelected = ageGroup === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setAgeGroup(item.key as any)}
                        className={`p-2.5 sm:p-3 rounded-2xl transition-all border flex flex-col items-center justify-between text-center cursor-pointer group ${
                          isSelected
                            ? 'bg-[#FFF8E7] border-[#31b1ba] ring-2 ring-[#31b1ba]/30 shadow-xs'
                            : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 transition-transform group-hover:scale-110 ${
                            isSelected ? 'bg-[#31b1ba]/10' : 'bg-gray-100'
                          }`}
                        >
                          <IconComp className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-gray-900 block leading-tight">
                          {item.label}
                        </span>
                        <span className="text-[10px] font-mono font-medium text-gray-500 mt-0.5">
                          {item.age}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Weight Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    3. Pet Weight
                  </label>
                  <span className="text-sm font-extrabold text-[#31b1ba] bg-[#FFF8E7] px-3 py-1 rounded-full border border-[#FFC72C]/40">
                    {weight} kg
                  </span>
                </div>
                <input
                  type="range"
                  min={petType === 'cat' ? 1 : 2}
                  max={petType === 'cat' ? 12 : 50}
                  step={0.5}
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full accent-[#FF6B00] cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
              </div>

              {/* Step 4: Activity Level */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  4. Activity Level
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    {
                      key: 'relaxed',
                      label: 'Relaxed',
                      desc: 'Chill / Indoor',
                      icon: Home,
                      bars: 1,
                    },
                    {
                      key: 'moderate',
                      label: 'Moderate',
                      desc: 'Daily Walks',
                      icon: Activity,
                      bars: 2,
                    },
                    {
                      key: 'active',
                      label: 'Athletic',
                      desc: 'High Energy',
                      icon: Zap,
                      bars: 3,
                    },
                  ].map((item) => {
                    const IconComp = item.icon;
                    const isSelected = activity === item.key;
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setActivity(item.key as any)}
                        className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full transition-all border flex flex-col items-center justify-center text-center cursor-pointer group p-1.5 sm:p-2 relative ${
                          isSelected
                            ? 'bg-[#FFF8E7] border-[#31b1ba] ring-2 ring-[#31b1ba]/30 shadow-sm scale-105'
                            : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center mb-0.5 transition-transform group-hover:scale-110 ${
                            isSelected ? 'bg-[#31b1ba] text-white' : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>

                        <span className="font-bold text-[10px] sm:text-xs text-gray-900 block leading-tight">
                          {item.label}
                        </span>
                        <span className="text-[8px] sm:text-[9px] text-gray-500 block font-normal leading-tight">
                          {item.desc}
                        </span>

                        {/* Circular Energy Gauge Dots */}
                        <div className="flex gap-0.5 mt-0.5">
                          {[1, 2, 3].map((barNum) => (
                            <div
                              key={barNum}
                              className={`w-1 h-1 rounded-full ${
                                barNum <= item.bars
                                  ? isSelected
                                    ? 'bg-[#FF6B00]'
                                    : 'bg-[#31b1ba]'
                                  : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#FFF8E7] p-6 sm:p-8 rounded-3xl border border-[#FFC72C]/50 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#31b1ba] uppercase tracking-wider mb-4">
                <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                <span>Custom Nutrition Results</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-2xl border border-white/80 shadow-xs">
                  <span className="text-xs text-gray-500 font-medium block">Daily Energy</span>
                  <span className="text-2xl font-extrabold text-[#31b1ba]">{dailyCalories}</span>
                  <span className="text-xs text-gray-500 ml-1">kcal/day</span>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-white/80 shadow-xs">
                  <span className="text-xs text-gray-500 font-medium block">Portion Size</span>
                  <span className="text-2xl font-extrabold text-[#31b1ba]">{dailyGrams}</span>
                  <span className="text-xs text-gray-500 ml-1">g/day</span>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/60 mb-6">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">
                  Recommended Royal Formula
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="w-14 h-14 object-contain rounded-lg bg-white p-1 border border-gray-100"
                  />
                  <div>
                    <h4 className="font-serif-display text-base text-[#31b1ba] font-bold">
                      {recommendedProduct.name}
                    </h4>
                    <p className="text-xs text-[#FF6B00] font-medium flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Vet-approved ratio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProduct(recommendedProduct)}
              className="w-full bg-[#FF6B00] hover:bg-[#E05E00] text-white py-3.5 px-6 rounded-2xl font-semibold text-sm transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get This Royal Meal Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
