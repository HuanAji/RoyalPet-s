import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroDesktop } from './components/HeroDesktop';
import { HeroTablet } from './components/HeroTablet';
import { HeroMobile } from './components/HeroMobile';
import {
  ProductModal,
  VideoModal,
  SearchDrawer,
  FavoritesModal,
  CartDrawer,
  AccountModal,
  ProductType,
} from './components/Modals';
import { CAT_FOOD_PRODUCT } from './constants';

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

  const handleAddToCart = () => {
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

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-[#EFFDF0] text-[#1a3d1a] relative font-sans select-none">
      {/* Header */}
      <Header
        favoritesCount={favoritesCount}
        cartCount={cartCount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Hero Viewport Area */}
      <main className="flex-1 flex flex-col relative w-full h-full overflow-hidden">
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

