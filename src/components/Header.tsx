import React from 'react';
import { Search } from 'lucide-react';
import { ASSETS } from '../constants';

interface HeaderProps {
  favoritesCount?: number;
  cartCount?: number;
  onOpenSearch?: () => void;
  onOpenFavorites?: () => void;
  onOpenCart?: () => void;
  onOpenAccount?: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  favoritesCount = 4,
  cartCount = 1,
  onOpenSearch,
  onOpenFavorites,
  onOpenCart,
  onOpenAccount,
  activeTab = 'Home',
  setActiveTab,
}) => {
  const navItems = ['Home', 'Shop', 'Delivery and payment', 'Brands', 'Blog'];

  return (
    <header className="w-full px-4 sm:px-8 md:px-12 py-3 md:py-4 flex items-center justify-between relative z-30 shrink-0 select-none animate-fade-in delay-100">
      {/* Left: Logo */}
      <div className="flex items-center">
        <a href="#" className="flex items-center gap-2 sm:gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#1a3d1a] rounded-md transition-transform hover:scale-[1.02]">
          <svg
            viewBox="0 0 100 100"
            fill="currentColor"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#1a3d1a] shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="RoyalPet's Paw Logo"
          >
            {/* 4 Toe Beans */}
            <ellipse cx="20" cy="28" rx="8" ry="14" transform="rotate(-26 20 28)" />
            <ellipse cx="40" cy="18" rx="9" ry="15" transform="rotate(-8 40 18)" />
            <ellipse cx="60" cy="18" rx="9" ry="15" transform="rotate(8 60 18)" />
            <ellipse cx="80" cy="28" rx="8" ry="14" transform="rotate(26 80 28)" />
            
            {/* Main Paw Pad with Dog & Cat Silhouette Cutout */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 50 38 C 28 38 18 52 18 68 C 18 84 32 92 50 92 C 68 92 82 84 82 68 C 82 52 72 38 50 38 Z
                 M 31 78 C 29 73 31 65 37 60 C 42 55 47 57 48 62 C 49 65 48 70 45 74 C 41 78 36 80 31 78 Z
                 M 69 78 C 64 80 59 78 55 74 C 52 70 51 65 52 62 C 53 57 58 55 63 60 C 69 65 71 73 69 78 Z"
            />
          </svg>
          <span className="font-serif-display text-2xl md:text-3xl text-[#1a3d1a] font-bold tracking-tight leading-none">
            RoyalPet's
          </span>
        </a>
      </div>

      {/* Center Nav (Hidden below md) */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8">
        {navItems.map((item) => {
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              onClick={() => setActiveTab && setActiveTab(item)}
              className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                isActive
                  ? 'text-[#1a3d1a] font-semibold'
                  : 'text-gray-600 hover:text-[#1a3d1a]'
              }`}
            >
              {item}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1a3d1a] rounded-full animate-scale-in" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Action Items: Search icon and Let's Try button */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {/* Search Button */}
        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1a3d1a]/20 text-[#1a3d1a] hover:border-[#1a3d1a] hover:bg-white/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#1a3d1a]"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Let's Try Rounded Button */}
        <button
          onClick={onOpenSearch}
          className="bg-[#1a3d1a] hover:bg-[#2a5a2a] text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#1a3d1a] cursor-pointer"
        >
          Let's Try
        </button>
      </div>
    </header>
  );
};
