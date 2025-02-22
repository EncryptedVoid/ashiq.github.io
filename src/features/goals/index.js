// src/features/goals/index.js
import { useIsMobile } from '@hooks/useIsMobile';
import GoalsDesktop from './Goals.desktop';
import GoalsMobile from './Goals.mobile';

export function Goals() {
  const isMobile = useIsMobile();
  return isMobile ? <GoalsMobile /> : <GoalsDesktop />;
}

export { GoalsDesktop, GoalsMobile };