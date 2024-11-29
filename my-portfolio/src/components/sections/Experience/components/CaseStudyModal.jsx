// src/components/sections/Experience/components/CaseStudyModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose, experience }) => {
if (!isOpen) return null;

return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
    >
        <div className="min-h-screen px-4 py-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={e => e.stopPropagation()}
            className="relative max-w-6xl mx-auto"
        >
            <div className="case-study">
            <div className="sidebar">
                <div className="sidebar-section">
                <div className="logo-container">
                    {experience.companyLogo ? (
                    <img
                        src={experience.companyLogo}
                        alt={experience.company}
                        className="w-full h-full object-contain"
                    />
                    ) : (
                    experience.company[0]
                    )}
                </div>
                <div className="motto">{experience.title}</div>
                <p className="description">{experience.description}</p>
                </div>

                <div className="sidebar-section">
                <h2 className="section-title">Goals</h2>
                <ul className="goals-list">
                    {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement.label}</li>
                    ))}
                </ul>
                </div>

                <div className="sidebar-section">
                <h2 className="section-title">Timeline & Milestones</h2>
                <div className="timeline">
                    <div className="milestone">{experience.startDate}</div>
                    {experience.milestones?.map((milestone, index) => (
                    <div key={index} className="milestone">
                        {milestone}
                    </div>
                    ))}
                    <div className="milestone">
                    {experience.endDate || 'Present'}
                    </div>
                </div>
                </div>
            </div>

            <div className="main-content">
                {/* This content will come from your experienceData */}
                <div className="content-section">
                <h1 className="section-title">Overview</h1>
                <p className="section-content">{experience.description}</p>
                </div>

                <div className="content-section">
                <h2 className="section-title">Key Achievements</h2>
                <div className="section-content">
                    {experience.achievements.map((achievement, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">
                        {achievement.label}
                        </h3>
                        <p>{achievement.description}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Add more sections based on your case study content */}
            </div>
            </div>

            {/* Close Button */}
            <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
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