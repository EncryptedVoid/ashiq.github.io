// src/components/sections/Skills/components/SkillCard.jsx
import React from 'react';
import GlassCard from '../../../common/GlassCard';

export const SkillCard = ({ skill }) => (
  <GlassCard className="group" hover={true} gradient={true}>
    <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
      {skill.name}
    </h3>
    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
      {skill.usage}
    </p>
  </GlassCard>
);