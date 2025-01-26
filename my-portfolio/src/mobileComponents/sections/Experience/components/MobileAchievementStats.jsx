// src/components/sections/Experience/components/AchievementStats.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../../common/GlassCard';
import { ChevronDown, Info } from 'lucide-react';

// const AchievementCard = ({ achievement }) => {
// const [isHovered, setIsHovered] = useState(false);
// const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// useEffect(() => {
//     const handleMouseMove = (e) => {
//     if (isHovered) {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//     }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
// }, [isHovered]);

// return (
//     <div
//     className="relative"
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//     >
//     {/* Main Achievement Card */}
//     <GlassCard className="h-full">
//         <div className="flex items-center gap-3 p-3">
//         <motion.div
//             className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//             animate={{
//             scale: isHovered ? 1.1 : 1,
//             translateY: isHovered ? -2 : 0
//             }}
//             transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 10
//             }}
//         >
//             {achievement.stat}
//         </motion.div>
//         <div className="text-sm text-white/60">
//             {achievement.label}
//         </div>
//         </div>
//     </GlassCard>

//     {/* Cursor-following Details Card */}
//     <AnimatePresence>
//         {isHovered && (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="fixed z-50 pointer-events-none"
//             style={{
//             left: mousePosition.x + 5, // Moved closer to cursor
//             top: mousePosition.y + 5,  // Moved closer to cursor
//             width: '280px'
//             }}
//         >
//             <div className="bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/20 p-4">
//             <div className="text-sm leading-relaxed text-white">
//                 {achievement.description}
//             </div>
//             </div>
//         </motion.div>
//         )}
//     </AnimatePresence>
//     </div>
// );
// };


const MobileAchievementStats = ({ achievements }) => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="py-4">
      <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
        Key Achievements
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white/5 rounded-xl overflow-hidden"
          >
            {/* Main Achievement Card - Tap to Expand */}
            <button
              onClick={() => setExpandedId(expandedId === index ? null : index)}
              className="w-full text-left"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {achievement.stat}
                  </div>
                  <div className="text-sm text-white/60 mt-1">
                    {achievement.label}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-white/40" />
                  <ChevronDown
                    className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                      expandedId === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </button>

            {/* Expandable Details Section */}
            <motion.div
              initial={false}
              animate={{ height: expandedId === index ? 'auto' : 0 }}
              className="overflow-hidden bg-white/[0.02] border-t border-white/10"
            >
              <div className="p-4 text-sm text-white/80 leading-relaxed">
                {achievement.description}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileAchievementStats;