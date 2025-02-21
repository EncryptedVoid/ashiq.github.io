import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Home, Code, Briefcase, FolderGit2, GraduationCap, Mail, Star, Award, Target } from 'lucide-react';

// Desktop Navbar Component
const DesktopNavbar = () => {
  const [activeSection, setActiveSection] = React.useState('hero');

  // Section configuration matching App.js
  const sections = [
    { id: 'hero', label: 'Home', icon: Home, hidden: false },
    { id: 'skills', label: 'Skills', icon: Code, hidden: false },
    { id: 'experience', label: 'Work', icon: Briefcase, hidden: false },
    { id: 'projects', label: 'Projects', icon: FolderGit2, hidden: false },
    { id: 'testimonials', label: 'Reviews', icon: Star, hidden: false },
    { id: 'education', label: 'Education', icon: GraduationCap, hidden: false },
    { id: 'certifications', label: 'Certs', icon: Award, hidden: false },
    { id: 'contact', label: 'Contact', icon: Mail, hidden: false },
    { id: 'goals', label: 'Goals', icon: Target, hidden: false }
  ];

  // Filter visible sections for desktop
  const navItems = sections.filter(section => !section.hidden);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(`section-${navItems[i].id}`);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
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
    </div>
  );
};

// Mobile Navbar Component
const MobileNavbar = () => {
  const [activeSection, setActiveSection] = React.useState('hero');

  // Section configuration matching App.js
  const sections = [
    { id: 'hero', label: 'Home', icon: Home, hidden: false },
    { id: 'skills', label: 'Skills', icon: Code, hidden: false },
    { id: 'experience', label: 'Work', icon: Briefcase, hidden: false },
    { id: 'projects', label: 'Projects', icon: FolderGit2, hidden: false },
    { id: 'testimonials', label: 'Reviews', icon: Star, hidden: false },
    { id: 'education', label: 'Education', icon: GraduationCap, hidden: false },
    { id: 'certifications', label: 'Certs', icon: Award, hidden: true }, // Hidden on mobile
    { id: 'contact', label: 'Contact', icon: Mail, hidden: false },
    { id: 'goals', label: 'Goals', icon: Target, hidden: true } // Hidden on mobile
  ];

  // Filter visible sections for mobile
  const navItems = sections.filter(section => !section.hidden);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(`section-${navItems[i].id}`);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-lg mx-auto flex justify-around items-center">
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
                text-[10px] mt-1 font-medium
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
  );
};

// Navigation Wrapper Component
const Navigation = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navigation;