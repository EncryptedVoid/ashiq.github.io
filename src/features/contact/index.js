import { useMedia } from '@/hooks';
import ContactDesktop from './Contact.desktop';
import ContactMobile from './Contact.mobile';

export const Contact = () => {
  const { isMobile } = useMedia();
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};