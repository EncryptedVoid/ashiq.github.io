// src/features/goals/components/TimelineItemMobile.mobile.jsx
import React from 'react';

const TimelineItemMobile = ({ item }) => (
  <div className={`
    transition-all duration-300 ease-out
    ${item.isActive ? 'opacity-100' : 'opacity-70'}
  `}>
    {/* Timeline Dot with Date Label */}
    <div className="flex items-center mb-1.5">
      <div className={`
        w-2 h-2 flex-shrink-0
        rounded-full
        ${item.isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 ring-2 ring-purple-500/20'
          : 'bg-white/30'
        }
        transition-all duration-300
      `} />

      <div className="ml-3 text-xs font-medium text-white/60">
        {item.date}
      </div>
    </div>

    {/* Content */}
    <div className={`
      ml-6 text-sm text-white/90 leading-snug
      ${item.isActive ? 'font-medium' : 'font-normal'}
    `}>
      {item.content}
    </div>
  </div>
);

export default TimelineItemMobile;