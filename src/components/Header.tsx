import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Shop', 'Delivery and payment', 'Brands', 'Blog'];

  return (
    <>
      <header className="w-full px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex items-center justify-between relative z-30 shrink-0 select-none animate-fade-in delay-100">
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center gap-2 focus:outline-none rounded-md transition-transform hover:scale-[1.02]">
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              className="h-7 w-7 md:h-8 md:w-8 text-[#31b1ba] shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="RoyalPet's Paw Logo"
            >
              {/* 4 Toe Beans */}
              <ellipse cx="20" cy="28" rx="8" ry="14" transform="rotate(-26 20 28)" fill="#FFC72C" />
              <ellipse cx="40" cy="18" rx="9" ry="15" transform="rotate(-8 40 18)" fill="#31b1ba" />
              <ellipse cx="60" cy="18" rx="9" ry="15" transform="rotate(8 60 18)" fill="#31b1ba" />
              <ellipse cx="80" cy="28" rx="8" ry="14" transform="rotate(26 80 28)" fill="#FF6B00" />
              
              {/* Main Paw Pad with Dog & Cat Silhouette Cutout */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 50 38 C 28 38 18 52 18 68 C 18 84 32 92 50 92 C 68 92 82 84 82 68 C 82 52 72 38 50 38 Z
                   M 31 78 C 29 73 31 65 37 60 C 42 55 47 57 48 62 C 49 65 48 70 45 74 C 41 78 36 80 31 78 Z
                   M 69 78 C 64 80 59 78 55 74 C 52 70 51 65 52 62 C 53 57 58 55 63 60 C 69 65 71 73 69 78 Z"
              />
            </svg>
            <span className="font-serif-display text-xl sm:text-2xl md:text-3xl text-[#31b1ba] font-bold tracking-tight leading-none whitespace-nowrap">
              RoyalPet's
            </span>
          </a>
        </div>

        {/* Center Desktop Nav (Hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                onClick={() => setActiveTab && setActiveTab(item)}
                className={`text-sm font-medium transition-colors relative py-1 focus:outline-none whitespace-nowrap ${
                  isActive
                    ? 'text-[#31b1ba] font-semibold'
                    : 'text-gray-600 hover:text-[#31b1ba]'
                }`}
              >
                {item}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFC72C] rounded-full animate-scale-in" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Items: Search icon, Let's Try button (Desktop), and Hamburger Menu for Mobile */}
        <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#31b1ba]/20 text-[#31b1ba] hover:border-[#31b1ba] hover:bg-white/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#31b1ba]"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Let's Try Rounded Button - Visible on Desktop (md+) */}
          <button
            onClick={onOpenSearch}
            className="hidden md:block bg-[#31b1ba] hover:bg-[#22828a] text-[#FFC72C] font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#31b1ba] cursor-pointer whitespace-nowrap"
          >
            Let's Try
          </button>

          {/* Hamburger Menu Toggle Button (Mobile Only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full border border-[#31b1ba]/20 text-[#31b1ba] hover:bg-[#31b1ba]/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fade-in flex flex-col justify-start pt-20 px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-4 animate-scale-in relative">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-serif-display font-bold text-lg text-[#31b1ba]">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => {
                      if (setActiveTab) setActiveTab(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#31b1ba]/10 text-[#31b1ba] font-bold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#31b1ba]" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2.5">
              {/* Let's Try button inside Mobile Hamburger Menu */}
              <button
                onClick={() => {
                  if (onOpenSearch) onOpenSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#31b1ba] hover:bg-[#22828a] text-[#FFC72C] py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Let's Try</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenSearch) onOpenSearch();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Products</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

