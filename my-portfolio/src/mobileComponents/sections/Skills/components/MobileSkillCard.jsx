// src/components/sections/Skills/components/MobileSkillCard.jsx
import React, { useState } from 'react';
import { Clock, Code, Activity } from 'lucide-react';

const MobileSkillCard = ({ skill }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={`
        bg-white/[0.03] rounded-lg p-2.5
        border border-white/[0.06]
        ${isPressed ? 'scale-[0.98] bg-white/[0.04]' : ''}
        transition-all duration-150
        active:scale-[0.98] active:bg-white/[0.04]
      `}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onTouchCancel={() => setIsPressed(false)}
    >
      <div className="flex items-start gap-2">
        {/* Left Column: Name and Year */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-white truncate mb-0.5">
            {skill.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-white/40">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span className="truncate">{skill.yearStarted}</span>
          </div>
        </div>

        {/* Right Column: Metrics */}
        <div className="flex flex-col items-end gap-1 ml-2">
          {/* Projects */}
          <div className="flex items-center gap-1 text-xs">
            <Code className="w-3 h-3 text-blue-400" />
            <span className="text-white/80 font-medium">
              {skill.metrics.projectsCompleted}
            </span>
          </div>
          {/* Activity */}
          <div className="flex items-center gap-1 text-xs">
            <Activity className="w-3 h-3 text-green-400" />
            <span className="text-white/80">High</span>
          </div>
        </div>
      </div>

      {/* Tags - Bottom Row */}
      {skill.tags.length > 0 && (
        <div className="flex gap-1 mt-2 flex-wrap">
          {skill.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex px-1.5 py-0.5 text-[10px] leading-none rounded-full
                       bg-white/[0.06] text-white/60"
            >
              {tag}
            </span>
          ))}
          {skill.tags.length > 2 && (
            <span className="inline-flex px-1.5 py-0.5 text-[10px] leading-none rounded-full
                           bg-white/[0.06] text-white/60">
              +{skill.tags.length - 2}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileSkillCard;