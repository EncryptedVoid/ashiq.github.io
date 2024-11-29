// src/components/sections/Experience/components/AchievementStats.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../../common/GlassCard';

const AchievementCard = ({ achievement }) => {
const [isHovered, setIsHovered] = useState(false);
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const handleMouseMove = (e) => {
    if (isHovered) {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
}, [isHovered]);

return (
    <div
    className="relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    {/* Main Achievement Card */}
    <GlassCard className="h-full">
        <div className="flex items-center gap-3 p-3">
        <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
            scale: isHovered ? 1.1 : 1,
            translateY: isHovered ? -2 : 0
            }}
            transition={{
            type: "spring",
            stiffness: 400,
            damping: 10
            }}
        >
            {achievement.stat}
        </motion.div>
        <div className="text-sm text-white/60">
            {achievement.label}
        </div>
        </div>
    </GlassCard>

    {/* Cursor-following Details Card */}
    <AnimatePresence>
        {isHovered && (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed z-50 pointer-events-none"
            style={{
            left: mousePosition.x + 5, // Moved closer to cursor
            top: mousePosition.y + 5,  // Moved closer to cursor
            width: '280px'
            }}
        >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-xl border border-white/20 p-4">
            <div className="text-sm leading-relaxed text-white">
                {achievement.description}
            </div>
            </div>
        </motion.div>
        )}
    </AnimatePresence>
    </div>
);
};

const AchievementStats = ({ achievements }) => {
return (
    <div className="py-4">
    <h4 className="text-sm font-semibold text-white/60 uppercase mb-3">
        Key Achievements
    </h4>
    <div className="flex flex-wrap gap-3">
        {achievements.map((achievement, index) => (
        <AchievementCard
            key={index}
            achievement={achievement}
        />
        ))}
    </div>
    </div>
);
};

export default AchievementStats;