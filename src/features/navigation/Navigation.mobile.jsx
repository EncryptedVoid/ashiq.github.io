// src/features/navigation/Navigation.mobile.jsx
import React, { useState, useEffect } from 'react';
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
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scrolling to update active section with improved accuracy
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);

      // Get the viewport height and calculate buffer
      const viewportHeight = window.innerHeight;
      const triggerPosition = currentScrollY + viewportHeight * 0.3;

      // Get all section elements in section order for proper tracking
      const sectionElements = SECTION_ORDER
        .map(id => ({ id, element: document.getElementById(`section-${id}`) }))
        .filter(item => item.element !== null);

      // Find the active section by checking which one is in view
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        const rect = element.getBoundingClientRect();

        // Check if the section is in view
        if (rect.top <= (viewportHeight / 2)) {
          setActiveSection(id);
          break;
        }
      }

      // If no section matched (we're at the top), default to first section
      if (currentScrollY < 100) {
        setActiveSection(SECTION_ORDER[0]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle navigation click
  const handleNavClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      // Close menu after navigation
      setIsMenuOpen(false);
      setExpandedCategory(null);

      // Smooth scroll to section
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(itemId);
    }
  };

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Get items for mobile bottom bar based on SECTION_ORDER and priority positions
  const getBottomBarItems = () => {
    const maxBottomItems = CONFIG.bottomBar.maxItems - 1; // Reserve one slot for the menu button
    const priorityPositions = CONFIG.bottomBar.priorityPositions;

    // Get the sections at the priority positions
    const prioritySections = priorityPositions.map(pos => {
      const index = pos >= 0 ? pos : SECTION_ORDER.length + pos;
      return SECTION_ORDER[index];
    }).filter(Boolean);

    // First, collect standalone items from priority sections
    const standaloneItems = NAV_ITEMS
      .filter(item => !item.category && prioritySections.includes(item.id))
      .slice(0, maxBottomItems);

    // If we still have space, add categories
    const remainingSlots = maxBottomItems - standaloneItems.length;

    // Organize categories by their first item's position in SECTION_ORDER
    const categoriesWithPosition = CATEGORIES.map(category => {
      const items = NAV_ITEMS.filter(item => item.category === category.id);
      const firstItemId = items.length > 0 ? items[0].id : '';
      const position = SECTION_ORDER.indexOf(firstItemId);
      return {
        ...category,
        position,
        items
      };
    }).sort((a, b) => a.position - b.position);

    // Take categories up to the remaining slot count
    const categories = categoriesWithPosition.slice(0, remainingSlots);

    return [
      ...standaloneItems,
      ...categories.map(category => ({
        ...category,
        isCategory: true,
        items: category.items
      }))
    ];
  };

  // Organize menu items by category
  const organizeMenuItems = () => {
    // Root items (no category)
    const rootItems = NAV_ITEMS.filter(item => !item.category);

    // Items organized by category
    const categorizedItems = CATEGORIES.map(category => ({
      ...category,
      items: NAV_ITEMS.filter(item => item.category === category.id)
    }));

    return { rootItems, categorizedItems };
  };

  const { rootItems, categorizedItems } = organizeMenuItems();
  const bottomBarItems = getBottomBarItems();

  // Check if a category contains the active section
  const getCategoryActiveClass = (categoryItems) => {
    return categoryItems.some(item => item.id === activeSection);
  };

  return (
    <>
      {/* Fixed bottom navigation bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 pb-safe"
        style={{
          background: THEME.background.glass,
          backdropFilter: 'blur(12px)',
          borderTop: `1px solid ${THEME.border.inactive}`,
          boxShadow: `0 -4px 10px rgba(0, 0, 0, 0.1)`
        }}
      >
        <div className="flex justify-between px-2">
          {/* Bottom bar items */}
          {bottomBarItems.map(item => {
            if (item.isCategory) {
              // Display category in bottom bar
              const Icon = item.icon;
              const isCategoryActive = getCategoryActiveClass(item.items);

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMenuOpen(true);
                    // Preselect this category when opening the menu
                    setExpandedCategory(item.id);
                  }}
                  className="flex flex-col items-center py-3 px-2 relative flex-1"
                >
                  {/* Active indicator for categories */}
                  {isCategoryActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute top-0 w-10 h-1 rounded-b-full"
                      style={{
                        background: THEME.primary.main,
                        boxShadow: `0 0 8px ${THEME.primary.main}`
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  <Icon
                    className="w-5 h-5 mb-1"
                    color={isCategoryActive ? THEME.primary.main : THEME.text.secondary}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={{
                      color: isCategoryActive ? THEME.primary.main : THEME.text.secondary
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            } else {
              // Regular item in bottom bar
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex flex-col items-center py-3 px-2 relative flex-1"
                >
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute top-0 w-10 h-1 rounded-b-full"
                      style={{
                        background: THEME.primary.main,
                        boxShadow: `0 0 8px ${THEME.primary.main}`
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  <Icon
                    className="w-5 h-5 mb-1"
                    color={isActive ? THEME.primary.main : THEME.text.secondary}
                  />
                  <span
                    className="text-[10px] font-medium"
                    style={{
                      color: isActive ? THEME.primary.main : THEME.text.secondary
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            }
          })}

          {/* Menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col items-center py-3 px-2 relative flex-1"
          >
            <Menu
              className="w-5 h-5 mb-1"
              color={THEME.text.secondary}
            />
            <span
              className="text-[10px] font-medium"
              style={{ color: THEME.text.secondary }}
            >
              Menu
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 pt-safe"
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
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Categorized menu items */}
              {categorizedItems.map(category => {
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