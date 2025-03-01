// src/features/experience/Experience.mobile.jsx
import React from 'react';
import { ExperienceCarousel } from './components';
import { ExperienceData } from '@/data/ExperienceData';

const ExperienceMobile = () => {
  return (
    <section id="experience" className="">
      <ExperienceCarousel experienceData={ExperienceData} />
    </section>
  );
};

export default ExperienceMobile;