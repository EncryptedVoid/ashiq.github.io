// src/MediaContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const MediaContext = createContext(null);

export const MediaProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(max-width: 768px)').matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)');

    const updateMedia = () => {
      setIsMobile(media.matches);
    };

    if (media.addEventListener) {
      media.addEventListener('change', updateMedia);
      return () => media.removeEventListener('change', updateMedia);
    } else {
      media.addListener(updateMedia);
      return () => media.removeListener(updateMedia);
    }
  }, []);

  return (
    <MediaContext.Provider value={{ isMobile }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => {
  const context = useContext(MediaContext);
  if (context === null) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context.isMobile;
};