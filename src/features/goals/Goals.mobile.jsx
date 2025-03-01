// src/features/goals/components/GoalsMobile.jsx
import React, { useState } from 'react';
import { GoalCardMobile } from '@/features/goals/components';
import { GoalsData } from '@/data';

export const GoalsMobile = () => {
  const [activeTab, setActiveTab] = useState('all');
  const categories = ['all', 'learning', 'frontend', 'academic', 'career', 'technical'];

  const filteredGoals = activeTab === 'all'
    ? GoalsData
    : GoalsData.filter(goal => goal.type === activeTab);

  return (
    <section className="w-full px-4 py-6">
      {/* Category Pills */}
      <div className="mb-6 overflow-x-auto pb-2 -mx-4 px-4 flex items-center space-x-2 scrollbar-hide">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-300
              ${activeTab === category
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-purple-500/20'
                : 'bg-white/[0.06] text-white/70 hover:bg-white/[0.1]'
              }
            `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Goals List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredGoals.map(goal => (
          <GoalCardMobile key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};

export default GoalsMobile;