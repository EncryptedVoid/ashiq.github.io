import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from './hooks/useIsMobile';

// Desktop component imports - using dynamic imports for code splitting
const Hero = React.lazy(() => import('./components/sections/Hero/Hero'));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials'));
const Skills = React.lazy(() => import('./components/sections/Skills'));
const Experience = React.lazy(() => import('./components/sections/Experience/Experience'));
const Certifications = React.lazy(() => import('./components/sections/Certifications'));
const Projects = React.lazy(() => import('./components/sections/Projects'));
const Goals = React.lazy(() => import('./components/sections/Goals'));
const Socials = React.lazy(() => import('./components/sections/DigitalPresence'));
const Education = React.lazy(() => import('./components/sections/Education'));

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
    { name: 'Hero', hidden: false },
    { name: 'Skills', hidden: false },
    { name: 'Experience', hidden: false },
    { name: 'Projects', hidden: false },
    { name: 'Testimonials', hidden: false },
    { name: 'Education', hidden: false },
    { name: 'Certifications', hidden: isMobile },
    { name: 'Socials', hidden: false },
    { name: 'Goals', hidden: isMobile }
  ];

  const components = {
    Hero: { Desktop: Hero, Mobile: MobileHero },
    Testimonials: { Desktop: Testimonials, Mobile: MobileTestimonials },
    Skills: { Desktop: Skills, Mobile: MobileSkills },
    Experience: { Desktop: Experience, Mobile: MobileExperience },
    Education: { Desktop: Education, Mobile: MobileEducation },
    Projects: { Desktop: Projects, Mobile: MobileProjects },
    Socials: { Desktop: Socials, Mobile: MobileSocials },
    Goals: { Desktop: Goals, Mobile: MobileGoals },
    Certifications: { Desktop: Certifications, Mobile: MobileCertifications },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <React.Suspense
        fallback={
          <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <main className="flex flex-col w-full items-center">
          <div className={`
            w-full relative
            ${!isMobile ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : 'px-4'}
            space-y-20
          `}>
            {sections
              .filter(section => !section.hidden)
              .map(section => {
                const Component = isMobile
                  ? components[section.name].Mobile
                  : components[section.name].Desktop;

                return (
                  <motion.div
                    key={section.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-full"
                    id={`section-${section.name.toLowerCase()}`}
                  >
                    <Component />
                  </motion.div>
                );
              })}
          </div>
        </main>
      </React.Suspense>
    </div>
  );
}

export default Portfolio;