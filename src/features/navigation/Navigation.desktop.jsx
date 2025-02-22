import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, FolderGit2, GraduationCap, Mail } from 'lucide-react';
import { useMedia } from '@/hooks';
import { NAV_ITEMS } from './navigation.constants';

export const NavigationDesktop = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useMedia('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);

      const scrollPosition = window.scrollY + (isMobile ? 200 : 100);

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(`section-${NAV_ITEMS[i].id}`);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobile]);

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