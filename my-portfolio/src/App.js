import React from 'react';
import Hero from './hero.jsx';
import Experience from './experience.jsx';
import Skills from './skills.jsx';
import Projects from './project.jsx';
import Testimonials from './testimonials.jsx';
import Education from './education.jsx';
import Certification from './certification.jsx';
import Socials from './socials.jsx';
import ContactSources from './contactSources.jsx';

const SectionWrapper = ({ children, className = '' }) => (
  <section className={`
    w-full
    px-4
    sm:px-6
    md:px-8
    lg:px-12
    py-12
    md:py-16
    overflow-hidden
    ${className}
  `}>
    <div className="
      max-w-7xl
      mx-auto
      w-full
    ">
      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="
      min-h-screen
      w-full
      bg-gray-50
      dark:bg-gray-900
      text-gray-900
      dark:text-gray-100
      transition-colors
      duration-300
    ">
      {/* Main content container */}
      <div className="
        flex
        flex-col
        w-full
        items-center
      ">
        {/* Hero section - full-width with custom padding */}
        <SectionWrapper className="
          bg-white
          dark:bg-gray-800
          shadow-lg
        ">
          <Hero />
          <ContactSources />
        </SectionWrapper>

        {/* Skills section - grid layout for skill cards */}
        <SectionWrapper className="
          bg-gray-50
          dark:bg-gray-900
        ">
          <Skills />
        </SectionWrapper>

        {/* Experience section - timeline layout */}
        <SectionWrapper className="
          bg-white
          dark:bg-gray-800
        ">
          <Experience />
        </SectionWrapper>

        {/* Projects section - grid layout for project cards */}
        <SectionWrapper className="
          bg-gray-50
          dark:bg-gray-900
        ">
          <Projects />
        </SectionWrapper>

        {/* Testimonials section - carousel/grid layout */}
        <SectionWrapper className="
          bg-white
          dark:bg-gray-800
        ">
          <Testimonials />
        </SectionWrapper>

        {/* Education & Certification - side by side on larger screens */}
        <SectionWrapper className="
          bg-gray-50
          dark:bg-gray-900
        ">
          <div className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            lg:gap-12
          ">
            <Education />
            <Certification />
          </div>
        </SectionWrapper>

        {/* Social proof and contact - full width sections */}
        <SectionWrapper className="
          bg-white
          dark:bg-gray-800
        ">
          <div className="
            space-y-12
          ">
            <Socials />
            <ContactSources />
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}

export default App;