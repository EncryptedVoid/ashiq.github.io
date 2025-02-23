import { useIsMobile } from '@/hooks/useMedia';

import SkillsDesktop from './Skills.desktop';
import SkillsMobile from './Skills.mobile';

export default function Skills() {
  const isMobile = useIsMobile();
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
}

export * from './components';