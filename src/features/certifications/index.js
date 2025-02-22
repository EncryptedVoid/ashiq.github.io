import { useIsMobile } from '../../hooks/useIsMobile';
import CertificationsDesktop from './Certifications.desktop';
import CertificationsMobile from './Certifications.mobile';

export default function Certifications() {
  const isMobile = useIsMobile();
  return isMobile ? <CertificationsMobile /> : <CertificationsDesktop />;
}
