import { useMedia } from '@/context/MediaContext'
import ProjectsDesktop from './Projects.desktop';
import ProjectsMobile from './Projects.mobile';

export const Projects = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
};

