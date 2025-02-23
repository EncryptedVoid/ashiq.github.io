// src/hooks/index.js
export {
  useMediaQuery,
  useIsMobile as useMedia,
  usePrefersDarkMode,
  usePrefersReducedMotion
} from './useMedia';

export {
  useStaggeredAnimation,
  useScrollAnimation,
  useMousePosition
} from './useAnimation';

export {
  useTheme,
  ThemeProvider
} from './useTheme';