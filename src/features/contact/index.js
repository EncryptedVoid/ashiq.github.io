import { useMedia } from '@/hooks';
import { ContactDesktop } from './Contact.desktop';
import { ContactMobile } from './Contact.mobile';

export const Contact = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export * from './components';