// src/features/navigation/Navigation.desktop.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NAV_ITEMS,
  CATEGORIES,
  SECTION_ORDER,
  THEME,
  DESKTOP_NAV_CONFIG as CONFIG
} from '@data/navigationData';
import { ChevronDown, Plus } from 'lucide-react';

export const NavigationDesktop = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  // Refs for click outside detection
  const categoryDropdownRefs = useRef({});
  const overflowMenuRef = useRef(null);

  // Organize nav items based on SECTION_ORDER
  const standaloneItems = NAV_ITEMS.filter(item => item.category === null);
  const categorizedItemsMap = CATEGORIES.reduce((acc, category) => {
    acc[category.id] = NAV_ITEMS.filter(item => item.category === category.id);
    return acc;
  }, {});

  // Create main navigation array following SECTION_ORDER
  const mainNavItems = [];

  // Track which categories we've already added
  const addedCategories = new Set();

  // Add items in SECTION_ORDER
  SECTION_ORDER.forEach(sectionId => {
    const item = NAV_ITEMS.find(item => item.id === sectionId);
    if (!item) return;

    // If it's a standalone item, add it
    if (item.category === null) {
      mainNavItems.push(item);
    }
    // If it's in a category and we haven't added that category yet, add the category
    else if (!addedCategories.has(item.category)) {
      const category = CATEGORIES.find(cat => cat.id === item.category);
      if (category) {
        mainNavItems.push({
          ...category,
          isCategory: true,
          items: categorizedItemsMap[category.id]
        });
        addedCategories.add(item.category);
      }
    }
  });

  // Determine visible and overflow items
  const visibleItems = mainNavItems.slice(0, CONFIG.maxVisibleItems);
  const overflowItems = mainNavItems.slice(CONFIG.maxVisibleItems);
  const hasOverflow = overflowItems.length > 0;

  // Handle scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Get the viewport height
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Get all section elements in section order for proper tracking
      const sectionElements = SECTION_ORDER
        .map(id => ({ id, element: document.getElementById(`section-${id}`) }))
        .filter(item => item.element !== null);

      // Find the active section by checking which one is in view
      let activeFound = false;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();

        // Check if the section is in view (top half of viewport)
        if (rect.top <= (viewportHeight / 2)) {
          setActiveSection(id);
          activeFound = true;
          break;
        }
      }

      // If no section is in view (we're at the top), default to first section
      if (!activeFound && scrollPosition < 100) {
        setActiveSection(SECTION_ORDER[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close category dropdowns
      if (openCategoryId && !categoryDropdownRefs.current[openCategoryId]?.contains(event.target)) {
        setOpenCategoryId(null);
      }

      // Close overflow menu
      if (isOverflowOpen && !overflowMenuRef.current?.contains(event.target)) {
        setIsOverflowOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openCategoryId, isOverflowOpen]);

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Check if a category contains the active section
  const getCategoryActiveClass = (categoryItems) => {
    return categoryItems.some(item => item.id === activeSection);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 pt-safe"
      style={{
        background: `linear-gradient(to bottom, ${THEME.background.glass}, transparent)`,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${THEME.border.inactive}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold" style={{ color: THEME.primary.main }}>
              {CONFIG.logoText}
            </span>
          </div>

          {/* Main navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {visibleItems.map((item) => {
              if (item.isCategory) {
                // Category dropdown
                const isActive = getCategoryActiveClass(item.items);
                const isOpen = openCategoryId === item.id;
                const Icon = item.icon;

                return (
                  <div key={item.id} className="relative" ref={el => categoryDropdownRefs.current[item.id] = el}>
                    <motion.button
                      onClick={() => setOpenCategoryId(isOpen ? null : item.id)}
                      className="px-3 py-2 rounded-md flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        color: isActive || isOpen ? THEME.text.primary : THEME.text.secondary,
                        background: isActive || isOpen ? `${THEME.primary.main}20` : 'transparent',
                        border: `1px solid ${isActive || isOpen ? THEME.border.active : 'transparent'}`,
                        boxShadow: isActive || isOpen ? `0 0 10px ${THEME.primary.main}40` : 'none',
                      }}
                    >
                      <Icon
                        size={18}
                        style={{
                          filter: isActive || isOpen ? `drop-shadow(0 0 2px ${THEME.primary.main})` : 'none',
                        }}
                      />
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </motion.button>

                    {/* Category dropdown */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 min-w-[180px] py-2 rounded-lg z-50"
                          style={{
                            background: `linear-gradient(135deg, ${THEME.background.glass}, rgba(30, 30, 40, 0.85))`,
                            backdropFilter: 'blur(12px)',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderImage: `linear-gradient(135deg, ${THEME.primary.main}60, ${THEME.primary.light}20) 1`,
                            boxShadow: `0 10px 25px -5px ${THEME.primary.main}30, 0 0 15px ${THEME.primary.main}20`,
                          }}
                        >
                          {item.items.map(subItem => {
                            const SubIcon = subItem.icon;
                            const isSubActive = activeSection === subItem.id;

                            return (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  scrollToSection(subItem.id);
                                  setOpenCategoryId(null);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2 transition-colors duration-200 hover:bg-white/5"
                                style={{
                                  color: isSubActive ? THEME.primary.light : THEME.text.secondary,
                                }}
                              >
                                <SubIcon
                                  size={16}
                                  style={{
                                    filter: isSubActive ? `drop-shadow(0 0 2px ${THEME.primary.main})` : 'none'
                                  }}
                                />
                                <span>{subItem.label}</span>

                                {/* Active indicator */}
                                {isSubActive && (
                                  <div
                                    className="ml-auto w-1.5 h-5 rounded-full"
                                    style={{
                                      background: `linear-gradient(to bottom, ${THEME.primary.light}, ${THEME.primary.main})`,
                                      boxShadow: `0 0 8px ${THEME.primary.main}`
                                    }}
                                  />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                // Standard navigation item
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-3 py-2 rounded-md flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      color: isActive ? THEME.text.primary : THEME.text.secondary,
                      background: isActive ? `${THEME.primary.main}20` : 'transparent',
                      border: `1px solid ${isActive ? THEME.border.active : 'transparent'}`,
                      boxShadow: isActive ? `0 0 10px ${THEME.primary.main}40` : 'none',
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        filter: isActive ? `drop-shadow(0 0 2px ${THEME.primary.main})` : 'none',
                      }}
                    />
                    <span>{item.label}</span>
                  </motion.button>
                );
              }
            })}

            {/* Overflow menu */}
            {hasOverflow && (
              <div className="relative" ref={overflowMenuRef}>
                <motion.button
                  onClick={() => setIsOverflowOpen(!isOverflowOpen)}
                  className="relative px-3 py-2.5 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: isOverflowOpen ? `${THEME.primary.main}40` : 'transparent',
                    color: isOverflowOpen ? THEME.text.primary : THEME.text.secondary,
                    border: `1px solid ${isOverflowOpen ? THEME.border.active : 'transparent'}`,
                    boxShadow: isOverflowOpen ? `0 0 10px ${THEME.primary.main}40` : 'none'
                  }}
                >
                  <Plus
                    size={20}
                    className={`transition-transform duration-300 ${isOverflowOpen ? 'rotate-45' : ''}`}
                    style={{
                      filter: isOverflowOpen ? `drop-shadow(0 0 2px ${THEME.primary.main})` : 'none'
                    }}
                  />
                </motion.button>

                {/* Overflow dropdown menu */}
                <AnimatePresence>
                  {isOverflowOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-1 min-w-[180px] py-2 rounded-lg z-50"
                      style={{
                        background: `linear-gradient(135deg, ${THEME.background.glass}, rgba(30, 30, 40, 0.85))`,
                        backdropFilter: 'blur(12px)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderImage: `linear-gradient(135deg, ${THEME.primary.main}60, ${THEME.primary.light}20) 1`,
                        boxShadow: `0 10px 25px -5px ${THEME.primary.main}30, 0 0 15px ${THEME.primary.main}20`,
                      }}
                    >
                      {overflowItems.map(item => {
                        if (item.isCategory) {
                          // Category in overflow
                          const CategoryIcon = item.icon;
                          const isCategoryActive = getCategoryActiveClass(item.items);

                          return (
                            <div key={item.id} className="w-full">
                              <button
                                className="w-full flex items-center justify-between gap-2 px-4 py-2 font-medium"
                                style={{
                                  color: isCategoryActive ? THEME.primary.main : THEME.text.primary
                                }}
                              >
                                <div className="flex items-center gap-2">
                                  <CategoryIcon
                                    size={16}
                                    style={{
                                      filter: isCategoryActive ? `drop-shadow(0 0 2px ${THEME.primary.main})` : 'none'
                                    }}
                                  />
                                  <span>{item.label}</span>
                                </div>
                              </button>

                              <div className="pl-4">
                                {item.items.map(subItem => {
                                  const SubIcon = subItem.icon;
                                  const isSubActive = activeSection === subItem.id;

                                  return (
                                    <button
                                      key={subItem.id}
                                      onClick={() => {
                                        scrollToSection(subItem.id);
                                        setIsOverflowOpen(false);
                                      }}
                                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors"
                                      style={{
                                        color: isSubActive ? THEME.primary.light : THEME.text.secondary,
                                      }}
                                    >
                                      <SubIcon size={16} />
                                      <span>{subItem.label}</span>

                                      {isSubActive && (
                                        <div
                                          className="ml-auto w-1.5 h-5 rounded-full"
                                          style={{
                                            background: `linear-gradient(to bottom, ${THEME.primary.light}, ${THEME.primary.main})`,
                                            boxShadow: `0 0 8px ${THEME.primary.main}`
                                          }}
                                        />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        } else {
                          // Standard item in overflow
                          const Icon = item.icon;
                          const isActive = activeSection === item.id;

                          return (
                            <button
                              key={item.id}
                              onClick={() => {
                                scrollToSection(item.id);
                                setIsOverflowOpen(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/5 transition-colors"
                              style={{
                                color: isActive ? THEME.primary.light : THEME.text.secondary,
                              }}
                            >
                              <Icon size={16} />
                              <span>{item.label}</span>

                              {isActive && (
                                <div
                                  className="ml-auto w-1.5 h-5 rounded-full"
                                  style={{
                                    background: `linear-gradient(to bottom, ${THEME.primary.light}, ${THEME.primary.main})`,
                                    boxShadow: `0 0 8px ${THEME.primary.main}`
                                  }}
                                />
                              )}
                            </button>
                          );
                        }
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};