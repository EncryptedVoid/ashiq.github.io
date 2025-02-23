import { useMedia } from '@/hooks';
import CertificationsDesktop from './Certifications.desktop';
import CertificationsMobile from './Certifications.mobile';

export const Certifications = () => {
  const { isMobile } = useMedia();
  return isMobile ? <CertificationsMobile /> : <CertificationsDesktop />;
};