import React from 'react';
import { useIsMobile } from './hooks';
import Navigation from './components/navigation';

// Import features using dynamic imports
const Hero = React.lazy(() => import('./features/hero'));
const Skills = React.lazy(() => import('./features/skills'));
const Experience = React.lazy(() => import('./features/experience'));
const Projects = React.lazy(() => import('./features/projects'));
const Testimonials = React.lazy(() => import('./features/testimonials'));
const Education = React.lazy(() => import('./features/education'));
const Certifications = React.lazy(() => import('./features/certifications'));
const Contact = React.lazy(() => import('./features/contact'));
const Goals = React.lazy(() => import('./features/goals'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen w-full flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function Portfolio() {
  const isMobile = useIsMobile();

  // Define section order and visibility
  const sections = [
    { id: 'hero', component: Hero, hidden: false },
    { id: 'skills', component: Skills, hidden: false },
    { id: 'experience', component: Experience, hidden: false },
    { id: 'projects', component: Projects, hidden: false },
    { id: 'testimonials', component: Testimonials, hidden: false },
    { id: 'education', component: Education, hidden: false },
    { id: 'certifications', component: Certifications, hidden: isMobile },
    { id: 'contact', component: Contact, hidden: false },
    { id: 'goals', component: Goals, hidden: isMobile }
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <React.Suspense fallback={<LoadingSpinner />}>
        <main
          className="relative w-full"
          style={{
            paddingTop: isMobile ? '0' : '6rem',
            paddingBottom: isMobile ? '5rem' : '0'
          }}
        >
          <div className="relative w-full max-w-7xl mx-auto px-4">
            <div className="relative w-full space-y-20">
              {sections
                .filter(section => !section.hidden)
                .map(({ id, component: Component }) => (
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
      </React.Suspense>
    </div>
  );
}

export default Portfolio;