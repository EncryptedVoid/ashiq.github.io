import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import PropTypes from 'prop-types';

const SkillCard = ({ skill, index, isVisible }) => (
  <div
    className={`
      group
      bg-white/[0.03] hover:bg-white/[0.06]
      border border-white/[0.06] hover:border-white/[0.12]
      rounded-2xl p-6
      transform transition-all duration-500 ease-out
      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10
      relative overflow-hidden
    `}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Gradient line animation on hover */}
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

    <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
      {skill.name}
    </h3>
    <p className="text-sm text-gray-400">{skill.usage}</p>
  </div>
);

const SkillCategory = ({ category, isExpanded, onToggle }) => {
  return (
    <div className={`
      bg-white/[0.02] backdrop-blur-xl
      border border-white/[0.06]
      rounded-3xl overflow-hidden
      transition-all duration-500 ease-out
      ${isExpanded ? 'shadow-xl shadow-purple-500/5' : ''}
    `}>
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className={`
          grid grid-cols-[1fr,auto,auto,auto] items-center gap-8
          p-6 md:p-8
          bg-gradient-to-r from-white/[0.03] to-white/[0.01]
          border-b border-white/[0.06]
          transition-colors duration-300
          hover:bg-white/[0.04]
        `}>
          <h2 className={`
            text-xl md:text-2xl font-bold
            bg-gradient-to-r from-red-500 via-purple-500 to-blue-500
            bg-clip-text text-transparent
          `}>
            {category.title}
          </h2>
          <div className="text-sm text-gray-400 text-center">
            {category.totalSkills} Skills
          </div>
          <div className="text-sm text-gray-400 text-center">
            {category.experience}
          </div>
          <div className={`
            w-10 h-10
            rounded-xl
            bg-white/[0.03]
            border border-white/[0.06]
            flex items-center justify-center
            transition-all duration-300
            hover:bg-white/[0.06]
            hover:border-white/[0.12]
            hover:-translate-y-1
          `}>
            {isExpanded ?
              <Minus className="w-4 h-4 text-gray-400" /> :
              <Plus className="w-4 h-4 text-gray-400" />
            }
          </div>
        </div>
      </button>

      {/* Animated content section */}
      <div className={`
        transform transition-all duration-500 ease-out
        ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 md:p-8">
          {category.skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isExpanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
    const [expandedCategories, setExpandedCategories] = useState(new Set());

    const skillsCategories = [
      {
        id: 1,
        title: "Frontend Development",
        totalSkills: 8,
        experience: "4+ years",
        skills: [
          { name: "React", usage: "Primary framework for building user interfaces" },
          { name: "JavaScript", usage: "Core programming language for web development" },
          { name: "HTML/CSS", usage: "Fundamental web technologies" },
          { name: "Tailwind CSS", usage: "Utility-first CSS framework" }
        ]
      },
      {
        id: 2,
        title: "Backend Development",
        totalSkills: 6,
        experience: "3+ years",
        skills: [
          { name: "Node.js", usage: "Server-side JavaScript runtime" },
          { name: "Python", usage: "Backend development and scripting" },
          { name: "SQL", usage: "Database management and querying" },
          { name: "MongoDB", usage: "NoSQL database solutions" }
        ]
      },
      {
        id: 3,
        title: "Tools & Technologies",
        totalSkills: 7,
        experience: "3+ years",
        skills: [
          { name: "Git", usage: "Version control and collaboration" },
          { name: "Docker", usage: "Containerization and deployment" },
          { name: "AWS", usage: "Cloud infrastructure and services" },
          { name: "Linux", usage: "Operating system and server management" }
        ]
      }
    ];

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Expertise & Skills
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed">
            A comprehensive overview of my technical capabilities and professional experience across different domains.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-6">
          {skillsCategories.map(category => (
            <SkillCategory
              key={category.id}
              category={category}
              isExpanded={expandedCategories.has(category.id)}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
  skillsCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      totalSkills: PropTypes.number.isRequired,
      experience: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          usage: PropTypes.string.isRequired
        })
      ).isRequired
    })
  )
};

export default Skills;