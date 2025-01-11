// src/App.js
import React from 'react';
import useIsMobile from './hooks/useIsMobile';

// Desktop Components
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

// Mobile Components
import MobileHero from './mobileComponents/sections/Hero/Hero';
import MobileTestimonials from './mobileComponents/sections/Testimonials';
import MobileSkills from './mobileComponents/sections/Skills';
import MobileExperience from './mobileComponents/sections/Experience/Experience';
import MobileCertifications from './mobileComponents/sections/Certifications';
import MobileProjects from './mobileComponents/sections/Projects';
import MobileContact from './mobileComponents/sections/Contact';
import MobileGoals from './mobileComponents/sections/Goals';
import MobileSocials from './mobileComponents/sections/DigitalPresence';
import MobileEducation from './mobileComponents/sections/Education';

function Portfolio() {
  const isMobile = useIsMobile();

  // Component mapping for cleaner conditional rendering
  const components = {
    Hero: { Desktop: Hero, Mobile: MobileHero },
    Testimonials: { Desktop: Testimonials, Mobile: MobileTestimonials },
    Skills: { Desktop: Skills, Mobile: MobileSkills },
    Experience: { Desktop: Experience, Mobile: MobileExperience },
    Education: { Desktop: Education, Mobile: MobileEducation },
    Certifications: { Desktop: Certifications, Mobile: MobileCertifications },
    Projects: { Desktop: Projects, Mobile: MobileProjects },
    Contact: { Desktop: Contact, Mobile: MobileContact },
    Goals: { Desktop: Goals, Mobile: MobileGoals },
    Socials: { Desktop: Socials, Mobile: MobileSocials },
  };

  // Dynamic component renderer
  const renderComponent = (name) => {
    const Component = isMobile ? components[name].Mobile : components[name].Desktop;
    return <Component key={name} />;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="flex flex-col w-full items-center">
        <div className={`w-full ${!isMobile ? 'max-w-7xl px-4 sm:px-6 lg:px-8' : 'px-0'}`}>
          {Object.keys(components).map(renderComponent)}
        </div>
      </main>
    </div>
  );
}

export default Portfolio;