import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';
import { TypewriterText } from './components/TypewriterText';
import ParticleField from './components/ParticleField';

const MobileHero = ({ heroData }) => {
  const { intro, status, profileImage, quickStats } = heroData;

  return (
    <div className="relative min-h-screen bg-black">
      <ParticleField />

      {/* Profile Header Section */}
      <div className="relative z-10">
        {/* Status Bar */}
        <motion.div
          className="flex items-center justify-between p-4 border-b border-white/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-sm">{status.availability}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white/60" />
            <span className="text-white/60 text-sm">{status.location}</span>
          </div>
        </motion.div>

        {/* Profile Info */}
        <div className="p-6">
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <motion.div
              className="relative w-24 h-24"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30">
                <img
                  src={profileImage.src}
                  alt={profileImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2 text-center">
                {quickStats.slice(0, 3).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-sm text-blue-400 font-mono">
              <TypewriterText text={intro.terminalText} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              {Object.values(intro.title).join(' ')}
            </h1>
            <p className="text-sm text-white/80 leading-relaxed">
              {intro.description[0]}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="mt-6 flex gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={status.resumeLink}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-blue-500/10
                       rounded-xl border border-blue-500/20 text-blue-400 text-sm font-medium"
            >
              View Resume
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/5
                       rounded-xl border border-white/10 text-white/80 text-sm font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          className="mt-6 p-4 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Recent Activity</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileHero;