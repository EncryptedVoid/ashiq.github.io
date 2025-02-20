import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Youtube, Book, FileText, Star, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { TypewriterText } from '../../../styles/TypewriterText';
import ProjectsData from '../../../data/ProjectsData'


// ProjectCard Component
const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    image,
    version,
    difficulty,
    timeInvestment,
    startDate,
    lastUpdate,
    progress,
    technologies,
    links,
    metrics
  } = project;

  // Dynamic tag layout algorithm
  const [tagLayout, setTagLayout] = useState({ columns: 3, width: 'auto' });

  useEffect(() => {
    const calculateOptimalLayout = () => {
      const avgLength = technologies.reduce((acc, tech) => acc + tech.length, 0) / technologies.length;
      const columns = avgLength > 12 ? 2 : 3;
      const width = avgLength > 15 ? 'w-full' : 'w-auto';
      setTagLayout({ columns, width });
    };

    calculateOptimalLayout();
  }, [technologies]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/[0.1]
                 hover:bg-white/[0.04] hover:border-white/[0.2] transition-all duration-500"
    >
      {/* Project Image & Header */}
      <div className="relative h-48">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Version Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="px-2 py-1 text-xs font-medium rounded-full
                         bg-blue-500/20 text-blue-400 border border-blue-500/30">
            v{version}
          </span>
          <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full
                         bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Star className="w-3 h-3" />
            <span>{difficulty}/5</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Timeline */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent
                         group-hover:bg-clip-text group-hover:bg-gradient-to-r
                         group-hover:from-blue-400 group-hover:to-purple-400">
            {title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Started {startDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{timeInvestment}</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Progress</span>
            <span className="text-white/80">{progress}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full
                         transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-xs text-white/40 text-right">
            Last updated: {lastUpdate}
          </div>
        </div>

        {/* Description */}
        <p className="text-white/80 line-clamp-2">{description}</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="p-2 rounded-lg bg-white/5 text-center">
              <div className="text-sm font-medium text-white/80">{value}</div>
              <div className="text-xs text-white/40">{key}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className={`grid grid-cols-${tagLayout.columns} gap-2`}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`${tagLayout.width} px-3 py-1 text-sm rounded-full
                         bg-white/5 text-white/60 border border-white/10
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
          {links.github && (
            <LinkButton href={links.github} icon={Github} text="Code" />
          )}
          {links.live && (
            <LinkButton href={links.live} icon={ExternalLink} text="Demo" />
          )}
          {links.caseStudy && (
            <LinkButton href={links.caseStudy} icon={FileText} text="Case Study" />
          )}
          {links.blog && (
            <LinkButton href={links.blog} icon={Book} text="Blog Post" />
          )}
          {links.video && (
            <LinkButton href={links.video} icon={Youtube} text="Video" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Link Button Component
const LinkButton = ({ href, icon: Icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg
               bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80
               group transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
    <span>{text}</span>
    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

// Section Header Component
const SectionHeader = ({ title, description }) => (
  <div className="mb-12 text-center">
    <TypewriterText
      text={title}
      size={2}
      typingSpeed={100}
      delayBeforeRestart={60000}
    />
    <p className="text-white/60 mt-2">{description}</p>
  </div>
);

// Main Projects Component
const MobileProjects = () => {
  const [projects, setProjects] = useState({
    top: [],
    developed: [],
    developing: []
  });

  useEffect(() => {
    // Categorize projects based on criteria
    const categorizeProjects = (projectsData) => {
      setProjects({
        top: projectsData.filter(p => p.isTopProject),
        developed: projectsData.filter(p => p.progress === 100 && !p.isTopProject),
        developing: projectsData.filter(p => p.progress < 100 && !p.isTopProject)
      });
    };

    categorizeProjects(ProjectsData);
  }, []);

  return (
    <div className="py-20">
      {/* Top Projects Section */}
      {projects.top.length > 0 && (
        <section className="mb-20">
          <SectionHeader
            title="Market-Ready Solutions"
            description="Production-grade projects solving real-world problems"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.top.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Developed Projects Section */}
      {projects.developed.length > 0 && (
        <section className="mb-20">
          <SectionHeader
            title="Completed Projects"
            description="Polished solutions demonstrating technical expertise"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.developed.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Developing Projects Section */}
      {projects.developing.length > 0 && (
        <section>
          <SectionHeader
            title="In Development"
            description="Ongoing projects exploring new technologies"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.developing.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MobileProjects;