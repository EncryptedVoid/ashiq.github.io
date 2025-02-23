import { useIsMobile } from '@/hooks/useMedia';
import ProjectsDesktop from './Projects.desktop';
import ProjectsMobile from './Projects.mobile';

export default function Projects() {
  const isMobile = useIsMobile();
  return isMobile ? <ProjectsMobile /> : <ProjectsDesktop />;
}

export * from './components';