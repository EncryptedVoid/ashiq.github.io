import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Activity, Sparkles } from 'lucide-react';

const MobileSkillCard = ({ skill, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className="relative w-full bg-gradient-to-br from-white/[0.03] to-white/[0.08]
                 backdrop-blur-md rounded-2xl p-5 group"
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        {/* Left: Title and Time */}
        <div className="flex gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 group-active:text-rose-400
                          transition-colors">
              {skill.name}
            </h3>
            <div className="flex items-center gap-1.5 text-white/40 text-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>Since {skill.yearStarted}</span>
            </div>
          </div>
        </div>

        {/* Right: Activity Badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5
                       border border-white/10">
          <Activity className="w-3.5 h-3.5 text-rose-400" />
          <span className="text-xs font-medium text-white/80">Active</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.entries(skill.metrics).map(([key, value]) => (
          <div
            key={key}
            className="p-3 rounded-xl bg-white/5 border border-white/10 group-active:bg-white/10
                       transition-colors"
          >
            <div className="text-white/40 text-xs capitalize mb-1">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
            <div className="text-white font-semibold">
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/60
                       group-active:bg-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Recent Projects Peek */}
      {skill.recentProjects && skill.recentProjects.length > 0 && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs text-white/40 mb-2">Recent Projects</div>
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
            {skill.recentProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5
                          border border-white/10 whitespace-nowrap"
              >
                <Code className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-sm text-white/80">{project.name}</span>
                <span className="text-xs text-white/40">{project.metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hover/Active Effects */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/0 to-red-500/0
                     opacity-0 group-active:opacity-5 transition-opacity" />
    </motion.div>
  );
};

export default MobileSkillCard;

// Optional: Add a loading state component
export const SkillCardSkeleton = () => (
  <div className="w-full bg-white/[0.03] rounded-2xl p-5 animate-pulse">
    <div className="flex items-start justify-between mb-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5" />
        <div>
          <div className="w-32 h-6 bg-white/5 rounded-lg mb-2" />
          <div className="w-24 h-4 bg-white/5 rounded-lg" />
        </div>
      </div>
      <div className="w-20 h-8 bg-white/5 rounded-lg" />
    </div>
    <div className="grid grid-cols-2 gap-2 mb-4">
      {[1, 2].map(i => (
        <div key={i} className="h-16 rounded-xl bg-white/5" />
      ))}
    </div>
    <div className="flex gap-2">
      {[1, 2, 3].map(i => (
        <div key={i} className="w-16 h-8 bg-white/5 rounded-lg" />
      ))}
    </div>
  </div>
);