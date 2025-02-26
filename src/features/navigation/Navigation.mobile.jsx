import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from './navigation.constants';
import { ChevronUp, Menu } from 'lucide-react';

// Maximum number of items to show in the bottom bar
const MAX_VISIBLE_ITEMS = 4;

export const NavigationMobile = () => {
  const [active, setActive] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);

  // Split navigation items
  const primaryItems = NAV_ITEMS.slice(0, MAX_VISIBLE_ITEMS);
  const secondaryItems = NAV_ITEMS.slice(MAX_VISIBLE_ITEMS);
  const hasMoreItems = secondaryItems.length > 0;

  const handleNavClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(itemId);
      setIsExpanded(false);
    }
  };

  return (
    <>
      {/* Main Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-t border-teal-500/20 pb-safe">
        <div className="max-w-lg mx-auto flex justify-around items-center">
          {primaryItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex flex-col items-center py-3 px-2 relative w-1/5"
                whileTap={{ scale: 0.9 }}
              >
                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute top-0 w-10 h-1 rounded-b-full bg-gradient-to-r from-teal-400 to-cyan-400"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Icon with pulse animation when active */}
                <div className="relative">
                  <Icon size={22} className={`${isActive ? 'text-teal-400' : 'text-white/60'} z-10 relative`} />

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-teal-400/30 filter blur-sm"
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0.1, 0.3]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </div>

                {/* Label */}
                <span className={`text-[10px] mt-1 font-medium
                  ${isActive ? 'text-teal-400' : 'text-white/60'}`
                }>
                  {item.label}
                </span>
              </motion.button>
            );
          })}

          {/* "More" button for overflow sections */}
          {hasMoreItems && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex flex-col items-center py-3 px-2 relative w-1/5"
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative">
                <Menu size={22} className={isExpanded ? 'text-teal-400' : 'text-white/60'} />

                {isExpanded && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-teal-400/30 filter blur-sm"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.3, 0.1, 0.3]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </div>

              <span className={`text-[10px] mt-1 font-medium
                ${isExpanded ? 'text-teal-400' : 'text-white/60'}`
              }>
                More
              </span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Expandable Panel for Additional Navigation Items */}
      <AnimatePresence>
        {isExpanded && hasMoreItems && (
          <motion.div
            className="fixed bottom-[4.5rem] left-0 right-0 z-40 bg-black/80 backdrop-blur-xl border-t border-teal-500/20 rounded-t-2xl overflow-hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-4 p-4">
              {secondaryItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      flex flex-col items-center justify-center p-4
                      ${isActive
                        ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40'
                        : 'bg-white/5 text-white/60 border border-white/10 hover:border-white/20'}
                      rounded-xl transition-colors duration-200
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={24} />
                    <span className="text-xs mt-2">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};