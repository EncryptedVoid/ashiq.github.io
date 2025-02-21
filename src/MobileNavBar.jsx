import React, { useState } from 'react';
import { Home, Code, Briefcase, FolderGit2, Star } from 'lucide-react';
import useIsMobile from './hooks/useIsMobile';

const MobileNavBar = () => {
  const [active, setActive] = useState('hero');
  const isMobile = useIsMobile();

  const mobileNavItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Home' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { id: 'experience', icon: <Briefcase size={20} />, label: 'Work' },
    { id: 'projects', icon: <FolderGit2 size={20} />, label: 'Projects' },
    { id: 'testimonials', icon: <Star size={20} />, label: 'Reviews' }
  ];

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        {mobileNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              const element = document.getElementById(`section-${item.id}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setActive(item.id);
              }
            }}
            className="flex flex-col items-center py-3 px-2 relative w-1/5"
          >
            <div className={active === item.id ? 'text-blue-400' : 'text-white/60'}>
              {item.icon}
            </div>
            <span className={`text-[10px] mt-1 font-medium ${
              active === item.id ? 'text-blue-400' : 'text-white/60'
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-black/95" />
    </div>
  );
};

export default MobileNavBar;