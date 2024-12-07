// src/components/sections/Experience/components/CaseStudyModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Briefcase, Trophy, Target, Clock } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose, experience }) => {
if (!isOpen || !experience) return null;

return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 overflow-y-auto"
    >
        <div className="min-h-screen px-4 py-12">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-6xl mx-auto bg-gradient-to-b from-gray-900/50 to-black/50 rounded-3xl border border-white/10 overflow-hidden"
        >
            {/* Header Section */}
            <div className="relative px-8 pt-12 pb-8 border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10" />

            <div className="relative flex items-start gap-8">
                {/* Company Logo */}
                <div className="w-32 h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
                {experience.companyLogo ? (
                    <img
                    src={experience.companyLogo}
                    alt={experience.company}
                    className="w-full h-full object-contain"
                    />
                ) : (
                    <Briefcase className="w-12 h-12 text-white/40" />
                )}
                </div>

                {/* Title and Info */}
                <div className="flex-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    {experience.title}
                </h1>

                <div className="flex items-center gap-6 text-white/60">
                    <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {experience.company}
                    </div>
                    <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {experience.startDate} - {experience.endDate || 'Present'}
                    </div>
                    <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {experience.location}
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-3 gap-8 p-8">
            {/* Sidebar */}
            <div className="col-span-1 space-y-8">
                {/* Goals Section */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Target className="w-5 h-5 text-blue-400" />
                    Key Goals
                </h2>
                <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                    <li
                        key={index}
                        className="flex items-start gap-3 text-white/60 hover:text-white/80 transition-colors"
                    >
                        <span className="text-blue-400">•</span>
                        {achievement.label}
                    </li>
                    ))}
                </ul>
                </div>

                {/* Timeline Section */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-purple-400" />
                    Timeline
                </h2>
                <div className="space-y-4">
                    <div className="relative pl-6 pb-6 border-l-2 border-purple-400/20">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-400" />
                    {experience.startDate}
                    </div>
                    {experience.milestones?.map((milestone, index) => (
                    <div key={index} className="relative pl-6 pb-6 border-l-2 border-purple-400/20">
                        <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-white/40" />
                        {milestone}
                    </div>
                    ))}
                    <div className="relative pl-6 border-l-2 border-purple-400/20">
                    <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-purple-400" />
                    {experience.endDate || 'Present'}
                    </div>
                </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-2 space-y-8">
                {/* Overview */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white mb-4">Project Overview</h2>
                <p className="text-white/60 leading-relaxed">
                    {experience.description}
                </p>
                </div>

                {/* Achievements */}
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-6">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Key Achievements
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {experience.achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/[0.07] transition-colors"
                    >
                        <div className="text-2xl font-bold text-blue-400 mb-2">
                        {achievement.stat}
                        </div>
                        <div className="text-white mb-2">{achievement.label}</div>
                        <div className="text-white/60 text-sm">
                        {achievement.description}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-90"
            >
            <X className="w-6 h-6 text-white" />
            </button>
        </motion.div>
        </div>
    </motion.div>
    </AnimatePresence>
);
};

export default CaseStudyModal;