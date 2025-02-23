// src/features/navigation/Navigation.mobile.jsx
import React, { useState } from 'react';
import { NAV_ITEMS } from './navigation.constants';

export const NavigationMobile = () => {
  const [active, setActive] = useState('hero');

  const handleNavClick = (itemId) => {
    const element = document.getElementById(`section-${itemId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActive(itemId);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-white/10 backdrop-blur-xl">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="flex flex-col items-center py-3 px-2 relative w-1/5"
            >
              <div className={active === item.id ? 'text-blue-400' : 'text-white/60'}>
                <Icon size={20} />
              </div>
              <span className={`text-[10px] mt-1 font-medium ${
                active === item.id ? 'text-blue-400' : 'text-white/60'
              }`}>
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