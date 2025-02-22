// src/hooks/useAnimation.js
import { useEffect, useState, useRef } from 'react';
import { usePrefersReducedMotion } from './useMedia';

/**
 * Custom hook for staggered animations
 * @param {number} itemCount - Number of items to stagger
 * @param {number} staggerDelay - Delay between each item in ms
 * @param {number} initialDelay - Initial delay before starting in ms
 * @returns {Array} - Array of delay values for each item
 */
export const useStaggeredAnimation = (
  itemCount = 1,
  staggerDelay = 100,
  initialDelay = 0
) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    // Return zero delays for all items if user prefers reduced motion
    return Array(itemCount).fill(0);
  }

  return Array.from({ length: itemCount }, (_, i) =>
    initialDelay + (i * staggerDelay)
  );
};

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Intersection observer options
 * @returns {Object} - ref to attach to element and whether it's in view
 */
export const useScrollAnimation = (
  options = { threshold: 0.1, rootMargin: '0px', triggerOnce: true }
) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const { triggerOnce, ...observerOptions } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);

        // Unobserve after first trigger if triggerOnce is true
        if (triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setIsInView(false);
      }
    }, observerOptions);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, triggerOnce]);

  return { ref, isInView };
};

/**
 * Hook for tracking mouse or touch position
 * @param {boolean} initiallyActive - Whether to start tracking immediately
 * @returns {Object} - Current position and functions to start/stop tracking
 */
export const useMousePosition = (initiallyActive = true) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(initiallyActive);

  const startTracking = () => setIsTracking(true);
  const stopTracking = () => setIsTracking(false);

  useEffect(() => {
    if (!isTracking) return;

    const updatePosition = (event) => {
      const { clientX, clientY } =
        event.touches ? event.touches[0] : event;

      setPosition({ x: clientX, y: clientY });
    };

    // Mouse events
    window.addEventListener('mousemove', updatePosition);

    // Touch events
    window.addEventListener('touchmove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('touchmove', updatePosition);
    };
  }, [isTracking]);

  return {
    position,
    isTracking,
    startTracking,
    stopTracking
  };
};

export default {
  useStaggeredAnimation,
  useScrollAnimation,
  useMousePosition
};