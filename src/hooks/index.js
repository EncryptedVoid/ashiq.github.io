// src/hooks/index.js

// Media hooks
export {
  useMediaQuery,
  useIsMobile as useMedia,  // This will fix the useMedia imports while maintaining the original function
  usePrefersDarkMode,
  usePrefersReducedMotion
} from './useMedia';

// Animation hooks
export {
  useStaggeredAnimation,
  useScrollAnimation,
  useMousePosition
} from './useAnimation';

// Theme hooks
export {
  useTheme,
  ThemeProvider
} from './useTheme';