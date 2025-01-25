/**
 * Portfolio.js
 * Main portfolio application component that handles responsive rendering of sections
 * for both desktop and mobile views.
 *
 * Architecture:
 * - Uses a responsive design approach with separate mobile/desktop components
 * - Implements component mapping for cleaner conditional rendering
 * - Utilizes Tailwind CSS for styling
 */

import React from 'react';
// Custom hook to detect mobile viewport
import useIsMobile from './hooks/useIsMobile';

// Desktop component imports
// Each section is modularized into its own component for better maintainability
import Hero from './components/sections/Hero/Hero';
import Testimonials from './components/sections/Testimonials';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience/Experience';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Goals from './components/sections/Goals';
import Socials from './components/sections/DigitalPresence';
import Education from './components/sections/Education';

// Mobile-specific component imports
// Separate mobile components allow for optimized mobile-first experiences
import MobileHero from './mobileComponents/sections/Hero/Hero';
import MobileTestimonials from './mobileComponents/sections/Testimonials';
import MobileSkills from './mobileComponents/sections/Skills';
import MobileExperience from './mobileComponents/sections/Experience/MobileExperience';
import MobileCertifications from './mobileComponents/sections/Certifications';
import MobileProjects from './mobileComponents/sections/Projects';
import MobileContact from './mobileComponents/sections/Contact';
import MobileGoals from './mobileComponents/sections/Goals';
import MobileSocials from './mobileComponents/sections/DigitalPresence';
import MobileEducation from './mobileComponents/sections/Education';

function Portfolio() {
  // Hook to determine if current viewport is mobile
  const isMobile = useIsMobile();

  /**
   * Component mapping object that pairs desktop and mobile versions of each section
   * This approach:
   * 1. Reduces conditional rendering complexity
   * 2. Makes it easier to add/remove sections
   * 3. Centralizes component organization
   */
  const components = {
    Hero: { Desktop: Hero, Mobile: MobileHero },
    Testimonials: { Desktop: Testimonials, Mobile: MobileTestimonials },
    Skills: { Desktop: Skills, Mobile: MobileSkills },
    Experience: { Desktop: Experience, Mobile: MobileExperience },
    Education: { Desktop: Education, Mobile: MobileEducation },
    Projects: { Desktop: Projects, Mobile: MobileProjects },
    Contact: { Desktop: Contact, Mobile: MobileContact },
    Goals: { Desktop: Goals, Mobile: MobileGoals },
    Socials: { Desktop: Socials, Mobile: MobileSocials },
    Certifications: { Desktop: Certifications, Mobile: MobileCertifications },
  };

  /**
   * Helper function to render the appropriate component version (mobile/desktop)
   * @param {string} name - The component name from the components mapping
   * @returns {React.Component} - The rendered component with a unique key
   */
  const renderComponent = (name) => {
    // Select mobile or desktop version based on viewport
    const Component = isMobile ? components[name].Mobile : components[name].Desktop;
    return <Component key={name} />;
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="flex flex-col w-full items-center relative">
        <div className={`w-full relative ${!isMobile ? 'max-w-7xl px-4 sm:px-6 lg:px-8' : 'px-0'}`}>
          {Object.keys(components).map(renderComponent)}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;