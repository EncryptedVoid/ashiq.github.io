// src/features/goals/components/GoalCardMobile.mobile.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TimelineItemMobile from '@/features/goals/components/TimelineItem.mobile';
import { gradientStyles } from '@styles/styles';

const GoalCardMobile = ({ goal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        relative
        bg-white/[0.03]
        backdrop-blur-md
        border border-white/[0.06]
        rounded-xl
        opacity-0 translate-y-8
        transition-all duration-500 ease-out
        overflow-hidden
      `}
    >
      {/* Subtle Gradient Indicator Line */}
      <div className={`
        absolute top-0 left-0 right-0 h-1
        bg-gradient-to-r ${gradientStyles[goal.type]}
      `} />

      {/* Card Header - Always visible */}
      <div
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <div className={`
            w-10 h-10
            rounded-lg
            bg-gradient-to-br ${gradientStyles[goal.type]}
            flex items-center justify-center
            shadow-md shadow-purple-500/20
          `}>
            <i className={`${goal.icon} text-white text-sm`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {goal.title}
            </h3>
            <div className="mt-1 flex items-center space-x-2">
              <div className="h-1.5 w-16 bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${gradientStyles[goal.type]}`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{goal.progress}%</span>
            </div>
          </div>
        </div>

        <ChevronDown
          className={`
            w-5 h-5 text-white/70
            transition-transform duration-300
            ${isExpanded ? 'rotate-180' : 'rotate-0'}
          `}
        />
      </div>

      {/* Expandable Content */}
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-out
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pb-5 pt-2">
          <div className="pl-3 border-l border-white/10 space-y-3">
            {goal.timeline.map((item, index) => (
              <TimelineItemMobile key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCardMobile;