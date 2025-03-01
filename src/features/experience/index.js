// src/features/experience/index.js
import ExperienceDesktop from './Experience.desktop';
import ExperienceMobile from './Experience.mobile';
import { useMedia } from '@/context/MediaContext';

const Experience = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <ExperienceMobile /> : <ExperienceDesktop />;
};

export { Experience, ExperienceDesktop, ExperienceMobile };
export default Experience;