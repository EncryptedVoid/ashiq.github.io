import { useMedia } from '@/hooks';
import { TestimonialsDesktop } from './Testimonials.desktop';
import { TestimonialsMobile } from './Testimonials.mobile';

export const Testimonials = () => {
  const isMobile = useMedia('(max-width: 768px)');
console.log('Hero isMobile:', isMobile);
  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
};


