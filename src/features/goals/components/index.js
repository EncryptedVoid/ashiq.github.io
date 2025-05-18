// src/features/goals/index.js
import React from 'react';
import GoalsDesktop from './Goals.desktop';
import GoalsMobile from './Goals.mobile';
import { useMedia } from '@/context/MediaContext';
import { GoalsData } from '@/data/GoalsData';

// Main component with responsive switching
const Goals = () => {
  const isMobile = useMedia();

  return isMobile ?
    <GoalsMobile goals={GoalsData} /> :
    <GoalsDesktop goals={GoalsData} />;
};

// Export both as default AND named export
export default Goals;
export { Goals };

// Export child components as named exports if needed
export { default as GoalCard } from './components/GoalCard.desktop';
export { default as GoalCardMobile } from './components/GoalCard.mobile';
export { default as TimelineItem } from './components/TimelineItem.desktop';
export { default as TimelineItemMobile } from './components/TimelineItem.mobile';