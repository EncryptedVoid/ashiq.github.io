// src/components/sections/Experience/components/TechnologyTag.jsx
import React from 'react';

const TechnologyTag = ({ technology }) => {
  // For technologies provided with emojis in the format '🔄 Test Automation'
  // We'll extract and display them as provided
  const hasEmoji = technology.includes(' ');
  let emoji = '';
  let text = technology;

  if (hasEmoji) {
    const parts = technology.split(' ');
    emoji = parts[0];
    text = parts.slice(1).join(' ');
  }

  return (
    <span
      className="
        px-3 py-1
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        rounded-full
        text-xs text-white/60 hover:text-white/80
        transition-all duration-300
        hover:-translate-y-0.5
        inline-flex items-center gap-1.5
      "
    >
      {emoji && <span>{emoji}</span>}
      <span>{text}</span>
    </span>
  );
};

export default TechnologyTag;