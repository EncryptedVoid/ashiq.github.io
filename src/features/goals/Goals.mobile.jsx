// src/features/goals/Goals.mobile.jsx
import React from 'react';
import GoalCard from '@features/goals/components/GoalCard.mobile';
import { GoalsData } from '@data/GoalsData';

const GoalsMobile = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto">
        {GoalsData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};

export default GoalsMobile;