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
  console.log("NavigationMobile component rendering");

  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const programmaticScrollRef = useRef(false);

  console.log("Current active section (mobile):", activeSection);

  // Use IntersectionObserver to track section visibility
  useEffect(() => {
    console.log("Setting up IntersectionObserver (mobile)");

    // Keep track of section visibility percentages
    const sectionVisibility = {};
    SECTION_ORDER.forEach(id => {
      sectionVisibility[id] = 0;
    });

    // Options for the observer
    const options = {
      root: null, // Use viewport as root
      rootMargin: '0px',
      threshold: buildThresholdList(20) // Create multiple thresholds for more accurate tracking
    };

    const updateSectionVisibility = () => {
      // Skip updates during programmatic scrolling
      if (programmaticScrollRef.current) {
        console.log("Skipping visibility update during programmatic scroll");
        return;
      }

      console.log("Section visibility (mobile):", sectionVisibility);

      // Find the section with highest visibility
      let maxVisibility = 0;
      let mostVisibleSection = null;

      Object.entries(sectionVisibility).forEach(([id, visibility]) => {
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = id;
        }
      });

      // If we have a section that's visible, set it as active
      if (mostVisibleSection && maxVisibility > 0) {
        console.log(`Setting active section to: ${mostVisibleSection} (visibility: ${maxVisibility.toFixed(2)})`);
        setActiveSection(mostVisibleSection);
      }
    };

    // Observer callback
    const observerCallback = (entries) => {
      let needsUpdate = false;

      entries.forEach(entry => {
        // Extract section ID from the element ID
        const sectionId = entry.target.id.replace('section-', '');

        // Update the visibility ratio
        const oldVisibility = sectionVisibility[sectionId] || 0;
        const newVisibility = entry.intersectionRatio;

        // Only update if visibility has changed significantly
        if (Math.abs(oldVisibility - newVisibility) > 0.05) {
          sectionVisibility[sectionId] = newVisibility;
          needsUpdate = true;
          console.log(`Section ${sectionId} visibility changed to ${newVisibility.toFixed(2)}`);
        }
      });

      if (needsUpdate) {
        updateSectionVisibility();
      }
    };

    // Create observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section
    const observedSections = [];
    SECTION_ORDER.forEach(id => {
      const element = document.getElementById(`section-${id}`);
      if (element) {
        observer.observe(element);
        observedSections.push(element);
        console.log(`Observing section-${id} (mobile)`);
      } else {
        console.warn(`Could not find section-${id} to observe (mobile)`);
      }
    });

    // Clean up
    return () => {
      console.log("Cleaning up observer (mobile)");
      observedSections.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Helper function to create threshold list for smoother intersection detection
  function buildThresholdList(numSteps) {
    const thresholds = [];
    for (let i = 0; i <= numSteps; i++) {
      const ratio = i / numSteps;
      thresholds.push(ratio);
    }
    return thresholds;
  }

  // Handle navigation click
  const handleNavClick = (itemId) => {
    console.log(`Navigation clicked for section: ${itemId} (mobile)`);

    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      // Set flag to prevent observer from changing active section during programmatic scroll
      programmaticScrollRef.current = true;

      // Close menu after navigation
      setIsMenuOpen(false);
      setExpandedCategory(null);

      // Update active section immediately for better UX
      setActiveSection(itemId);

      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth' });

      // Reset the flag after scrolling animation is likely complete
      setTimeout(() => {
        programmaticScrollRef.current = false;
        console.log("Programmatic scroll complete, resuming observer updates");
      }, 800);
    } else {
      console.error(`Element with ID section-${itemId} not found (mobile)!`);
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

  // Build the menu structure following SECTION_ORDER exactly
  const buildMenuStructure = () => {
    // Track processed categories to avoid duplicates
    const processedCategoryIds = new Set();

    // Create placeholder for menu items
    const menuItems = [];

    // Create a map of categories
    const categoryMap = {};
    CATEGORIES.forEach(category => {
      categoryMap[category.id] = {
        ...category,
        isCategory: true,
        items: []
      };
    });

    // First pass: collect items into their categories
    NAV_ITEMS.forEach(item => {
      if (item.category && categoryMap[item.category]) {
        categoryMap[item.category].items.push(item);
      }
    });

    // Sort each category's items according to SECTION_ORDER
    Object.values(categoryMap).forEach(category => {
      category.items.sort((a, b) =>
        SECTION_ORDER.indexOf(a.id) - SECTION_ORDER.indexOf(b.id)
      );
    });

    // Second pass: add items to the menu in SECTION_ORDER
    SECTION_ORDER.forEach(sectionId => {
      const item = NAV_ITEMS.find(item => item.id === sectionId);
      if (!item) return;

      if (item.category) {
        // This is a categorized item - add its category if not already processed
        const categoryId = item.category;
        if (!processedCategoryIds.has(categoryId) && categoryMap[categoryId]) {
          menuItems.push(categoryMap[categoryId]);
          processedCategoryIds.add(categoryId);
        }
      } else {
        // This is a standalone item
        menuItems.push(item);
      }
    });

    // Filter out standalone items (non-categories)
    const rootItems = menuItems.filter(item => !item.isCategory);
    // Get only categories
    const categories = menuItems.filter(item => item.isCategory);

    return { rootItems, categories };
  };

  // Get the properly ordered menu structure
  const { rootItems, categories } = buildMenuStructure();

  console.log("Mobile menu structure:", {
    rootItems: rootItems.map(item => item.label),
    categories: categories.map(cat => cat.label)
  });

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