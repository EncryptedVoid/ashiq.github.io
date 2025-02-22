// src/hooks/useMedia.js
import { useState, useEffect } from 'react';

/**
 * Hook for detecting if the current viewport matches a media query
 * @param {string} query - CSS media query
 * @returns {boolean} - Whether the media query matches
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Initial check
    const media = window.matchMedia(query);
    setMatches(media.matches);

    // Create listener function
    const listener = () => setMatches(media.matches);

    // Modern approach (standard)
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
    // Legacy approach (older browsers)
    else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};

/**
 * Hook for detecting mobile devices
 * @param {number} breakpoint - Breakpoint in pixels
 * @returns {boolean} - Whether the device is mobile
 */
export const useIsMobile = (breakpoint = 768) => {
  return useMediaQuery(`(max-width: ${breakpoint}px)`);
};

/**
 * Hook for detecting dark mode preference
 * @returns {boolean} - Whether user prefers dark mode
 */
export const usePrefersDarkMode = () => {
  return useMediaQuery('(prefers-color-scheme: dark)');
};

/**
 * Hook for detecting reduced motion preference
 * @returns {boolean} - Whether user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
};

export default {
  useMediaQuery,
  useIsMobile,
  usePrefersDarkMode,
  usePrefersReducedMotion
};