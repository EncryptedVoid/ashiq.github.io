// src/components/sections/Skills/components/SkillCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Boxes } from 'lucide-react';
import GlassCard from '@/components/GlassCard';

const MetricItem = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-2 text-sm">
    <Icon className="w-4 h-4 text-white/40" />
    <span className="text-white/80 font-medium">{value}</span>
    <span className="text-white/40">{label}</span>
  </div>
);

const SkillCard = ({ skill, delay = 0 }) => {
  // Ensure metrics exist with default values
  const metrics = skill?.metrics || {
    linesOfCode: 0,
    projectsCompleted: 0,
    contributions: 0
  };

  return (
    <GlassCard className="group">
      <div className="space-y-4">
        {/* Skill Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-white group-hover:text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text transition-all duration-300">
            {skill?.name || 'Skill Name'}
          </h3>
          <div className="
            px-2 py-1
            text-xs
            bg-white/5
            border border-white/10
            rounded-full
            text-white/60
          ">
            {skill?.yearStarted || 'Present'}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-2">
          <MetricItem
            icon={Code}
            value={`${metrics.linesOfCode?.toLocaleString() || 0}+`}
            label="lines written"
          />
          <MetricItem
            icon={Boxes}
            value={metrics.projectsCompleted || 0}
            label="projects completed"
          />
          <MetricItem
            icon={GitBranch}
            value={metrics.contributions || 0}
            label="contributions"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {skill?.description || 'Skill description'}
        </p>

        {/* Recent Projects */}
        {skill?.recentProjects && skill.recentProjects.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs text-white/40 uppercase">Recent Projects</div>
            <div className="grid grid-cols-2 gap-2">
              {skill.recentProjects.map((project, index) => (
                <motion.div
                  key={project.name || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay + (index * 0.1) }}
                  className="
                    px-3 py-2
                    bg-white/5
                    rounded-lg
                    text-xs
                    group-hover:bg-white/10
                    transition-colors duration-300
                  "
                >
                  <div className="font-medium text-white/80">
                    {project.name || 'Project Name'}
                  </div>
                  <div className="text-white/40">
                    {project.metric || 'N/A'}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {skill?.tags && (
          <div className="flex flex-wrap gap-2">
            {skill.tags.map((tag, index) => (
              <span
                key={tag || index}
                className="
                  px-2 py-1
                  text-xs
                  bg-white/5
                  border border-white/10
                  rounded-full
                  text-white/60
                  group-hover:bg-white/10
                  group-hover:border-white/20
                  transition-all duration-300
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default SkillCard;