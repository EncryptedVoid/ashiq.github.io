// src/hooks/useMedia.js
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  // Initialize with the current window state if possible
  const [matches, setMatches] = useState(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Define listener
    const listener = (e) => {
      setMatches(e.matches);
    };

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
    // Older browsers
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};

export const useIsMobile = (breakpoint = 768) => {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
};

export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};