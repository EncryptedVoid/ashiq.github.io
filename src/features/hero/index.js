// src/features/hero/index.js
import { useIsMobile } from '@hooks/useMedia';
import HeroDesktop from './Hero.desktop';
import HeroMobile from './Hero.mobile';

export function Hero() {
  const isMobile = useIsMobile();
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}

export { HeroDesktop, HeroMobile };