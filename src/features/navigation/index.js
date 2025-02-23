import { useMedia } from '@/hooks';
import { NavigationDesktop } from './Navigation.desktop';
import { NavigationMobile } from './Navigation.mobile';

export const Navigation = () => {
  const { isMobile } = useMedia();
  return isMobile ? <NavigationMobile /> : <NavigationDesktop />;
};