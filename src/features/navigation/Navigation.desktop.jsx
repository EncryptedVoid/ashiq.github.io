import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Code, Briefcase, FolderGit2, GraduationCap, Mail, Star } from 'lucide-react';
import useIsMobile from '@hooks/useIsMobile';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Work', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll direction
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      // Handle active section
      const scrollPosition = window.scrollY + (isMobile ? 200 : 100);

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(`section-${navItems[i].id}`);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const offset = isMobile ? 0 : 80;
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (isMobile) {
    return (
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isScrollingUp ? 0 : 100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-lg mx-auto flex justify-around items-center px-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex flex-col items-center py-3 px-2 relative w-1/5"
                >
                  <div className={`
                    p-2 rounded-lg transition-all duration-300
                    ${activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-white/60'
                    }
                  `}>
                    <Icon size={20} />
                  </div>
                  <span className={`
                    text-[10px] mt-1 font-medium transition-colors duration-300
                    ${activeSection === item.id ? 'text-blue-400' : 'text-white/60'}
                  `}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="h-[env(safe-area-inset-bottom)] bg-black/95" />
        </div>
      </motion.div>
    );
  }

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
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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

export default NavBar;