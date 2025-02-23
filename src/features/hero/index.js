import { useMedia } from '@/hooks';
import HeroDesktop from './Hero.desktop';
import HeroMobile from './Hero.mobile';

export const Hero = () => {
  const { isMobile } = useMedia();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};
