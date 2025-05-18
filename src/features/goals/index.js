// src/features/goals/Goals.jsx
import React from 'react';
import GoalsDesktop from './Goals.desktop';
import GoalsMobile from './Goals.mobile';
import { useMedia } from '@/context/MediaContext';
import { GoalsData } from '@/data/GoalsData';

const Goals = () => {
  const isMobile = useMedia();

  // Pass data to the appropriate component based on screen size
  return isMobile ?
    <GoalsMobile goals={GoalsData} /> :
    <GoalsDesktop goals={GoalsData} />;
};

export default Goals;