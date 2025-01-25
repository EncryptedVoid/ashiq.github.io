import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

const MobileSocialCard = ({
  platform,
  icon: Icon,
  stats,
  description,
  href,
  gradient
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden"
      layout
    >
      {/* Compact View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-center gap-4 p-4">
          <div className={`
            p-2 rounded-xl
            ${gradient}
            transition-transform duration-300
            ${isExpanded ? 'scale-90 rotate-12' : ''}
          `}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-white truncate">
              {platform}
            </h2>
            <p className="text-sm text-white/60 truncate">
              {stats}
            </p>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
          >
            <ChevronDown className="w-4 h-4 text-white/60" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-4 pt-0">
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                {description}
              </p>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-full
                  flex items-center justify-center gap-2
                  py-3 px-4
                  rounded-xl
                  ${gradient}
                  text-white font-medium
                  active:scale-95
                  transition-transform duration-200
                `}
                onClick={e => e.stopPropagation()}
              >
                Visit {platform}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileSocialCard;