import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroDesktop } from './components/HeroDesktop';
import { HeroTablet } from './components/HeroTablet';
import { HeroMobile } from './components/HeroMobile';
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
import { CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [favoritesCount, setFavoritesCount] = useState(4);
  const [cartCount, setCartCount] = useState(1);
  const [isFavoriteCatHouse, setIsFavoriteCatHouse] = useState(true);

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
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-[#EFFDF0]/90 backdrop-blur-md transition-all">
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
        <section className="relative w-full h-[calc(100vh-64px)] min-h-[580px] max-h-[920px] overflow-hidden flex flex-col justify-between">
          {/* Desktop Hero Layout (lg+) */}
          <HeroDesktop
            onSelectProduct={handleOpenProduct}
            onExploreProducts={() => handleOpenProduct(CAT_FOOD_PRODUCT)}
          />

          {/* Tablet Hero Layout (md to lg) */}
          <HeroTablet
            onSelectProduct={handleOpenProduct}
            onExploreProducts={() => handleOpenProduct(CAT_FOOD_PRODUCT)}
          />

          {/* Mobile Hero Layout (< md) */}
          <HeroMobile
            onSelectProduct={handleOpenProduct}
            onExploreProducts={() => handleOpenProduct(CAT_FOOD_PRODUCT)}
          />
        </section>

        {/* 2. Category Showcase */}
        <div id="categories-section">
          <CategoryShowcase onSelectCategory={() => handleOpenProduct(CAT_FOOD_PRODUCT)} />
        </div>

        {/* 3. Featured Best Sellers Grid */}
        <div id="shop-section">
          <FeaturedProducts
            onSelectProduct={handleOpenProduct}
            onAddToCart={handleAddToCart}
          />
        </div>

        {/* 4. Brand Features */}
        <div id="features-section">
          <BrandFeatures />
        </div>

        {/* 5. Pet Nutrition & Calorie Calculator */}
        <div id="calculator-section">
          <PetNutritionCalculator onSelectProduct={handleOpenProduct} />
        </div>

        {/* 6. Customer Stories & Reviews */}
        <div id="reviews-section">
          <CustomerReviews />
        </div>

        {/* 7. Newsletter & Footer */}
        <FooterSection />
      </main>

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


