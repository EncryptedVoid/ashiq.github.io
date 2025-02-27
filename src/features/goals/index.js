import { useMedia } from '@/context/MediaContext';
import { GoalsDesktop } from './Goals.desktop';
import { GoalsMobile } from './Goals.mobile';

export const Goals = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <GoalsMobile /> : <GoalsDesktop />;
};

