import { useMedia } from '@/hooks';
import EducationDesktop from './Education.desktop';
import EducationMobile from './Education.mobile';

export const Education = () => {
  const { isMobile } = useMedia();
  return isMobile ? <EducationMobile /> : <EducationDesktop />;
};