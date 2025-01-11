// src/components/sections/Contact/components/QuickLinks.jsx
import React from 'react';
import { motion } from 'framer-motion';

const QuickLinks = ({ links }) => {
return (
    <div className="flex justify-center gap-4 flex-wrap">
    {links.map((link, index) => (
        <motion.a
        key={link.id}
        href={link.url}
        download={link.type === 'download'}
        target="_blank"
        rel="noopener noreferrer"
        className="
            group
            flex items-center gap-2
            px-4 py-2
            bg-white/[0.05]
            hover:bg-white/[0.1]
            border border-white/[0.1]
            rounded-full
            transition-all duration-300
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        >
        <link.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300" />
        <span className="text-white/60 group-hover:text-white transition-colors duration-300">
            {link.label}
        </span>
        </motion.a>
    ))}
    </div>
);
};

export default QuickLinks;