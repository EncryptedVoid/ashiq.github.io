import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation/Navigation';
import useIsMobile from './hooks/useIsMobile';
import ImageTest from './ImageTest';

// Desktop component imports - using dynamic imports for code splitting
const Hero = React.lazy(() => import('./components/sections/Hero/Hero'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Experience = React.lazy(() => import('./components/sections/Experience/Experience'));
const Certifications = React.lazy(() => import('./components/sections/Certifications'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Goals = React.lazy(() => import('./components/sections/Goals'));
const Socials = React.lazy(() => import('./components/sections/DigitalPresence'));
const Education = React.lazy(() => import('./src/features/education/Education.desktop'));

// Mobile component imports
const MobileHero = React.lazy(() => import('./mobileComponents/sections/Hero/Hero'));
const MobileTestimonials = React.lazy(() => import('./mobileComponents/sections/Testimonials'));
const MobileSkills = React.lazy(() => import('./mobileComponents/sections/Skills'));
const MobileExperience = React.lazy(() => import('./mobileComponents/sections/Experience/MobileExperience'));
const MobileCertifications = React.lazy(() => import('./mobileComponents/sections/Certifications'));
const MobileProjects = React.lazy(() => import('./mobileComponents/sections/Projects'));
const MobileGoals = React.lazy(() => import('./mobileComponents/sections/Goals'));
const MobileSocials = React.lazy(() => import('./mobileComponents/sections/DigitalPresence'));
const MobileEducation = React.lazy(() => import('./mobileComponents/sections/Education'));

function Portfolio() {
  const isMobile = useIsMobile();

  // Define section order and visibility
  const sections = [
    { name: 'hero', hidden: false },
    { name: 'skills', hidden: false },
    { name: 'experience', hidden: false },
    { name: 'projects', hidden: false },
    { name: 'testimonials', hidden: false },
    { name: 'education', hidden: false },
    { name: 'certifications', hidden: isMobile },
    { name: 'contact', hidden: false },
    { name: 'goals', hidden: isMobile }
  ];

  const components = {
    hero: { Desktop: Hero, Mobile: MobileHero },
    testimonials: { Desktop: Testimonials, Mobile: MobileTestimonials },
    skills: { Desktop: Skills, Mobile: MobileSkills },
    experience: { Desktop: Experience, Mobile: MobileExperience },
    education: { Desktop: Education, Mobile: MobileEducation },
    projects: { Desktop: Projects, Mobile: MobileProjects },
    contact: { Desktop: Socials, Mobile: MobileSocials },
    goals: { Desktop: Goals, Mobile: MobileGoals },
    certifications: { Desktop: Certifications, Mobile: MobileCertifications },
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <Navigation />

      <React.Suspense
        fallback={
          <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        {/* Main content container */}
        {/* Main content with conditional padding */}
        <main
          className="relative w-full"
          style={{
            paddingTop: isMobile ? '0' : '6rem', // Add padding for desktop navbar
            paddingBottom: isMobile ? '5rem' : '0' // Add padding for mobile navbar
          }}
        >
          {/* Inner max-width container */}
          <div className="relative w-full max-w-7xl mx-auto px-4">
            {/* Sections container */}
            <div className="relative w-full space-y-20">
              {sections
                .filter(section => !section.hidden)
                .map(section => {
                  const Component = isMobile
                    ? components[section.name].Mobile
                    : components[section.name].Desktop;

                  return (
                    <section
                      key={section.name}
                      id={`section-${section.name.toLowerCase()}`}
                      className="relative w-full"
                    >
                      <Component />
                    </section>
                  );
                })}
            </div>
          </div>
        </main>
      </React.Suspense>
    </div>
  );
}

export default Portfolio;