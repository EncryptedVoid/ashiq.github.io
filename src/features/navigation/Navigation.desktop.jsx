// src/features/navigation/Navigation.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from './navigation.constants';

export const NavigationDesktop = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: isScrollingUp ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-full p-2">
          <div className="flex justify-center items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(`section-${item.id}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`
                    px-4 py-2 rounded-full
                    flex items-center gap-2
                    transition-all duration-300
                    ${activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white/80'
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};