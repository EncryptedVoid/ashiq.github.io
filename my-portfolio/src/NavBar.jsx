import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useIsMobile from './hooks/useIsMobile';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
    { id: 'goals', label: 'Future Goals' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(`section-${item.id}`)
      ).filter(Boolean);

      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id.replace('section-', ''));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get current section label
  const currentSectionLabel = navItems.find(item => item.id === activeSection)?.label || '';

  if (isMobile) {
    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3"
      >
        <div className="relative max-w-lg mx-auto">
          <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl">
            {/* Mobile Header Bar */}
            <div className="flex items-center justify-between px-4 py-2">
              {/* Menu Button and Current Section */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-1.5 -ml-1.5 text-white/60 hover:text-white transition-colors rounded-lg
                           hover:bg-white/10 active:bg-white/20"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Animated Current Section Label */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSectionLabel}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm font-medium text-white"
                  >
                    {currentSectionLabel}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-white/10"
                >
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        w-full px-6 py-3 text-left text-sm
                        transition-all duration-300
                        ${activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white'
                          : 'text-white/60 hover:bg-white/5 hover:text-white/80'}
                      `}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    );
  }

  // Desktop Navigation
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-black/80 backdrop-blur-lg border border-white/10 rounded-full px-2 py-2">
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full
                  transition-all duration-300
                  ${activeSection === item.id ? 'text-white' : 'text-white/60 hover:text-white/80'}
                `}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;