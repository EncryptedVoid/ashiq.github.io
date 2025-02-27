import { useMedia } from '@/context/MediaContext';
import { NavigationDesktop } from './Navigation.desktop';
import { NavigationMobile } from './Navigation.mobile';

export const Navigation = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <NavigationMobile /> : <NavigationDesktop />;
};