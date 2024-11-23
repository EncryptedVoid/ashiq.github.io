// src/components/sections/Skills/index.jsx
import React, { useState } from 'react';
import { SkillCategory } from './components/SkillCategory';

const Skills = () => {
const [expandedCategories, setExpandedCategories] = useState(new Set());

// Example skills data
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
    <div className="w-full py-20">
    {/* Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Expertise & Skills
        </h1>
        <p className="text-lg text-white/60">
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
);
};

export default Skills;