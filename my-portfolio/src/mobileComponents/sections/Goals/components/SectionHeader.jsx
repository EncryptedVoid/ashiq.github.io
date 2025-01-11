// src/components/sections/Goals/components/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h1 className="
      text-4xl md:text-5xl font-bold mb-6
      bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500
      bg-clip-text text-transparent
    ">
      {title}
    </h1>
    <p className="text-lg text-gray-400">
      {subtitle}
    </p>
    {/* Decorative Line */}
    <div className="
      w-24 h-1 mx-auto mt-8
      bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500
      rounded-full
    " />
  </div>
);

export default SectionHeader;