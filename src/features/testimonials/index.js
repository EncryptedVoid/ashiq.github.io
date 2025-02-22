import { useMedia } from '@/hooks';
import { TestimonialsDesktop } from './Testimonials.desktop';
import { TestimonialsMobile } from './Testimonials.mobile';

export const Testimonials = () => {
  const isMobile = useMedia('(max-width: 768px)');
  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
};

export * from './components';