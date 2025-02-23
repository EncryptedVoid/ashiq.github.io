import { useMedia } from '@/hooks';
import ProjectsDesktop from './Projects.desktop';
import ProjectsMobile from './Projects.mobile';

export const Projects = () => {
  const { isMobile } = useMedia();
  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
};

