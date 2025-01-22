// src/components/sections/Projects/index.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectsData } from '../../../data/ProjectsData';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);
const [filter, setFilter] = useState('all');

const filterTypes = ['all', 'Professional', 'Open Source', 'Personal'];

const filteredProjects = ProjectsData.filter(project =>
    filter === 'all' || project.type === filter
);

return (
    <div className="py-20">
    {/* Header */}
    <motion.div
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        Featured Projects
        </h1>
        <p className="text-lg text-white/60">
        A showcase of my technical projects, ranging from professional work to open-source contributions
        </p>
    </motion.div>

    {/* Filters */}
    <div className="flex justify-center gap-4 mb-12">
        {filterTypes.map((type, index) => (
        <motion.button
            key={type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setFilter(type)}
            className={`
            px-4 py-2 rounded-lg
            transition-all duration-300
            ${filter === type
                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                : 'bg-white/5 text-white/60 border-white/10'
            }
            border
            hover:bg-white/10
            hover:border-white/20
            `}
        >
            {type}
        </motion.button>
        ))}
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
        <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <ProjectCard
            project={project}
            onClick={() => setSelectedProject(project)}
            />
        </motion.div>
        ))}
    </div>

    {/* Project Modal */}
    <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
    />
    </div>
);
};

export default Projects;