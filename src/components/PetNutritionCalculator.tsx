import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
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
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPetType('dog');
                      setWeight(10);
                    }}
                    className={`p-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all border ${
                      petType === 'dog'
                        ? 'bg-[#31b1ba] text-white border-[#31b1ba] shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span>🐶 Dog</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPetType('cat');
                      setWeight(4);
                    }}
                    className={`p-3.5 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all border ${
                      petType === 'cat'
                        ? 'bg-[#31b1ba] text-white border-[#31b1ba] shadow-md'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span>🐱 Cat</span>
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
                    { key: 'young', label: petType === 'dog' ? 'Puppy' : 'Kitten' },
                    { key: 'adult', label: 'Adult' },
                    { key: 'senior', label: 'Senior' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setAgeGroup(item.key as any)}
                      className={`py-2.5 px-3 rounded-xl font-medium text-xs sm:text-sm transition-all border ${
                        ageGroup === item.key
                          ? 'bg-[#31b1ba] text-white border-[#31b1ba]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
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
                    { key: 'relaxed', label: '🏡 Relaxed' },
                    { key: 'moderate', label: '🐕 Moderate' },
                    { key: 'active', label: '⚡ Athletic' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setActivity(item.key as any)}
                      className={`py-2.5 px-2 rounded-xl font-medium text-xs transition-all border ${
                        activity === item.key
                          ? 'bg-[#31b1ba] text-white border-[#31b1ba]'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
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
