// src/components/sections/Hero/components/TypewriterText.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const TypewriterText = ({ text, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timeout = setTimeout(() => setIsTyping(true), delay);
        timeout = setTimeout(() => setDisplayedText(''), delay + 500);
      }
    } else {
      timeout = setTimeout(() => setIsTyping(true), 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, text, delay]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center font-mono">
      <AnimatePresence mode="wait">
        <motion.span
          key={displayedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {displayedText}
        </motion.span>
      </AnimatePresence>

      <motion.span
        className={`
          ml-1 w-[2px] h-4 bg-current
          ${showCursor ? 'opacity-100' : 'opacity-0'}
        `}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default TypewriterText;