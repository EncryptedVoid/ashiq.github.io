// src/features/navigation/Navigation.mobile.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CATEGORIES, THEME } from './navigation.constants';
import { Menu, X, ChevronRight } from 'lucide-react';

export const NavigationMobile = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

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

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Get items for mobile bottom bar (prioritize root items + most used)
  const getBottomBarItems = () => {
    const priority = ['hero', 'experience', 'skills', 'contact'];
    return NAV_ITEMS
      .filter(item => priority.includes(item.id))
      .slice(0, 4); // Maximum 4 items
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
                Menu
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