// src/App.js
import React from 'react';
import Hero from './components/sections/Hero/Hero';  // Updated path
import Skills from './components/sections/Skills';   // This will use index.jsx

// Placeholder component for other sections
const PlaceholderSection = ({ title }) => (
  <div className="w-full p-8 bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.08]">
    <h2 className="text-2xl font-bold text-white/80 mb-4">{title}</h2>
    <div className="h-40 flex items-center justify-center text-white/60">
      {title} Section Content Coming Soon
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <main className="flex flex-col w-full items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Implemented Sections */}
          <Hero />
          <Skills />

          {/* Placeholder Sections */}
          <div className="space-y-8 py-8">
            <PlaceholderSection title="Experience" />
            <PlaceholderSection title="Projects" />
            <PlaceholderSection title="Contact" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;