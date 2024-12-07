// src/App.js
import React from 'react';
import Hero from './components/sections/Hero/Hero';
import Testimonials from './components/sections/Testimonials';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience/Experience';
import Certifications from './components/sections/Certifications';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Goals from './components/sections/Goals';
import Socials from './components/sections/DigitalPresence';
import Education from './components/sections/Education/index.jsx'

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white">
      <main className="flex flex-col w-full items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Testimonials />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <Contact />
          <Goals />
          <Socials />
        </div>
      </main>
    </div>
  );
}

export default App;