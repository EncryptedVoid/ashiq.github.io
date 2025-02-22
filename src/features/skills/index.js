import { useIsMobile } from '../../hooks/useIsMobile';
import SkillsDesktop from './Skills.desktop';
import SkillsMobile from './Skills.mobile';

export default function Skills() {
  const isMobile = useIsMobile();
  return isMobile ? <SkillsMobile /> : <SkillsDesktop />;
}
