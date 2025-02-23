import { useMedia } from '@/hooks';
import { GoalsDesktop } from './Goals.desktop';
import { GoalsMobile } from './Goals.mobile';

export const Goals = () => {
  const { isMobile } = useMedia();
  return isMobile ? <GoalsMobile /> : <GoalsDesktop />;
};

