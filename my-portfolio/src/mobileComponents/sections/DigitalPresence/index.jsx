import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mail, Calendar, ArrowRight, ExternalLink, Github, Linkedin, Youtube, Brain } from 'lucide-react';
import { TypewriterText } from '../../../styles/TypewriterText';
import { socialPlatforms } from '../../../data/SocialsData';

// Meeting scheduling URL
const CALENDLY_URL = "https://calendly.com/your-calendly-link";

const GlassmorphicCard = ({ children, gradient, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = useCallback(({ clientX, clientY, currentTarget }) => {
    const bounds = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - bounds.left);
    mouseY.set(clientY - bounds.top);
  }, []);

  const background = useMotionTemplate`radial-gradient(
    circle at ${mouseX}px ${mouseY}px,
    var(--highlight-color) 0%,
    transparent 65%
  )`;

  return (
    <motion.div
      onMouseMove={onMouseMove}
      className={`
        relative rounded-xl p-px overflow-hidden
        before:absolute before:inset-0 before:-z-10 before:rounded-xl
        before:bg-gradient-to-r ${gradient}
        after:absolute after:inset-0 after:-z-10 after:rounded-xl
        after:bg-black/90 after:transition-all after:duration-500
        hover:after:opacity-50
        group
        ${className}
      `}
      style={{ "--highlight-color": "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="relative rounded-[calc(0.75rem-1px)] bg-black/40 backdrop-blur-xl h-full">
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[calc(0.75rem-1px)] opacity-0
                     transition-opacity duration-500 group-hover:opacity-100"
          style={{ background }}
        />
        {children}
      </div>
    </motion.div>
  );
};

const PrimaryAction = ({ icon: Icon, text, onClick, gradient, delay = 0 }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    onClick={onClick}
    className="group relative w-full"
  >
    <GlassmorphicCard gradient={gradient}>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white/5 text-white/80">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-base font-medium text-white">{text}</span>
        </div>
        <motion.div
          whileHover={{ x: 4 }}
          className="p-2 rounded-lg bg-white/5 text-white/60"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </GlassmorphicCard>
  </motion.button>
);

const SocialButton = ({ platform, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const platformConfig = {
    GitHub: {
      icon: Github,
      gradient: "from-[#2ea043]/20 via-[#238636]/20 to-[#2ea043]/20",
      hoverColor: "group-hover:text-[#2ea043]"
    },
    LinkedIn: {
      icon: Linkedin,
      gradient: "from-[#0077b5]/20 via-[#00a0dc]/20 to-[#0077b5]/20",
      hoverColor: "group-hover:text-[#0077b5]"
    },
    YouTube: {
      icon: Youtube,
      gradient: "from-[#ff0000]/20 via-[#ff4e45]/20 to-[#ff0000]/20",
      hoverColor: "group-hover:text-[#ff0000]"
    },
    'W&B': {
      icon: Brain,
      gradient: "from-[#ff9d00]/20 via-[#ff0080]/20 to-[#ff9d00]/20",
      hoverColor: "group-hover:text-[#ff9d00]"
    }
  };

  const config = platformConfig[platform.platform];
  const Icon = config?.icon || Github;

  return (
    <motion.a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="block"
    >
      <GlassmorphicCard gradient={config.gradient} className="h-24">
        <div className="p-4 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Icon className={`w-5 h-5 text-white/60 transition-colors duration-300 ${config.hoverColor}`} />
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="p-1 rounded-lg bg-white/5"
            >
              <ExternalLink className="w-3 h-3 text-white/40" />
            </motion.div>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-sm font-medium text-white">
                {platform.platform}
              </h3>
              <span className="text-xs text-white/40">
                {platform.stats}
              </span>
            </div>
            <AnimatePresence>
              {isHovered && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-xs text-white/40 mt-1 line-clamp-1"
                >
                  {platform.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </GlassmorphicCard>
    </motion.a>
  );
};

const MobileSocial = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-block">
            <TypewriterText
              text="Let's Connect"
              size={3}
              typingSpeed={100}
              delayBeforeRestart={60000}
            />
          </div>
          <p className="text-base text-white/60">
            Get in touch for opportunities, collaborations, or just to say hello
          </p>
        </div>

        {/* Primary Actions */}
        <div className="space-y-3">
          <PrimaryAction
            icon={Mail}
            text="Send me an email"
            onClick={() => window.location.href = 'mailto:ashiqarib@gmail.com'}
            gradient="from-blue-500/20 via-cyan-500/20 to-blue-500/20"
            delay={0.2}
          />
          <PrimaryAction
            icon={Calendar}
            text="Schedule a call"
            onClick={() => window.open(CALENDLY_URL, '_blank')}
            gradient="from-green-500/20 via-emerald-500/20 to-green-500/20"
            delay={0.3}
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-3">
          {socialPlatforms.map((platform, index) => (
            <SocialButton
              key={platform.platform}
              platform={platform}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileSocial;