import { useMedia } from '@/context/MediaContext'
import EducationDesktop from './Education.desktop';
import EducationMobile from './Education.mobile';

export const Education = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <EducationMobile /> : <EducationDesktop />;
};