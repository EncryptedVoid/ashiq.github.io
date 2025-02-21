// src/components/sections/Goals/components/TimelineItem.jsx
import React from 'react';

const TimelineItem = ({ item }) => (
  <div className={`
    relative pl-6 mb-6 opacity-70 -translate-x-2.5
    transition-all duration-400 ease-out
    ${item.isActive ? 'opacity-100 translate-x-0' : ''}
  `}>
    {/* Timeline Dot */}
    <div className={`
      absolute left-0 top-2 w-2 h-2
      bg-gradient-to-r from-purple-500 to-pink-500
      rounded-full transition-all duration-400
      ${item.isActive ? 'scale-150 shadow-lg shadow-purple-500/20' : ''}
    `} />

    <div className="text-sm font-medium tracking-wide text-gray-400 mb-2">
      {item.date}
    </div>
    <div className="text-lg text-white/90 leading-relaxed">
      {item.content}
    </div>
  </div>
);

export default TimelineItem;