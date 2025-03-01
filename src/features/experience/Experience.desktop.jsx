// src/features/experience/Experience.desktop.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceTabs } from './components';
import { ExperienceData } from '@/data/ExperienceData';

const ExperienceDesktop = () => {
  return (
    <section id="experience" className="min-h-screen">
      <ExperienceTabs experienceData={ExperienceData} />
    </section>
  );
};

export default ExperienceDesktop;