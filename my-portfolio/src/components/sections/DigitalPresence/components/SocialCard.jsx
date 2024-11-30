// src/components/sections/Socials/components/SocialCard.jsx
import React from 'react';

const SocialCard = ({
  platform,
  icon: Icon,
  stats,
  description,
  href,
  gradient
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-3xl bg-[#1a1a1a] transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl"
  >
    {/* Border Gradient */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
      <div className={`absolute inset-0 ${gradient} opacity-10`} />
      <div className="absolute inset-[1px] rounded-3xl bg-[#1a1a1a]" />
    </div>

    {/* Left Accent Line */}
    <div className={`
      absolute left-0 top-0 h-full w-1
      ${gradient} opacity-0
      origin-top scale-y-0
      transition-all duration-700
      group-hover:scale-y-100 group-hover:opacity-100
    `} />

    {/* Content */}
    <div className="relative p-8 md:p-10 h-full flex flex-col">
      {/* Stats Badge */}
      <div className="
        absolute right-8 top-8
        px-4 py-2 rounded-xl
        bg-white/[0.03] backdrop-blur-sm
        border border-white/[0.08]
        text-sm text-white/70
        transform translate-y-4 opacity-0
        transition-all duration-700
        group-hover:translate-y-0 group-hover:opacity-100
      ">
        {stats}
      </div>

      {/* Icon */}
      <Icon className="
        w-10 h-10 mb-6 text-white/80
        transition-transform duration-700
        group-hover:-translate-y-2 group-hover:scale-110 group-hover:-rotate-12
      " />

      {/* Title & Description */}
      <div className="mt-auto">
        <h2 className={`
          inline-block px-4 py-2 rounded-xl text-xl font-bold
          ${gradient} mb-4
          transition-all duration-700
          group-hover:-translate-y-1 group-hover:shadow-lg
        `}>
          {platform}
        </h2>
        <p className="
          text-white/60 text-lg max-w-[280px]
          transform translate-y-4 opacity-0
          transition-all duration-700 delay-100
          group-hover:translate-y-0 group-hover:opacity-100
        ">
          {description}
        </p>
      </div>
    </div>
  </a>
);

export default SocialCard;