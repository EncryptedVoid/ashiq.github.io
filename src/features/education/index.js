// src/features/education/index.js
import { useMedia } from '@/context/MediaContext';
import EducationDesktop from './Education.desktop';
import EducationMobile from './Education.mobile';

export const Education = () => {
  const isMobile = useMedia();
  return isMobile ? <EducationMobile /> : <EducationDesktop />;
};

// Default export for compatibility
export default Education;