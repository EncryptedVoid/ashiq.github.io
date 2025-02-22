// src/utils/utils.js

/**
 * Resolves asset paths correctly in both development and production environments
 * @param {string} path - The asset path to resolve
 * @returns {string} - The correctly resolved path
 */
export const getAssetPath = (path) => {
    if (typeof window !== 'undefined') {
      // Get the base URL from the window location
      const baseUrl = window.location.pathname.includes('/ashiq.github.io')
        ? '/ashiq.github.io'
        : '';

      // Clean the path
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;

      // Combine baseUrl and cleanPath
      return `${baseUrl}/${cleanPath}`;
    }

    // Fallback for SSR
    return path;
  };

  /**
   * Creates a CSS gradient string
   * @param {string} direction - The gradient direction
   * @param {string[]} colors - Array of color values
   * @returns {string} - CSS gradient string
   */
  export const createGradient = (direction = 'to right', colors) => {
    if (!colors || !colors.length) return 'none';
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  };

  /**
   * Generates animation keyframes
   * @param {Object} keyframes - The keyframes object
   * @returns {Object} - Framer Motion animation keyframes
   */
  export const createKeyframes = (keyframes) => keyframes;

  /**
   * Creates timing functions for animations
   * @param {number[]} coords - Cubic bezier coordinates [x1, y1, x2, y2]
   * @returns {string} - CSS cubic-bezier function
   */
  export const createEasing = (coords) => {
    if (!coords || coords.length !== 4) {
      return 'cubic-bezier(0.16, 1, 0.3, 1)'; // Default
    }
    return `cubic-bezier(${coords.join(', ')})`;
  };

  // Export all utilities
  export const utils = {
    getAssetPath,
    createGradient,
    createKeyframes,
    createEasing
  };

  export default utils;