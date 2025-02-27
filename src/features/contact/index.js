import { useMedia } from '@/context/MediaContext';
import ContactDesktop from './Contact.desktop';
import ContactMobile from './Contact.mobile';

export const Contact = () => {
  const isMobile = useMedia('(max-width: 768px)');
  console.log('Hero isMobile:', isMobile);
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};