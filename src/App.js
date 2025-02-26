import React, { Suspense } from 'react';
import { useMedia } from '@/context/MediaContext'
import {
  Hero,
  Skills,
  Experience,
  Projects,
  Testimonials,
  Education,
  Certifications,
  Contact,
  Goals,
  Navigation
} from '@/features';

const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  const isMobile = useMedia('(max-width: 768px)');
  console.log('Hero isMobile:', isMobile);

  const sections = [
    { id: 'hero', Component: Hero },
    { id: 'testimonials', Component: Testimonials, mobileHidden: true },
    { id: 'experience', Component: Experience },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'education', Component: Education },
    { id: 'certifications', Component: Certifications, mobileHidden: true },
    { id: 'contact', Component: Contact },
    { id: 'goals', Component: Goals, mobileHidden: true },
  ];

  // Only show non-mobile-hidden sections on mobile
  const visibleSections = sections.filter(section =>
    !isMobile || !section.mobileHidden
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <main className="relative w-full" style={{
          paddingTop: isMobile ? '0' : '6rem',
          paddingBottom: isMobile ? '5rem' : '0'
        }}>
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {visibleSections.map(({ id, Component }) => (
              <section key={id} id={`section-${id}`} className="relative w-full">
                <Component />
              </section>
            ))}
          </div>
        </main>
      </Suspense>
    </div>
  );
}

export default App;