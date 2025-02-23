import { useMedia } from '@/hooks';
import SkillsDesktop from './Skills.desktop';
import SkillsMobile from './Skills.mobile';

export const Skills = () => {
  const { isMobile } = useMedia();
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

