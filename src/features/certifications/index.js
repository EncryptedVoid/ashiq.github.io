// index.js
import { useMedia } from '@/context/MediaContext';
import CertificationsDesktop from './Certifications.desktop';
import CertificationsMobile from './Certifications.mobile';

const Certifications = () => {
  const isMobile = useMedia();
  return isMobile ? <CertificationsMobile /> : <CertificationsDesktop />;
};

export { Certifications };