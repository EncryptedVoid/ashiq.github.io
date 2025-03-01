// COMPLETE THE ACTUAL LIST OF EXPERIENCES
// UPDATE THE MOBILE NAVBAR TO SHOW ALL SECTIONS WITHOUT CATAGORIES
// UPDATE NAVBAR SO THAT THE CHOSEN GROUP IS FULLY EXPANDED IF A GROUP IS CHOSEN
// UPDATE/OPTIMISE MOBILE EXPERIENCE CARDS


import React, { Suspense, useEffect, useState } from 'react';
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
import {
  SECTION_ORDER,
  SECTIONS,
  SECTION_GRADIENTS,
  validateNavStructure
} from '@data/navigationData';

const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Section Header Component
const SectionHeader = ({ id, title, subtitle }) => {
  return (
    <div className="py-4 md:py-6 mb-6 md:mb-8 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${SECTION_GRADIENTS[id] || SECTION_GRADIENTS.default} bg-clip-text text-transparent`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg mx-auto max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Map of component imports
const COMPONENTS = {
  hero: Hero,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  testimonials: Testimonials,
  education: Education,
  certifications: Certifications,
  goals: Goals,
  contact: Contact
};

function App() {
  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    setIsMobile(window.innerWidth <= 768);

    // Add resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Validate navigation structure
    validateNavStructure();

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get sections to render based on the SECTION_ORDER
  const sectionsToRender = SECTION_ORDER
    .filter(sectionId => {
      const section = SECTIONS[sectionId];
      // Skip desktop-only sections on mobile if needed
      return section && (!section.desktopOnly || !isMobile);
    })
    .map(sectionId => {
      const section = SECTIONS[sectionId];
      return {
        id: sectionId,
        Component: COMPONENTS[sectionId],
        title: section.title,
        subtitle: section.subtitle,
        showHeader: section.showHeader !== false, // Default to true if not specified
      };
    });

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <main className="relative w-full" style={{
          paddingTop: isMobile ? '0' : '6rem',
          paddingBottom: isMobile ? '5rem' : '0'
        }}>
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {sectionsToRender.map(({ id, Component, title, subtitle, showHeader }) => (
              <section key={id} id={`section-${id}`} className="relative w-full mb-16 md:mb-24">
                {/* Only show header if showHeader is true */}
                {showHeader && title && (
                  <SectionHeader id={id} title={title} subtitle={subtitle} />
                )}
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