// src/features/navigation/Navigation.mobile.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, THEME } from './navigation.constants';
import { ChevronUp, Menu, X, Eye, EyeOff } from 'lucide-react';

// Maximum number of items to show in the bottom bar
const MAX_VISIBLE_ITEMS = 4;

// Configuration for hidden sections in mobile view
const HIDDEN_SECTIONS = ['testimonials', 'certifications', 'goals'];

export const NavigationMobile = () => {
  const [active, setActive] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Filter out hidden sections for mobile view
  const visibleNavItems = NAV_ITEMS.filter(item => !HIDDEN_SECTIONS.includes(item.id));

  // Split navigation items
  const primaryItems = visibleNavItems.slice(0, MAX_VISIBLE_ITEMS);
  const secondaryItems = visibleNavItems.slice(MAX_VISIBLE_ITEMS);
  const hasMoreItems = secondaryItems.length > 0;

  // Toggle visibility panel state
  const [showHiddenItems, setShowHiddenItems] = useState(false);
  const hiddenItems = NAV_ITEMS.filter(item => HIDDEN_SECTIONS.includes(item.id));

  // Handle scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(itemId);
    }
  };

  return (
    <>
      {/* Main Bottom Navigation Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 pb-safe"
        style={{
          background: `linear-gradient(to top, ${THEME.background.glass}, ${THEME.background.main})`,
          borderTop: `1px solid ${THEME.border.active}`,
          boxShadow: `0 -5px 20px 0 rgba(0, 0, 0, 0.3), 0 -2px 10px ${THEME.primary.glow}20`,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem'
        }}
      >
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
                    className="absolute top-0 w-12 h-1 rounded-b-full"
                    style={{
                      background: `linear-gradient(to right, ${THEME.primary.dark}, ${THEME.primary.main})`,
                      boxShadow: `0 0 10px ${THEME.primary.glow}`
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Icon with pulse animation when active */}
                <div className="relative">
                  <Icon
                    size={24}
                    className="z-10 relative"
                    color={isActive ? THEME.primary.light : THEME.text.secondary}
                    style={{
                      filter: isActive ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none'
                    }}
                  />

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full filter blur-sm"
                      style={{ backgroundColor: THEME.primary.main }}
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
                <span
                  className="text-[10px] mt-1 font-medium"
                  style={{
                    color: isActive ? THEME.primary.light : THEME.text.secondary,
                    textShadow: isActive ? `0 0 5px ${THEME.primary.glow}` : 'none',
                    letterSpacing: '0.5px'
                  }}
                >
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
                <Menu
                  size={24}
                  className="relative z-10"
                  color={isExpanded ? THEME.primary.light : THEME.text.secondary}
                  style={{
                    filter: isExpanded ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none'
                  }}
                />

                {isExpanded && (
                  <motion.div
                    className="absolute inset-0 rounded-full filter blur-sm"
                    style={{ backgroundColor: THEME.primary.main }}
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

              <span
                className="text-[10px] mt-1 font-medium"
                style={{
                  color: isExpanded ? THEME.primary.light : THEME.text.secondary,
                  textShadow: isExpanded ? `0 0 5px ${THEME.primary.glow}` : 'none',
                  letterSpacing: '0.5px'
                }}
              >
                More
              </span>
            </motion.button>
          )}
        </div>
      </div>

      {/* Expandable Panel for Additional Navigation Items - Revamped */}
      <AnimatePresence>
        {isExpanded && hasMoreItems && (
          <>
            {/* Backdrop for panel */}
            <motion.div
              className="fixed inset-0 z-30 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
            />

            {/* Panel Content */}
            <motion.div
              className="fixed bottom-16 left-4 right-4 z-40 overflow-hidden max-h-[65vh]"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                background: `linear-gradient(135deg, ${THEME.background.glass}, rgba(30, 30, 40, 0.95))`,
                borderWidth: '1px',
                borderStyle: 'solid',
                borderImage: `linear-gradient(135deg, ${THEME.primary.main}60, ${THEME.primary.light}20) 1`,
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${THEME.primary.glow}30`,
                borderRadius: '1rem' // Consistent rounded corners
              }}
            >
              {/* Only close button in the top right */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-bold text-white text-lg"
                    style={{ textShadow: `0 0 5px ${THEME.primary.glow}40` }}
                  >
                    Menu
                  </h3>
                </div>

                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="rounded-full p-1.5"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    boxShadow: `0 0 10px ${THEME.primary.glow}30`,
                    background: `${THEME.primary.main}20`,
                    border: `1px solid ${THEME.primary.main}30`
                  }}
                >
                  <X size={20} color={THEME.primary.light} />
                </motion.button>
              </div>

              {/* Scrollable content area */}
              <div className="p-4 overflow-y-auto max-h-[calc(65vh-60px)]">
                <div className="grid grid-cols-2 gap-3">
                  {secondaryItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          handleNavClick(item.id);
                          setIsExpanded(false);
                        }}
                        className="flex flex-col items-center justify-center p-4 transition-all duration-200 relative overflow-hidden group"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${THEME.primary.main}30, ${THEME.primary.dark}10)`
                            : 'rgba(255, 255, 255, 0.03)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: isActive ? THEME.border.active : 'rgba(255, 255, 255, 0.1)',
                          boxShadow: isActive ? `0 0 15px ${THEME.primary.glow}30` : 'none',
                          borderRadius: '0.8rem' // Consistent rounded corners
                        }}
                      >
                        {/* Background animation on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: `radial-gradient(circle at center, ${THEME.primary.main}20 0%, transparent 70%)`,
                            borderRadius: '0.8rem'
                          }}
                          animate={{ scale: [0.9, 1.1, 0.9] }}
                          transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Icon */}
                        <Icon
                          size={26}
                          color={isActive ? THEME.primary.light : THEME.text.secondary}
                          style={{
                            filter: isActive ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none'
                          }}
                        />

                        {/* Label */}
                        <span
                          className="text-sm mt-3 font-medium"
                          style={{
                            color: isActive ? THEME.primary.light : THEME.text.secondary,
                            textShadow: isActive ? `0 0 5px ${THEME.primary.glow}` : 'none'
                          }}
                        >
                          {item.label}
                        </span>

                        {/* Active indicator dot */}
                        {isActive && (
                          <motion.div
                            className="absolute top-2 right-2 w-2 h-2 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{
                              background: THEME.primary.light,
                              boxShadow: `0 0 5px ${THEME.primary.glow}`
                            }}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Remove the toggle for hidden sections - we don't need it */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};