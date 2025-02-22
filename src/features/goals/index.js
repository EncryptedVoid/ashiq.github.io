import { useIsMobile } from '../../hooks/useIsMobile';
import GoalsDesktop from './Goals.desktop';
import GoalsMobile from './Goals.mobile';

export default function Goals() {
  const isMobile = useIsMobile();
  return isMobile ? <GoalsMobile /> : <GoalsDesktop />;
}
