import { useIsMobile } from '@hooks/useIsMobile';
import TestimonialsDesktop from './Testimonials.desktop';
import TestimonialsMobile from './Testimonials.mobile';

export default function Testimonials() {
  const isMobile = useIsMobile();
  return isMobile ? <TestimonialsMobile /> : <TestimonialsDesktop />;
}
