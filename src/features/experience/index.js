import { useMedia } from '@/context/MediaContext'
import ExperienceDesktop from './Experience.desktop';
import ExperienceMobile from './Experience.mobile';

export const Experience = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};