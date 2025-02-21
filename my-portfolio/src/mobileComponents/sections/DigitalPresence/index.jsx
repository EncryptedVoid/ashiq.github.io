import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SocialsData from '../../../data/SocialsData'
import {
  Mail,
  Calendar,
  Github,
  Linkedin,
  Youtube,
  Brain,
  ExternalLink,
  Code,
  MessageCircle
} from 'lucide-react';

// Custom animated button with unique styling per platform
const ContactButton = ({
  icon: Icon,
  label,
  onClick,
  gradient,
  hoverColor,
  bgColor,
  delay = 0,
  description,
  stats
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => isPressed && setIsPressed(false)}
      className="w-full block"
    >
      <motion.div
        className={`
          w-full rounded-xl overflow-hidden
          ${bgColor}
          border border-white/10
          transition-all duration-200
        `}
        animate={{
          scale: isPressed ? 0.98 : 1,
          boxShadow: isPressed
            ? `0 0 0 rgba(255,255,255,0)`
            : `0 4px 20px ${gradient.split('from-')[1]?.split('/')[0] || 'rgba(0,0,0,0.3)'}`
        }}
      >
        <div className="relative">
          {/* Gradient overlay */}
          <div className={`absolute inset-0 opacity-20 ${gradient}`} />

          <div className="relative z-10 p-4">
            <div className="flex items-center gap-3">
              <div className={`
                p-2.5 rounded-lg
                ${gradient}
                text-white
              `}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-base font-medium text-white">{label}</h3>
                {stats && (
                  <p className="text-xs text-white/60">{stats}</p>
                )}
              </div>

              <div className={`
                p-2 rounded-lg bg-white/10
                text-white/60
              `}>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>

            {description && (
              <p className="mt-2 text-sm text-white/70 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.button>
  );
};

const MobileContactSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Let's Connect</h2>
          <p className="text-white/60">
            Get in touch for opportunities, collaborations, or just to say hello
          </p>
        </div>

        {/* Primary Buttons */}
        <div className="space-y-4 mb-8">
          <ContactButton {...SocialsData.email} delay={0.1} />
          <ContactButton {...SocialsData.calendly} delay={0.2} />
        </div>

        {/* Social Platforms */}
        <h3 className="text-white/80 text-sm font-medium mb-4 pl-1">PROFESSIONAL PROFILES</h3>
        <div className="grid grid-cols-1 gap-4 mb-8">
          <ContactButton {...SocialsData.github} delay={0.3} />
          <ContactButton {...SocialsData.linkedin} delay={0.4} />
          <ContactButton {...SocialsData.youtube} delay={0.5} />
          <ContactButton {...SocialsData.wandb} delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default MobileContactSection;