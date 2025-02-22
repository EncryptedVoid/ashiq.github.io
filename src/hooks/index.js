// src/hooks/index.js

// Media hooks
export {
    useMediaQuery,
    useIsMobile,
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

  // Add any additional hooks here...