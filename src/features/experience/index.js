import { useMedia } from '@/hooks';
import ExperienceDesktop from './Experience.desktop';
import ExperienceMobile from './Experience.mobile';

export const Experience = () => {
  const { isMobile } = useMedia();
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};