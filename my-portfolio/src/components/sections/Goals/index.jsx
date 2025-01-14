// src/components/sections/Goals/index.jsx
import React from 'react';
import GoalCard from './components/GoalCard';
import SectionHeader from './components/SectionHeader';
import { goalsData } from '../../../../public/data/goalsData';

const Goals = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <SectionHeader
        title="Long-term Professional Goals"
        subtitle="Charting the path forward with clear objectives and milestones"
      />

      <div className="
        grid grid-cols-1 md:grid-cols-2
        gap-6 max-w-7xl mx-auto
      ">
        {goalsData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};

export default Goals;