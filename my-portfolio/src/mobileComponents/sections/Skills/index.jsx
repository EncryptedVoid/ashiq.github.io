// src/mobileComponents/sections/Skills/index.jsx
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { skillsData } from '../../../data/SkillsData';
import MobileSkillCategory from './components/MobileSkillCategory';

const MobileSkills = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);

  // Filter skills based on search
  const filteredSkills = skillsData.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.skills.length > 0);

  return (
    <section className="py-6">
      {/* Header */}
      <div className="px-4 mb-6">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-white mb-1">
            Skills
          </h1>
          <p className="text-base text-white/60">
            Technical expertise & capabilities
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className={`
            absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4
            ${searchActive ? 'text-blue-400' : 'text-white/40'}
          `} />
          <input
            type="search"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
            className={`
              w-full bg-white/[0.03]
              border border-white/[0.06]
              rounded-xl
              py-2.5 pl-9 pr-4
              text-sm text-white
              placeholder:text-white/40
              focus:outline-none
              ${searchActive ? 'border-blue-500/50' : 'border-white/[0.06]'}
            `}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 space-y-3">
        {filteredSkills.map((category) => (
          <MobileSkillCategory
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileSkills;