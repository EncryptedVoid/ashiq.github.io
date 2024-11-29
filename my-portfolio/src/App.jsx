// src/App.jsx
import React from 'react';
import {
Hero,
Experience,
Skills,
Projects,
Testimonials,
Education,
Certification,
Socials,
ContactSources
} from '@/components/sections';

// Common Components
import { SectionWrapper } from '@/components/common/SectionWrapper';

const App = () => {
return (
    <div className="
    min-h-screen
    w-full
    bg-gradient-to-br from-gray-900 to-black
    text-white
    transition-colors
    duration-300
    ">
    {/* Main content container */}
    <div className="flex flex-col w-full items-center">
        {/* Hero section - full-width with custom padding */}
        <SectionWrapper variant="glass" className="bg-white/[0.03]">
        <Hero />
        <ContactSources />
        </SectionWrapper>

        {/* Skills section - grid layout for skill cards */}
        <SectionWrapper variant="transparent">
        <Skills />
        </SectionWrapper>

        {/* Experience section - timeline layout */}
        <SectionWrapper variant="glass">
        <Experience />
        </SectionWrapper>

        {/* Projects section - grid layout for project cards */}
        <SectionWrapper variant="transparent">
        <Projects />
        </SectionWrapper>

        {/* Testimonials section - carousel/grid layout */}
        <SectionWrapper variant="glass">
        <Testimonials />
        </SectionWrapper>

        {/* Education & Certification - side by side on larger screens */}
        <SectionWrapper variant="transparent">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <Education />
            <Certification />
        </div>
        </SectionWrapper>

        {/* Social proof and contact - full width sections */}
        <SectionWrapper variant="glass">
        <div className="space-y-12">
            <Socials />
            <ContactSources />
        </div>
        </SectionWrapper>
    </div>
    </div>
);
};

export default App;