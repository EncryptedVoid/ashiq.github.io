import { useIsMobile } from '../../hooks/useIsMobile';
import HeroDesktop from './Hero.desktop';
import HeroMobile from './Hero.mobile';

export default function Hero() {
  const isMobile = useIsMobile();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
