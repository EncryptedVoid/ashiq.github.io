import { useMedia } from '@/hooks';
import { TestimonialsDesktop } from './Testimonials.desktop';
import { TestimonialsMobile } from './Testimonials.mobile';

export const Testimonials = () => {
  const { isMobile } = useMedia();
  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
};


