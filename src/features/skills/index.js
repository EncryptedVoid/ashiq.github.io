// src/features/skills/Skills.jsx
import React from 'react';
import { useMedia } from '@/context/MediaContext';
import SkillsDesktop from './Skills.desktop';
import SkillsMobile from './Skills.mobile';

const Skills = () => {
  const isMobile = useMedia();

  return (
    <section id="section-skills" className="relative min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `radial-gradient(#fa8c8c15 1px, transparent 1px), radial-gradient(#fa8c8c08 1px, transparent 1px)`,
          backgroundSize: '30px 30px, 20px 20px',
          backgroundPosition: '0 0, 15px 15px'
        }}
      />

      {/* Content */}
      {isMobile ? <SkillsMobile /> : <SkillsDesktop />}
    </section>
  );
};

export default Skills;