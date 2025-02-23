import React, { useState, useEffect, useCallback } from 'react';
import { useMedia } from '@/hooks';

export const TypewriterText = ({
  text,
  typingSpeed = 100,
  delayBeforeRestart = 60000,
  size = 1,
  fromColor = '#FA8072',
  toColor = '#ac8be0'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Convert rem size to cursor height (1.2x text size for better proportion)
  const cursorHeight = `${size * 1.2}rem`;

  // Create gradient styles if colors are provided
  const textStyles = {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: `${size}rem`,
    letterSpacing: '0.05em', // Added wider spacing for the mono font
    fontWeight: '400',
    ...(fromColor && toColor ? {
      background: `linear-gradient(to right, ${fromColor}, ${toColor})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    } : {})
  };

  // Create cursor gradient styles if colors are provided
  const cursorStyles = {
    height: cursorHeight,
    ...(fromColor && toColor ? {
      background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`
    } : {})
  };

  // Initialize the typing animation
  const startTyping = useCallback(() => {
    setIsTyping(true);
    setIsDeleting(false);
    setDisplayedText('');
  }, []);

  // Handle the typing animation
  useEffect(() => {
    let timeout;

    if (!isTyping) return;

    if (!isDeleting) {
      // Typing forward
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Finished typing
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeRestart);
      }
    } else {
      // Deleting text
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length - 1));
        }, typingSpeed / 2); // Delete faster than typing
      } else {
        // Start over
        timeout = setTimeout(startTyping, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, isDeleting, text, typingSpeed, delayBeforeRestart, startTyping]);

  // Start the cycle on mount
  useEffect(() => {
    startTyping();
  }, [startTyping]);

  // Cursor blink effect - only when text is fully typed
  useEffect(() => {
    if (!isTyping || displayedText.length < text.length || isDeleting) {
      setShowCursor(true);
      return;
    }

    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [isTyping, displayedText.length, text.length, isDeleting]);

  // Check if the screen is mobile
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);

  // Apply styles only for mobile views
  const containerStyles = {
    display: 'flex',
    justifyContent: isMobile ? 'center' : 'flex-start', // Center text on mobile, left align otherwise
    width: '100%', // Ensure it takes full width
    ...(isMobile && { textAlign: 'center' }) // Center text within the container on mobile
  };

  return (
    <div style={containerStyles}>
      <span style={textStyles}>
        {displayedText}
      </span>
      <span
        className={`ml-1 w-[2px] transition-opacity duration-200 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        style={cursorStyles}
      />
    </div>
  );
};

export default TypewriterText;