import { useMedia } from '@/context/MediaContext';
import HeroDesktop from './Hero.desktop';
import HeroMobile from './Hero.mobile';

export const Hero = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
};
