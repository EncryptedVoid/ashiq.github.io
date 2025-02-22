import { useMedia } from '@/hooks';
import { EducationDesktop } from './Education.desktop';
import { EducationMobile } from './Education.mobile';

export const Education = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <EducationMobile /> : <EducationDesktop />;
};

export * from './components';