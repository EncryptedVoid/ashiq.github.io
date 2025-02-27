// src/features/navigation/Navigation.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, THEME } from './navigation.constants';
import { Plus } from 'lucide-react';

export const NavigationDesktop = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);

  // Define visible items limit and calculate if we have overflow
  const MAX_VISIBLE_ITEMS = 7; // Adjust as needed
  const visibleItems = NAV_ITEMS.slice(0, MAX_VISIBLE_ITEMS);
  const overflowItems = NAV_ITEMS.slice(MAX_VISIBLE_ITEMS);
  const hasOverflow = overflowItems.length > 0;

  // Handle scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Add buffer for header height
      const scrollPosition = window.scrollY + 100;

      // Find current section
      let currentSection = 'hero';
      NAV_ITEMS.forEach(({ id }) => {
        const element = document.getElementById(`section-${id}`);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pt-safe"
      style={{
        background: `linear-gradient(to bottom, ${THEME.background.glass}, transparent)`,
        borderBottom: `1px solid ${THEME.border.inactive}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold" style={{ color: THEME.primary.main }}>
            HEY THERE!
            </span>
          </div>

          {/* Main navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {visibleItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      const element = document.getElementById(`section-${item.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setActiveSection(item.id);
                      }
                    }}
                    className="px-3 py-2 rounded-md flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: isActive ? THEME.text.primary : THEME.text.secondary,
                      background: isActive ? `${THEME.primary.main}20` : 'transparent',
                      border: `1px solid ${isActive ? THEME.border.active : 'transparent'}`,
                      boxShadow: isActive ? `0 0 10px ${THEME.primary.glow}40` : 'none',
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        filter: isActive ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none',
                      }}
                    />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}

              {/* Overflow menu dropdown */}
              {hasOverflow && (
                <div className="relative overflow-trigger" style={{ zIndex: 60 }}>
                  <motion.button
                    onClick={() => setIsOverflowOpen(!isOverflowOpen)}
                    className="relative px-3 py-2.5 rounded-lg flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: isOverflowOpen ? `${THEME.primary.main}40` : 'transparent',
                      color: isOverflowOpen ? THEME.text.primary : THEME.text.secondary,
                      border: `1px solid ${isOverflowOpen ? THEME.border.active : 'transparent'}`,
                      boxShadow: isOverflowOpen ? `0 0 10px ${THEME.primary.glow}40` : 'none'
                    }}
                  >
                    <Plus
                      size={20}
                      className={`transition-transform duration-300 ${isOverflowOpen ? 'rotate-45' : ''}`}
                      style={{
                        filter: isOverflowOpen ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none'
                      }}
                    />
                  </motion.button>

                  {/* Dropdown with fixed positioning */}
                  {isOverflowOpen && (
                    <div
                      className="fixed py-2 overflow-menu min-w-[200px]"
                      style={{
                        top: '60px', // Fixed position from top of viewport
                        right: '20px', // Fixed position from right of viewport
                        background: `linear-gradient(135deg, ${THEME.background.glass}, rgba(30, 30, 40, 0.85))`,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderImage: `linear-gradient(135deg, ${THEME.primary.main}60, ${THEME.primary.light}20) 1`,
                        boxShadow: `0 10px 25px -5px ${THEME.primary.main}30, 0 0 15px ${THEME.primary.glow}20`,
                        borderRadius: '0.8rem',
                        zIndex: 999 // Very high z-index to ensure visibility
                      }}
                    >
                      {overflowItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                          <button
                            key={item.id}
                            onClick={() => {
                              const element = document.getElementById(`section-${item.id}`);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                setActiveSection(item.id);
                              }
                              setIsOverflowOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-white/5"
                            style={{
                              color: isActive ? THEME.primary.light : THEME.text.secondary,
                              position: 'relative'
                            }}
                          >
                            {/* Icon */}
                            <Icon
                              size={18}
                              style={{
                                filter: isActive ? `drop-shadow(0 0 2px ${THEME.primary.glow})` : 'none'
                              }}
                            />

                            {/* Label */}
                            <span
                              style={{
                                textShadow: isActive ? `0 0 5px ${THEME.primary.glow}` : 'none',
                                letterSpacing: '0.5px'
                              }}
                            >
                              {item.label}
                            </span>

                            {/* Active indicator */}
                            {isActive && (
                              <div
                                className="ml-auto w-1.5 h-5 rounded-full"
                                style={{
                                  background: `linear-gradient(to bottom, ${THEME.primary.light}, ${THEME.primary.main})`,
                                  boxShadow: `0 0 8px ${THEME.primary.glow}`
                                }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};