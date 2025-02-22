import { useMedia } from '@/hooks';
import { GoalsDesktop } from './Goals.desktop';
import { GoalsMobile } from './Goals.mobile';

export const Goals = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <GoalsMobile /> : <GoalsDesktop />;
};

export * from './components';