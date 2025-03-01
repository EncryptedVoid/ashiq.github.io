// src/features/navigation/Navigation.mobile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  NAV_ITEMS,
  CATEGORIES,
  SECTION_ORDER,
  THEME,
  MOBILE_NAV_CONFIG as CONFIG
} from '@data/navigationData';
import { Menu, X, ChevronRight } from 'lucide-react';

export const NavigationMobile = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Handle scrolling to update active section with improved accuracy
  useEffect(() => {
    const handleScroll = () => {
      // Skip if scrolling was triggered by clicking a navigation item
      if (isScrollingRef.current) return;

      // Get the viewport height for calculations
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Get all section elements in section order for proper tracking
      const sectionElements = SECTION_ORDER
        .map(id => ({ id, element: document.getElementById(`section-${id}`) }))
        .filter(item => item.element !== null);

      // Find the active section by checking which one is in view
      let activeFound = false;

      for (let i = 0; i < sectionElements.length; i++) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();

        // Consider a section active if it occupies the middle of the viewport
        // or if it's the first one and we're at the top
        if ((rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5) ||
            (i === 0 && rect.top > -rect.height * 0.5)) {
          setActiveSection(id);
          activeFound = true;
          break;
        }
      }

      // If no section is in view (rare case), default to first section
      if (!activeFound && sectionElements.length > 0) {
        setActiveSection(sectionElements[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set the active section on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      // Set flag to prevent scroll handler from changing active section
      isScrollingRef.current = true;

      // Close menu after navigation
      setIsMenuOpen(false);
      setExpandedCategory(null);

      // Update active section immediately for better UX
      setActiveSection(itemId);

      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth' });

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Reset the flag after scrolling animation is likely complete - shorter timeout
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800); // Slightly shorter timeout (800ms instead of 1000ms)
    }
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Get current section icon
  const getCurrentSectionIcon = () => {
    // First check standard nav items
    const activeItem = NAV_ITEMS.find(item => item.id === activeSection);
    if (activeItem) {
      return activeItem.icon;
    }

    // Default to menu icon if not found
    return Menu;
  };

  const ActiveIcon = getCurrentSectionIcon();

  // Create correctly ordered menu structure
  // This follows the exact order in SECTION_ORDER
  const createOrderedMenu = () => {
    // First, set up the exact order we want from SECTION_ORDER
    const menuOrder = [...SECTION_ORDER]; // Use SECTION_ORDER directly

    // Create lookup maps
    const navItemMap = NAV_ITEMS.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    const categoryMap = CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = {
        ...cat,
        isCategory: true,
        items: []
      };
      return acc;
    }, {});

    // First pass: collect items into categories
    NAV_ITEMS.forEach(item => {
      if (item.category && categoryMap[item.category]) {
        categoryMap[item.category].items.push(item);
      }
    });

    // Sort items within each category according to SECTION_ORDER
    Object.values(categoryMap).forEach(category => {
      category.items.sort((a, b) =>
        menuOrder.indexOf(a.id) - menuOrder.indexOf(b.id)
      );
    });

    // Create final menu structure
    const rootItems = [];
    const categories = [];
    const addedCategoryIds = new Set();

    // Follow menuOrder exactly
    menuOrder.forEach(sectionId => {
      const item = navItemMap[sectionId];
      if (!item) return; // Skip if not found

      if (!item.category) {
        // It's a standalone item
        rootItems.push(item);
      } else if (!addedCategoryIds.has(item.category)) {
        // It's the first item from a category we haven't added yet
        addedCategoryIds.add(item.category);
        if (categoryMap[item.category]) {
          categories.push(categoryMap[item.category]);
        }
      }
    });

    return { rootItems, categories };
  };

  // Get the properly ordered menu structure
  const { rootItems, categories } = createOrderedMenu();

  return (
    <>
      {/* Centered floating menu button */}
      <div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        style={{
          filter: isMenuOpen ? 'none' : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))'
        }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative rounded-full w-14 h-14 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: isMenuOpen ? 'transparent' : THEME.primary.main,
          }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" color={'transparent'} />
          ) : (
            <ActiveIcon className="w-6 h-6" color="#fff" />
          )}
        </motion.button>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-black/95 pt-safe"
            style={{ backdropFilter: 'blur(8px)' }}
          >
            {/* Menu header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <h2 className="text-xl font-bold" style={{ color: THEME.primary.main }}>
                {CONFIG.menuHeaderText}
              </h2>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setExpandedCategory(null);
                }}
                className="p-2 rounded-full"
                style={{ background: `${THEME.primary.main}20` }}
              >
                <X className="w-5 h-5" color={THEME.primary.light} />
              </button>
            </div>

            {/* Current section indicator */}
            <div className="px-6 py-3 bg-black/30">
              <p className="text-sm font-medium opacity-70">Current section:</p>
              <p className="font-semibold" style={{ color: THEME.primary.main }}>
                {NAV_ITEMS.find(item => item.id === activeSection)?.label || 'Home'}
              </p>
            </div>

            {/* Menu content - scrollable */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {/* Root menu items */}
              {rootItems.length > 0 && (
                <div className="mb-6">
                  {rootItems.map(item => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="w-full flex items-center gap-3 py-3.5 px-4 rounded-lg mb-2"
                        style={{
                          background: isActive ? `${THEME.primary.main}10` : 'transparent',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: isActive ? THEME.border.active : 'transparent'
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          color={isActive ? THEME.primary.main : THEME.text.secondary}
                        />
                        <span
                          className="font-medium"
                          style={{
                            color: isActive ? THEME.primary.main : THEME.text.primary
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
                              boxShadow: `0 0 8px ${THEME.primary.main}`
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Categorized menu items */}
              {categories.map(category => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;
                const hasActiveItem = category.items.some(item => item.id === activeSection);

                return (
                  <div key={category.id} className="mb-4">
                    {/* Category header */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg mb-1"
                      style={{
                        background: (isExpanded || hasActiveItem) ? `${THEME.primary.main}10` : 'transparent',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: (isExpanded || hasActiveItem) ? THEME.border.active : 'transparent'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className="w-5 h-5"
                          color={(isExpanded || hasActiveItem) ? THEME.primary.main : THEME.text.secondary}
                        />
                        <span
                          className="font-medium"
                          style={{
                            color: (isExpanded || hasActiveItem) ? THEME.primary.main : THEME.text.primary
                          }}
                        >
                          {category.label}
                        </span>
                      </div>

                      <ChevronRight
                        className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                        color={THEME.text.secondary}
                      />
                    </button>

                    {/* Category items */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 space-y-1 py-1">
                            {category.items.map(item => {
                              const SubIcon = item.icon;
                              const isActive = activeSection === item.id;

                              return (
                                <button
                                  key={item.id}
                                  onClick={() => handleNavClick(item.id)}
                                  className="w-full flex items-center gap-3 py-3 px-4 rounded-lg"
                                  style={{
                                    background: isActive ? `${THEME.primary.main}10` : 'transparent'
                                  }}
                                >
                                  <SubIcon
                                    className="w-4 h-4"
                                    color={isActive ? THEME.primary.main : THEME.text.secondary}
                                  />
                                  <span
                                    style={{
                                      color: isActive ? THEME.primary.main : THEME.text.secondary
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
                                        boxShadow: `0 0 8px ${THEME.primary.main}`
                                      }}
                                    />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};