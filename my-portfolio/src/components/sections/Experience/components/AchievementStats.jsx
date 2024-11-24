// src/components/sections/Experience/components/AchievementStats.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../../common/GlassCard';

const AchievementCard = ({ achievement, totalAchievements }) => {
const [showDetails, setShowDetails] = useState(false);

// Dynamic padding based on number of achievements
const gridCols = totalAchievements <= 3 ? 3 : totalAchievements <= 4 ? 2 : 3;
const padding = totalAchievements <= 3 ? 'p-4' : 'p-3';

return (
    <div className="relative group" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
    {/* Main Achievement Card */}
    <GlassCard className="h-full">
        <div className={`${padding} text-center`}>
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
            {achievement.stat}
        </div>
        <div className="text-xs text-white/60 line-clamp-2">
            {achievement.label}
        </div>
        </div>
    </GlassCard>

    {/* Hovering Details Card */}
    <AnimatePresence>
        {showDetails && (
        <motion.div
            initial={{ opacity: 0, y: 10, zIndex: 50 }}
            animate={{ opacity: 1, y: 0, zIndex: 50 }}
            exit={{ opacity: 0, y: 10, zIndex: 50 }}
            className="fixed transform -translate-x-1/2 z-50"
            style={{
            left: '50%',
            top: 'calc(100% + 10px)',
            width: '250px'
            }}
        >
            <GlassCard className="p-3">
            <div className="text-sm text-white/80">
                {achievement.description}
            </div>
            {/* Arrow pointing up */}
            <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 rotate-45 w-3 h-3 bg-white/[0.03] border-l border-t border-white/[0.08]" />
            </GlassCard>
        </motion.div>
        )}
    </AnimatePresence>
    </div>
);
};

const AchievementStats = ({ achievements }) => {
const gridCols = achievements.length <= 3 ? 3 : achievements.length <= 4 ? 2 : 3;

return (
    <div className="py-4">
    <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
        Key Achievements
    </h4>
    <div className={`grid grid-cols-${gridCols} gap-3`}>
        {achievements.map((achievement, index) => (
        <AchievementCard
            key={index}
            achievement={achievement}
            totalAchievements={achievements.length}
        />
        ))}
    </div>
    </div>
);
};

export default AchievementStats;