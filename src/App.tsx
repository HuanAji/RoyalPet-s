import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { PreloaderGate } from './components/PreloaderGate';
import { LogoMarquee } from './components/LogoMarquee';
import { HorizontalGallery } from './components/HorizontalGallery';
import { Header } from './components/Header';
import { HeroDesktop } from './components/HeroDesktop';
import { CategoryShowcase } from './components/CategoryShowcase';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BrandFeatures } from './components/BrandFeatures';
import { PetNutritionCalculator } from './components/PetNutritionCalculator';
import { CustomerReviews } from './components/CustomerReviews';
import { FooterSection } from './components/FooterSection';
import {
  ProductModal,
  VideoModal,
  SearchDrawer,
  FavoritesModal,
  CartDrawer,
  AccountModal,
  ProductType,
} from './components/Modals';
import { ProductSchema } from './components/SeoHead';
import { ASSETS, CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from './constants';

export default function App() {
  const [hasLoadedGate, setHasLoadedGate] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [favoritesCount, setFavoritesCount] = useState(4);
  const [cartCount, setCartCount] = useState(1);
  const [isFavoriteCatHouse, setIsFavoriteCatHouse] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll progress indicator
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setShowBackToTop(latest > 350);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Modals / Drawers state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType>(CAT_FOOD_PRODUCT);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleOpenProduct = (product?: ProductType) => {
    if (product) {
      setSelectedProduct(product);
    }
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (product?: ProductType) => {
    setCartCount((prev) => prev + 1);
  };

  const handleToggleFavorite = () => {
    if (isFavoriteCatHouse) {
      setIsFavoriteCatHouse(false);
      setFavoritesCount((prev) => Math.max(0, prev - 1));
    } else {
      setIsFavoriteCatHouse(true);
      setFavoritesCount((prev) => prev + 1);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'Shop') {
      const shopEl = document.getElementById('shop-section');
      shopEl?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Delivery and payment') {
      const deliveryEl = document.getElementById('features-section');
      deliveryEl?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Brands') {
      const brandsEl = document.getElementById('calculator-section');
      brandsEl?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Blog') {
      const blogEl = document.getElementById('reviews-section');
      blogEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#EFFDF0] text-[#1a3d1a] relative font-sans overflow-x-hidden">
      {/* SEO: Dynamic Product Schema JSON-LD */}
      <ProductSchema
        name={CAT_FOOD_PRODUCT.name}
        description={CAT_FOOD_PRODUCT.description}
        price={CAT_FOOD_PRODUCT.numericPrice}
        rating={CAT_FOOD_PRODUCT.rating}
        reviewCount={CAT_FOOD_PRODUCT.reviewsCount}
        imageUrl={ASSETS.catFoodImage}
        sku={CAT_FOOD_PRODUCT.id}
      />
      <ProductSchema
        name={DOG_FOOD_PRODUCT.name}
        description={DOG_FOOD_PRODUCT.description}
        price={DOG_FOOD_PRODUCT.numericPrice}
        rating={DOG_FOOD_PRODUCT.rating}
        reviewCount={DOG_FOOD_PRODUCT.reviewsCount}
        imageUrl={ASSETS.dogFoodImage}
        sku={DOG_FOOD_PRODUCT.id}
      />

      {/* 1. Preloader Interactive Gate */}
      {!hasLoadedGate ? (
        <PreloaderGate onLoaded={() => setHasLoadedGate(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col w-full"
        >
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#10B981] z-50 origin-left"
            style={{ scaleX }}
          />

          {/* Sticky Header */}
          <div className="sticky top-0 z-40 bg-[#EFFDF0]/90 backdrop-blur-md transition-all border-b border-[#1a3d1a]/5">
            <Header
              favoritesCount={favoritesCount}
              cartCount={cartCount}
              onOpenSearch={() => setIsSearchOpen(true)}
              onOpenFavorites={() => setIsFavoritesOpen(true)}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenAccount={() => setIsAccountOpen(true)}
              activeTab={activeTab}
              setActiveTab={handleNavClick}
            />
          </div>

          {/* Main Content Flow */}
          <main className="flex-1 flex flex-col w-full">
            {/* 1. Hero Viewport Area */}
            <section className="relative w-full h-[270px] min-[380px]:h-[310px] min-[440px]:h-[350px] sm:h-[450px] md:h-[520px] lg:h-[calc(100vh-64px)] lg:min-h-[580px] lg:max-h-[920px] overflow-hidden flex flex-col justify-between">
              <HeroDesktop
                onSelectProduct={handleOpenProduct}
                onExploreProducts={() => handleOpenProduct(CAT_FOOD_PRODUCT)}
              />
            </section>

            {/* 2. Partner & Vet Association Logo Marquee */}
            <LogoMarquee />

            {/* 3. Category Showcase */}
            <div id="categories-section">
              <CategoryShowcase onSelectCategory={() => handleOpenProduct(CAT_FOOD_PRODUCT)} />
            </div>

            {/* 4. Featured Best Sellers Grid */}
            <div id="shop-section">
              <FeaturedProducts
                onSelectProduct={handleOpenProduct}
                onAddToCart={handleAddToCart}
              />
            </div>

            {/* 5. Horizontal Gallery (ON TRACK / OFF TRACK) */}
            <HorizontalGallery />

            {/* 6. Brand Features */}
            <div id="features-section">
              <BrandFeatures />
            </div>

            {/* 7. Pet Nutrition & Calorie Calculator */}
            <div id="calculator-section">
              <PetNutritionCalculator onSelectProduct={handleOpenProduct} />
            </div>

            {/* 8. Customer Stories & Reviews */}
            <div id="reviews-section">
              <CustomerReviews />
            </div>

            {/* 9. Newsletter & Footer */}
            <FooterSection />
          </main>
        </motion.div>
      )}

      {/* Floating Back To Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 bg-[#1a3d1a] hover:bg-[#2a5a2a] text-white p-3.5 rounded-full shadow-2xl border border-white/20 transition-transform duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Modals & Drawers */}
      <ProductModal
        isOpen={isProductModalOpen}
        product={selectedProduct}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
        isFavorite={isFavoriteCatHouse}
        onToggleFavorite={handleToggleFavorite}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleOpenProduct}
      />

      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoritesCount={favoritesCount}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartCount={cartCount}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />
    </div>
  );
}



