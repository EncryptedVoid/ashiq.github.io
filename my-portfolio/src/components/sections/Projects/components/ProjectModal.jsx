// src/components/sections/Projects/components/ProjectModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
if (!project || !isOpen) return null;

return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        onClick={e => e.stopPropagation()}
        className="bg-gray-900/90 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
            <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
                <X className="w-6 h-6 text-white/60" />
            </button>
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <p className="text-white/80">{project.description}</p>
            {/* Add more content as needed */}
        </div>
        </motion.div>
    </motion.div>
    </AnimatePresence>
);
};

export default ProjectModal;