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
          text-xl md:text-2xl font-bold uppercase
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
        title: "Systems & Low-Level Programming",
        totalSkills: 8,
        experience: "5+ years",
        skills: [
          { name: "C/C++", usage: "Systems programming and performance-critical applications" },
          { name: "Assembly", usage: "Low-level system optimization and embedded programming" },
          { name: "Computer Architecture", usage: "Understanding and optimizing system-level operations" },
          { name: "RTOS", usage: "Real-time operating systems implementation and management" },
          { name: "Embedded Systems", usage: "Development for resource-constrained devices" },
          { name: "Virtual Memory", usage: "Memory management and optimization" },
          { name: "Multithreading", usage: "Concurrent and parallel programming implementations" },
          { name: "IPC", usage: "Inter-process communication and system integration" }
        ]
      },
      {
        id: 2,
        title: "Infrastructure & DevOps",
        totalSkills: 7,
        experience: "4+ years",
        skills: [
          { name: "Linux", usage: "System administration and development environment" },
          { name: "Docker", usage: "Container orchestration and deployment" },
          { name: "Docker Swarm", usage: "Container cluster management and scaling" },
          { name: "Jenkins", usage: "Continuous integration and deployment automation" },
          { name: "Shell/Bash", usage: "System automation and scripting" },
          { name: "Git", usage: "Version control and collaboration" },
          { name: "CI/CD", usage: "Automated testing and deployment pipelines" }
        ]
      },
      {
        id: 3,
        title: "Web Development",
        totalSkills: 6,
        experience: "4+ years",
        skills: [
          { name: "JavaScript", usage: "Frontend and backend development" },
          { name: "React.js", usage: "Building interactive user interfaces" },
          { name: "HTML/CSS", usage: "Web markup and styling" },
          { name: "REST APIs", usage: "API design and implementation" },
          { name: "Python", usage: "Backend development and automation" },
          { name: "Java", usage: "Enterprise application development" }
        ]
      },
      {
        id: 4,
        title: "Testing & Quality Assurance",
        totalSkills: 7,
        experience: "3+ years",
        skills: [
          { name: "Automated Testing", usage: "Test automation and continuous validation" },
          { name: "Integration Testing", usage: "System component integration validation" },
          { name: "Performance Testing", usage: "System performance optimization" },
          { name: "Load Testing", usage: "System scalability validation" },
          { name: "Stress Testing", usage: "System reliability assessment" },
          { name: "BDD", usage: "Behavior-driven development practices" },
          { name: "pytest", usage: "Python testing framework implementation" }
        ]
      },
      {
        id: 5,
        title: "Networking & Security",
        totalSkills: 4,
        experience: "3+ years",
        skills: [
          { name: "IP Networking", usage: "Network architecture and protocols" },
          { name: "Routing Protocols", usage: "Network routing and optimization" },
          { name: "Network Analysis", usage: "Traffic analysis and optimization" },
          { name: "Chemical Safety", usage: "Safety protocols and compliance" }
        ]
      },
      {
        id: 6,
        title: "Data Science & Research",
        totalSkills: 4,
        experience: "2+ years",
        skills: [
          { name: "TensorFlow", usage: "Machine learning implementation" },
          { name: "Mathematics", usage: "Mathematical modeling and analysis" },
          { name: "Computational Physics", usage: "Physical systems simulation" },
          { name: "Data Analysis", usage: "Data processing and visualization" }
        ]
      },
      {
        id: 7,
        title: "Professional Skills",
        totalSkills: 5,
        experience: "5+ years",
        skills: [
          { name: "Project Management", usage: "Technical project leadership" },
          { name: "Event Planning", usage: "Technical event organization" },
          { name: "Event Marketing", usage: "Technical event promotion" },
          { name: "Customer Service", usage: "Technical support and communication" },
          { name: "Social Media", usage: "Technical community management" }
        ]
      },
      {
        id: 8,
        title: "Development Tools & IDEs",
        totalSkills: 5,
        experience: "4+ years",
        skills: [
          { name: "Visual Studio Code", usage: "Primary code editor for web development" },
          { name: "JetBrains IntelliJ", usage: "Java and enterprise application development" },
          { name: "JetBrains PyCharm", usage: "Python development environment" },
          { name: "Git Kraken", usage: "Advanced Git GUI client for version control" },
          { name: "npm/npx", usage: "Node.js package management and script execution" }
        ]
      },
      {
        id: 9,
        title: "Hardware & Manufacturing",
        totalSkills: 4,
        experience: "3+ years",
        skills: [
          { name: "3D Printing", usage: "Creality Ender 3 operation and maintenance" },
          { name: "Ultimaker Cura", usage: "3D model slicing and print optimization" },
          { name: "Marlin Firmware", usage: "3D printer firmware configuration" },
          { name: "Soldering", usage: "Hardware assembly and circuit board repair" }
        ]
      },
      {
        id: 10,
        title: "System Tools & Utilities",
        totalSkills: 4,
        experience: "4+ years",
        skills: [
          { name: "Docker", usage: "Container creation and deployment" },
          { name: "VirtualBox", usage: "Virtual machine management and testing" },
          { name: "RPi-imager", usage: "Raspberry Pi OS deployment and configuration" },
          { name: "Embedded Tools", usage: "Hardware diagnostic and programming tools" }
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