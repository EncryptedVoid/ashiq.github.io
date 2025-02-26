// src/features/navigation/Navigation.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from './navigation.constants';
import { ChevronDown, Plus } from 'lucide-react';

// Maximum number of visible items before overflow
const MAX_VISIBLE_ITEMS = 5;

export const NavigationDesktop = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  // Split navigation items into visible and overflow
  const visibleItems = NAV_ITEMS.slice(0, MAX_VISIBLE_ITEMS);
  const overflowItems = NAV_ITEMS.slice(MAX_VISIBLE_ITEMS);
  const hasOverflow = overflowItems.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Add buffer for header height
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      // Find the last section that has been scrolled past
      let currentSection = 'hero';
      NAV_ITEMS.forEach(({ id }) => {
        const element = document.getElementById(`section-${id}`);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);

      // Close overflow menu on scroll
      if (isOverflowOpen) {
        setIsOverflowOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOverflowOpen]);

  // Handle clicking outside to close the overflow menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOverflowOpen && !e.target.closest('.overflow-menu') && !e.target.closest('.overflow-trigger')) {
        setIsOverflowOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOverflowOpen]);

  const scrollToSection = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOverflowOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: isScrollingUp ? 0 : -100 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 40,
        mass: 1
      }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/60 backdrop-blur-2xl border border-teal-500/30 rounded-2xl p-2 shadow-lg shadow-teal-500/10">
          <div className="flex justify-center items-center gap-2 relative">
            {/* Main visible navigation items */}
            {visibleItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-5 py-2.5 rounded-xl
                    flex items-center gap-2.5
                    transition-colors duration-300
                    ${isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/90'
                    }
                    group
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Active background element with glow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-400/30 rounded-xl shadow-lg shadow-teal-500/20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Icon with animated glow on hover */}
                  <div className="relative">
                    <Icon size={18} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <motion.div
                      className={`absolute inset-0 bg-teal-500/30 filter blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                      animate={isActive ? { scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] } : {}}
                      transition={isActive ? {
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      } : {}}
                    />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-medium relative z-10">{item.label}</span>
                </motion.button>
              );
            })}

            {/* Overflow dropdown button (only shown when needed) */}
            {hasOverflow && (
              <div className="relative overflow-trigger">
                <motion.button
                  onClick={() => setIsOverflowOpen(!isOverflowOpen)}
                  className={`
                    relative px-3 py-2.5 rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                    ${isOverflowOpen ? 'bg-teal-500/30 text-white' : 'text-white/60 hover:text-white/90'}
                    border border-transparent hover:border-teal-500/30
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Plus size={20} className={`transition-transform duration-300 ${isOverflowOpen ? 'rotate-45' : ''}`} />
                </motion.button>

                {/* Overflow dropdown menu */}
                <AnimatePresence>
                  {isOverflowOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 py-2 overflow-menu
                        bg-black/80 backdrop-blur-xl border border-teal-500/30
                        rounded-xl shadow-lg shadow-teal-500/10 min-w-[180px]"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {overflowItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                          <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`
                              w-full flex items-center gap-3 px-4 py-2.5
                              ${isActive ? 'text-teal-400' : 'text-white/70 hover:text-white'}
                              transition-colors duration-200
                              hover:bg-white/5
                            `}
                            whileHover={{ x: 3 }}
                          >
                            <Icon size={16} />
                            <span className="text-sm font-medium">{item.label}</span>

                            {isActive && (
                              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-400" />
                            )}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};