import React from 'react';
import { TechnologyTag } from '@/features/experience/components';

const ProjectItem = ({ project }) => {
  return (
    <div className="
      rounded-lg
      bg-white/[0.03] hover:bg-white/[0.06]
      border border-white/[0.06] hover:border-white/[0.12]
      p-4
      transition-all duration-300
      hover:-translate-y-1
      h-full
    ">
      <h4 className="text-white font-medium mb-2">{project.name}</h4>
      <p className="text-white/60 text-sm mb-3 line-clamp-2">{project.description}</p>

      {project.technologies && (
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.technologies.map((tech, idx) => (
            <TechnologyTag key={idx} technology={tech} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectItem;