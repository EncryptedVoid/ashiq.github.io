import { useMedia } from '@/context/MediaContext';
import SkillsDesktop from './Skills.desktop';
import SkillsMobile from './Skills.mobile';

export const Skills = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
};

