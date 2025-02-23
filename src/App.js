import React, { Suspense } from 'react';
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
  const isMobile = useIsMobile();

  const sections = [
    { id: 'hero', Component: Hero },
    { id: 'skills', Component: Skills },
    { id: 'experience', Component: Experience },
    { id: 'projects', Component: Projects },
    { id: 'testimonials', Component: Testimonials },
    { id: 'education', Component: Education },
    { id: 'certifications', Component: Certifications, mobileHidden: true },
    { id: 'contact', Component: Contact },
    { id: 'goals', Component: Goals, mobileHidden: true }
  ];

  const visibleSections = sections.filter(
    section => !section.mobileHidden || !isMobile
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <main
          className="relative w-full"
          style={{
            paddingTop: isMobile ? '0' : '6rem',
            paddingBottom: isMobile ? '5rem' : '0'
          }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="relative w-full space-y-20">
              {visibleSections.map(({ id, Component }) => (
                <section
                  key={id}
                  id={`section-${id}`}
                  className="relative w-full"
                >
                  <Component />
                </section>
              ))}
            </div>
          </div>
        </main>
      </Suspense>
    </div>
  );
}

export default App;