// src/features/goals/components/GoalCard.desktop.jsx
import React from 'react';
import { gradientStyles, cardStyles } from '@/styles/styles';
import TimelineItem from './TimelineItem.desktop'

const GoalCard = ({ goal }) => {
  // Move all hooks above any conditional returns
  if (!goal || !goal.type) {
    return null;
  }

  const gradient = gradientStyles[goal.type] || 'from-gray-500/20 to-gray-500/20';
  const cardStyle = cardStyles[goal.type] || cardStyles.default;

  return (
    <div className={`
      relative overflow-hidden
      glass-card glass-card-hover
      transition-all duration-700 ease-out
      hover:-translate-y-2 ${cardStyle?.shadow}
      cursor-pointer
      bg-gradient-to-br ${gradient}
    `}>
      {/* Gradient Background */}
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-700
        bg-gradient-to-br ${gradientStyles[goal.type]}
        group-hover:opacity-[0.05]
      `} />

      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className={`
          w-12 h-12
          rounded-xl
          bg-gradient-to-br ${gradientStyles[goal.type]}
          flex items-center justify-center
          shadow-lg shadow-purple-500/20
          transition-transform duration-700
          hover:scale-110 hover:-rotate-3
        `}>
          <i className={`${goal.icon} text-white text-xl`} />
        </div>
        <h2 className="text-2xl font-bold text-white">
          {goal.title}
        </h2>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {goal.timeline.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${gradientStyles[goal.type]}
          transition-all duration-1000 ease-out`}
          style={{ width: `${goal.progress}%` }}
        />
      </div>
    </div>
  );
};

export default GoalCard;