import { useMedia } from '@/hooks';
import { CertificationsDesktop } from './Certifications.desktop';
import { CertificationsMobile } from './Certifications.mobile';

export const Certifications = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <CertificationsMobile /> : <CertificationsDesktop />;
};

export * from './components';