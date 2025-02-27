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

const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Section Header Component
const SectionHeader = ({ id, title, subtitle }) => {
  // Different gradient colors for different sections
  const gradients = {
    hero: "from-blue-500 to-purple-500",
    skills: "from-purple-500 to-pink-500",
    experience: "from-green-500 to-blue-500",
    projects: "from-orange-500 to-red-500",
    testimonials: "from-pink-500 to-purple-500",
    education: "from-blue-500 to-cyan-500",
    certifications: "from-indigo-500 to-blue-500",
    contact: "from-purple-500 to-indigo-500",
    goals: "from-red-500 to-orange-500"
  };

  return (
    <div className="py-8 md:py-12 mb-6 md:mb-8 text-center">
      <h2 className={`text-3xl md:text-4xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${gradients[id] || "from-white to-gray-300"} bg-clip-text text-transparent`}>
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

function App() {
  // Directly check window width instead of using a hook
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    setIsMobile(window.innerWidth <= 768);

    // Add resize handler
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Log for debugging
  useEffect(() => {
    console.log('Is mobile view:', isMobile);
  }, [isMobile]);

  // Define all sections and their metadata
  const allSectionsData = {
    hero: {
      id: 'hero',
      Component: Hero,
    },
    experience: {
      id: 'experience',
      Component: Experience,
      title: "Professional Experience",
      subtitle: "My journey and contributions in the tech industry"
    },
    skills: {
      id: 'skills',
      Component: Skills,
      title: "Skills & Expertise",
      subtitle: "Technical capabilities and professional competencies"
    },
    projects: {
      id: 'projects',
      Component: Projects,
      title: "Project Showcase",
      subtitle: "Featured work and technical implementations"
    },
    education: {
      id: 'education',
      Component: Education,
      title: "Education",
      subtitle: "Academic background and qualifications"
    },
    contact: {
      id: 'contact',
      Component: Contact,
      title: "Get In Touch",
      subtitle: "Connect with me professionally"
    },
    // Desktop-only sections
    testimonials: {
      id: 'testimonials',
      Component: Testimonials,
      title: "What People Say",
      subtitle: "Feedback and testimonials from colleagues and clients",
      desktopOnly: true
    },
    certifications: {
      id: 'certifications',
      Component: Certifications,
      title: "Certifications",
      subtitle: "Professional qualifications and ongoing learning",
      desktopOnly: true
    },
    goals: {
      id: 'goals',
      Component: Goals,
      title: "Future Goals",
      subtitle: "Upcoming ventures and aspirations",
      desktopOnly: true
    }
  };

  // Define the order of sections
  const sectionOrder = [
    'hero',
    'experience',
    'skills',
    'projects',
    'testimonials',
    'education',
    'certifications',
    'contact',
    'goals'
  ];

  // Build sections based on device
  const sectionsToRender = sectionOrder
    .filter(sectionId => {
      const section = allSectionsData[sectionId];
      // Only include desktop sections if not on mobile
      return !section.desktopOnly || !isMobile;
    })
    .map(sectionId => allSectionsData[sectionId]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <Suspense fallback={<LoadingSpinner />}>
        <main className="relative w-full" style={{
          paddingTop: isMobile ? '0' : '6rem',
          paddingBottom: isMobile ? '5rem' : '0'
        }}>
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {sectionsToRender.map(({ id, Component, title, subtitle }) => (
              <section key={id} id={`section-${id}`} className="relative w-full mb-16 md:mb-24">
                {/* Don't show header for hero section */}
                {id !== 'hero' && title && (
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