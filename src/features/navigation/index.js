// src/features/navigation/Navigation.jsx
import React, { useEffect, useState } from 'react';
import { NavigationDesktop } from './Navigation.desktop';
import { NavigationMobile } from './Navigation.mobile';
import { validateNavStructure } from '@data/navigationData';

export const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Validate navigation structure
    validateNavStructure();

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <>
      {isMobile ? <NavigationMobile /> : <NavigationDesktop />}
    </>
  );
};

export { NavigationDesktop, NavigationMobile };