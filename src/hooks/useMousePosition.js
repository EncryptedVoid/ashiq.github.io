// src/hooks/useMousePosition.js
import { useState, useEffect } from 'react';

export const useMousePosition = () => {
const [mousePosition, setMousePosition] = useState(null);
const [isInitialized, setIsInitialized] = useState(false);

useEffect(() => {
    const updateMousePosition = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });

    if (!isInitialized) {
        setIsInitialized(true);
    }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', (e) => {
    updateMousePosition(e.touches[0]);
    });

    return () => {
    window.removeEventListener('mousemove', updateMousePosition);
    window.removeEventListener('touchmove', (e) => {
        updateMousePosition(e.touches[0]);
    });
    };
}, [isInitialized]);

return mousePosition;
};

export default useMousePosition;