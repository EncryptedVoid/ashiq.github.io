// src/components/sections/Goals/index.jsx
import React from 'react';
import GoalCard from './components/GoalCard';
import SectionHeader from './components/SectionHeader';
import { GoalsData } from '../../../data/GoalsData';
import { TypewriterText } from '../../../styles/TypewriterText'


const MobileGoals = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <TypewriterText
        text="Long-term Professional Goals"
        size={3}
        typingSpeed={100}
        delayBeforeRestart={60000}
      />

      <div className="
        grid grid-cols-1 md:grid-cols-2
        gap-6 max-w-7xl mx-auto
      ">
        {GoalsData.map(goal => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </section>
  );
};

export default MobileGoals;