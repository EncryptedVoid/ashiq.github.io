import React from 'react';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
// Update the import path to match your file structure
import ContactSources from './components/sections/Contact/ContactSources';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <main className="flex flex-col w-full items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <ContactSources />
        </div>
      </main>
    </div>
  );
}

export default App;