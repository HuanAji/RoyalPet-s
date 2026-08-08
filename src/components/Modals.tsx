import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Search, Check, Play, Package, Award, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { CAT_FOOD_PRODUCT, DOG_FOOD_PRODUCT, ASSETS } from '../constants';

export type ProductType = typeof CAT_FOOD_PRODUCT | typeof DOG_FOOD_PRODUCT;

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: ProductType | null;
  onAddToCart: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product = CAT_FOOD_PRODUCT,
  onAddToCart,
  isFavorite,
  onToggleFavorite,
}) => {
  const [added, setAdded] = useState(false);

  if (!isOpen) return null;

  const currentProduct = product || CAT_FOOD_PRODUCT;

  const handleAdd = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#EFFDF0] border border-white/80 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-scale-in relative text-gray-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-black transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-5 bg-white shadow-inner flex items-center justify-center p-4">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-contain"
            />
            <span className="absolute top-3 left-3 bg-[#E86A10] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
              PREMIUM NUTRITION
            </span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif-display text-2xl text-[#1a3d1a]">
                {currentProduct.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center text-[#E86A10]">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold ml-1 text-gray-900">{currentProduct.rating}</span>
                </div>
                <span className="text-xs text-gray-500">({currentProduct.reviewsCount} reviews)</span>
              </div>
            </div>
            <span className="text-xl font-extrabold text-[#1a3d1a]">
              {currentProduct.price}
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {currentProduct.description}
          </p>

          <div className="grid grid-cols-2 gap-2 my-4 text-xs font-medium text-gray-700">
            <div className="bg-white/60 p-2.5 rounded-xl border border-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1a3d1a]" />
              <span>100% Complete Nutrition</span>
            </div>
            <div className="bg-white/60 p-2.5 rounded-xl border border-white flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1a3d1a]" />
              <span>Omega 3 & Essential Vitamins</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#1a3d1a] hover:bg-[#2a5a2a] text-white'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart — {currentProduct.price}</span>
                </>
              )}
            </button>

            <button
              onClick={onToggleFavorite}
              aria-label="Favorite"
              className={`p-3 rounded-full border transition-all shadow-xs ${
                isFavorite
                  ? 'bg-[#E86A10] border-[#E86A10] text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:text-[#E86A10]'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-900 text-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl animate-scale-in relative border border-gray-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/50 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#E86A10]">
              <Play className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Cozy Cat House Review Showcase</h3>
              <p className="text-xs text-gray-400">Featured creators on TikTok & YouTube</p>
            </div>
          </div>

          <div className="aspect-video rounded-2xl bg-black relative overflow-hidden flex items-center justify-center group border border-gray-800 shadow-inner">
            <img
              src={CAT_FOOD_PRODUCT.image}
              alt="Video player background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E86A10] text-white flex items-center justify-center shadow-xl animate-pulse cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <p className="mt-4 font-serif-display text-xl text-white">"My pets literally love this formula!"</p>
              <p className="text-xs text-amber-300 font-medium mt-1">★ 4.9 Rating by over 12,000 pet owners</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-gray-400 border-t border-gray-800 pt-3">
            <span>Duration: 1:45 min</span>
            <span className="text-[#E86A10] font-medium">1.2M Total Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (product: ProductType) => void;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = [
    { label: 'Cat House', icon: '🏠' },
    { label: 'Salmon Food', icon: '🐟' },
    { label: 'Beef Food', icon: '🥩' },
    { label: 'Orthopedic Bed', icon: '🛏️' },
    { label: 'Feather Wand', icon: '🪶' },
    { label: 'Scratching Post', icon: '🐾' },
  ];

  const searchableProducts = [
    {
      data: CAT_FOOD_PRODUCT,
      keywords: ['cat food', 'salmon', 'cat', 'royal salmon', 'dry food', 'cat house', 'food'],
      category: 'Cat Nutrition'
    },
    {
      data: DOG_FOOD_PRODUCT,
      keywords: ['dog food', 'beef', 'dog', 'royal beef', 'grain free', 'food'],
      category: 'Dog Nutrition'
    },
    {
      data: {
        id: 'cat-house-1',
        name: 'Cozy Wool Cat Cave House',
        price: 'Rp. 385.000',
        rating: 4.9,
        reviewsCount: 124,
        image: ASSETS.bottomRightImage,
        description: 'Ultra-soft hand-crafted wool cat cave providing a safe, warm retreat for your furry friend.'
      },
      keywords: ['cat house', 'house', 'cave', 'bed', 'cat', 'orthopedic bed'],
      category: 'Cat Furniture'
    },
    {
      data: {
        id: 'scratch-post-1',
        name: 'Ergonomic Sisal Scratching Post',
        price: 'Rp. 229.000',
        rating: 4.8,
        reviewsCount: 89,
        image: ASSETS.bottomLeftImage,
        description: 'Natural sisal rope scratching post with weighted wooden base to protect your furniture.'
      },
      keywords: ['scratching post', 'scratch', 'feather wand', 'cat tree', 'toy'],
      category: 'Cat Toys & Care'
    }
  ];

  const filteredProducts = searchableProducts.filter(item => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      item.data.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.some(k => k.includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#EFFDF0] border border-white/90 rounded-3xl max-w-xl w-full p-4 sm:p-6 shadow-2xl animate-scale-in text-gray-900 relative max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between mb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#31b1ba]/15 text-[#31b1ba] flex items-center justify-center">
              <Search className="w-4 h-4" />
            </div>
            <h3 className="font-serif-display text-lg sm:text-xl text-[#1a3d1a]">Search Catalog</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-900 flex items-center justify-center transition-colors shadow-xs"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative mb-4 shrink-0">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search beds, toys, food, brands..."
            className="w-full pl-11 pr-10 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-full text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31b1ba] shadow-xs"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Popular Searches Tags */}
        <div className="mb-4 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span>Popular Searches</span>
            </div>
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-[11px] font-medium text-[#31b1ba] hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {popularSearches.map((item) => {
              const isSelected = query.toLowerCase() === item.label.toLowerCase();
              return (
                <button
                  key={item.label}
                  onClick={() => setQuery(isSelected ? '' : item.label)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all flex items-center gap-1.5 shadow-2xs ${
                    isSelected
                      ? 'bg-[#31b1ba] text-white border-[#31b1ba] font-bold shadow-sm'
                      : 'bg-white hover:bg-[#31b1ba]/10 hover:border-[#31b1ba]/30 text-gray-700 border-gray-200/80'
                  }`}
                >
                  <span className="text-xs">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 no-scrollbar border-t border-gray-200/60 pt-3">
          <div className="flex items-center justify-between text-xs text-gray-500 font-medium px-1">
            <span>{query ? `Results for "${query}"` : 'Featured Products'}</span>
            <span>{filteredProducts.length} item(s)</span>
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.data.id}
                onClick={() => {
                  if (onSelectProduct && ('image' in item.data)) {
                    onSelectProduct(item.data as ProductType);
                  }
                }}
                className="bg-white hover:bg-white/90 p-3 rounded-2xl border border-gray-100 flex items-center justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 p-1 flex items-center justify-center shrink-0 border border-gray-100">
                    <img src={item.data.image} alt={item.data.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#31b1ba] bg-[#31b1ba]/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {item.category}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-gray-900 mt-0.5 line-clamp-1 group-hover:text-[#31b1ba] transition-colors">
                      {item.data.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-bold text-[#FF6B00]">{item.data.price}</span>
                      <span className="text-[11px] text-gray-400">★ {item.data.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-[#31b1ba] text-gray-600 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center bg-white/50 rounded-2xl border border-dashed border-gray-200">
              <Sparkles className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-xs sm:text-sm font-medium text-gray-700">No matching items found</p>
              <p className="text-[11px] text-gray-500 mt-1">Try clicking one of the popular search tags above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoritesCount: number;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({ isOpen, onClose, favoritesCount }) => {
  if (!isOpen) return null;

  const favoriteItems = [
    { name: CAT_FOOD_PRODUCT.name, price: CAT_FOOD_PRODUCT.price, image: CAT_FOOD_PRODUCT.image },
    { name: DOG_FOOD_PRODUCT.name, price: DOG_FOOD_PRODUCT.price, image: DOG_FOOD_PRODUCT.image },
    { name: 'Ergonomic Scratcher Post', price: 'Rp. 29.998', image: ASSETS.bottomRightImage },
    { name: 'Plush Calming Cushion', price: 'Rp. 34.500', image: ASSETS.bottomLeftImage },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#EFFDF0] border border-white rounded-3xl max-w-md w-full p-6 shadow-2xl animate-scale-in text-gray-900 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-full bg-[#E86A10] text-white">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <h3 className="font-serif-display text-2xl text-[#1a3d1a]">Your Favorites ({favoritesCount})</h3>
        </div>

        <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
          {favoriteItems.map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-contain" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs font-bold text-[#1a3d1a]">{item.price}</p>
                </div>
              </div>
              <button className="text-xs bg-[#E86A10] text-white px-3 py-1.5 rounded-full font-medium hover:bg-[#d45e0d] transition-colors">
                In Wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cartCount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#EFFDF0] w-full max-w-md h-full p-6 shadow-2xl animate-slide-in-right flex flex-col justify-between text-gray-900 relative border-l border-white">
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#1a3d1a]" />
              <h3 className="font-serif-display text-2xl text-[#1a3d1a]">Shopping Cart ({cartCount})</h3>
            </div>
            <button onClick={onClose} className="p-1 rounded-full text-gray-500 hover:text-black">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <img src={CAT_FOOD_PRODUCT.image} alt={CAT_FOOD_PRODUCT.name} className="w-16 h-16 rounded-xl object-contain" />
                <div>
                  <p className="text-sm font-bold text-gray-900">{CAT_FOOD_PRODUCT.name}</p>
                  <p className="text-xs text-gray-500">Qty: {cartCount}</p>
                  <p className="text-sm font-bold text-[#1a3d1a] mt-1">{CAT_FOOD_PRODUCT.price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600 font-medium">Subtotal</span>
            <span className="text-xl font-bold text-[#1a3d1a]">{CAT_FOOD_PRODUCT.price}</span>
          </div>
          <button className="w-full bg-[#E86A10] hover:bg-[#d45e0d] text-white py-3.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-98">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#EFFDF0] border border-white rounded-3xl max-w-sm w-full p-6 shadow-2xl animate-scale-in text-gray-900 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <img src={ASSETS.avatar} alt="User Avatar" className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover mb-3" />
          <h3 className="font-serif-display text-2xl text-[#1a3d1a]">Welcome Back, Sarah!</h3>
          <p className="text-xs text-gray-600 font-medium mt-0.5">RoyalPet's VIP Member</p>
        </div>

        <div className="mt-6 space-y-2.5 text-xs font-medium">
          <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-4 h-4 text-[#E86A10]" />
              <span>Loyalty Points</span>
            </div>
            <span className="font-bold text-[#1a3d1a]">1,450 pts</span>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-700">
              <Package className="w-4 h-4 text-[#1a3d1a]" />
              <span>Recent Orders</span>
            </div>
            <span className="font-bold text-emerald-600">1 In Transit</span>
          </div>
        </div>
      </div>
    </div>
  );
};
