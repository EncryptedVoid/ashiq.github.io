import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { socialPlatforms } from '../../../data/SocialsData';

const MobileSocial = () => {
  // Take first 4 platforms for the grid
  const primaryPlatforms = socialPlatforms.slice(0, 4);

  return (
    <div id="contact-section" className="w-full pb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-block relative">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400/0 via-purple-400/50 to-pink-400/0" />
        </div>
      </motion.div>

      <div className="space-y-4 mb-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full flex items-center gap-3 p-4 relative overflow-hidden
            rounded-2xl border border-blue-500/20
            active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 animate-gradient-x" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),transparent)]" />
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <span className="text-lg font-medium text-white relative z-10">Email Me</span>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full flex items-center gap-3 p-4 relative overflow-hidden
            rounded-2xl border border-green-500/20
            active:scale-[0.98] transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 animate-gradient-x" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(34,197,94,0.1),transparent)]" />
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-green-400" />
          </div>
          <span className="text-lg font-medium text-white relative z-10">Schedule a Call</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {primaryPlatforms.map((platform, index) => (
          <motion.a
            key={platform.platform}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="aspect-square flex items-center justify-center
              rounded-2xl bg-white/[0.03] border border-white/[0.08]
              overflow-hidden relative
              active:scale-95 transition-all duration-300"
            >
              <div className={`absolute inset-0 ${platform.gradient} opacity-10
                group-hover:opacity-20 transition-opacity duration-300`} />
              <platform.icon className="w-6 h-6 text-white/80 group-hover:text-white
                transition-all duration-300 transform group-hover:scale-110" />
            </div>
            <div className="mt-2 text-[10px] text-center text-white/60 group-hover:text-white/80
              transition-colors duration-300">
              {platform.stats}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default MobileSocial;