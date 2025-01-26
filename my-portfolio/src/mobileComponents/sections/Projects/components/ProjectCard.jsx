// src/components/sections/Projects/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, Activity } from 'lucide-react';
import GlassCard from '../../../common/GlassCard';

const MetricItem = ({ label, value }) => (
<div className="text-center">
    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    {value}
    </div>
    <div className="text-xs text-white/60 mt-1">
    {label}
    </div>
</div>
);

const ProjectCard = ({ project, onClick }) => {
const statusColors = {
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'In Progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Planning': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
};

return (
    <GlassCard
    className="group cursor-pointer h-full"
    onClick={onClick}
    >
    {/* Image Section */}
    <div className="relative h-48 rounded-t-xl overflow-hidden">
        {project.image ? (
        <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
        />
        ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <Activity className="w-12 h-12 text-white/20" />
        </div>
        )}
        <div className="
        absolute inset-0
        bg-gradient-to-t from-gray-900 to-transparent
        opacity-60
        group-hover:opacity-40
        transition-opacity duration-300
        "/>
    </div>

    {/* Content Section */}
    <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
        <div className="flex items-center justify-between">
            <span className={`
            px-3 py-1
            text-xs font-medium
            rounded-full
            border
            ${statusColors[project.status]}
            `}>
            {project.status}
            </span>
            <div className="flex items-center gap-2 text-sm text-white/40">
            <Clock className="w-4 h-4" />
            {project.duration}
            </div>
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
            {project.title}
        </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 line-clamp-2">
        {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 py-4">
        {Object.entries(project.metrics).slice(0, 3).map(([label, value]) => (
            <MetricItem key={label} label={label} value={value} />
        ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
            <span
            key={tech}
            className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/60"
            >
            {tech}
            </span>
        ))}
        {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-white/60">
            +{project.technologies.length - 4} more
            </span>
        )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-white/10">
        {project.links.github && (
            <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            onClick={e => e.stopPropagation()}
            >
            <Github className="w-5 h-5" />
            </a>
        )}
        {project.links.live && (
            <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white/80 transition-colors duration-300"
            onClick={e => e.stopPropagation()}
            >
            <ExternalLink className="w-5 h-5" />
            </a>
        )}
        </div>
    </div>
    </GlassCard>
);
};

export default ProjectCard;