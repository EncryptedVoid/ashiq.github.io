// src/features/contact/Contact.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialsData } from '@data/SocialsData';

// Enhanced Featured Card (for email and calendly) - with description
const FeaturedCard = ({ data, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.icon;

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        className="relative h-[200px] w-full rounded-xl overflow-hidden cursor-pointer" // Increased height for more space
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={data.onClick}
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden z-0">
          <div className={`
            absolute inset-0
            bg-[length:200%_200%]
            ${isHovered ? 'bg-gradient-to-br ' + data.gradient : 'bg-transparent'}
            transition-all duration-700
          `} />

          {!isHovered && (
            <motion.div
              className={`
                absolute -inset-[100%] w-[300%] h-[300%]
                bg-gradient-to-r ${data.gradient}
              `}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                borderRadius: "40%",
              }}
            />
          )}
        </div>

        {/* Card content with texture */}
        <div className={`
          absolute inset-[1px] rounded-[10px] z-10 overflow-hidden
          ${isHovered ? 'bg-black/60' : 'bg-gray-900/90'}
          backdrop-blur-md
          transition-all duration-500
          flex flex-col
        `}>
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative h-full w-full p-6 flex flex-col"> {/* Increased padding */}
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-lg flex-shrink-0
                bg-black/30 backdrop-blur-sm
                flex items-center justify-center
                ${isHovered ? data.hoverColor : 'text-white/80'}
                transition-all duration-300
                shadow-lg
              `}>
                <Icon className="w-7 h-7" />
              </div>

              <div className="flex-1 min-w-0">
                {/* Name - most prominent */}
                <h3 className="text-2xl font-semibold text-white mb-1">{data.label}</h3>

                {/* Stats - smaller and less prominent */}
                {data.stats && (
                  <p className="text-sm text-white/50 mb-2">{data.stats}</p>
                )}
              </div>
            </div>

            {/* Description at bottom */}
            {data.description && (
              <p className="text-sm text-white/70 mt-auto pr-2">{data.description}</p>
            )}
          </div>
        </div>

        {/* Depth shadow */}
        <div className={`
          absolute -inset-0.5 rounded-xl
          opacity-0 ${isHovered ? 'opacity-30' : ''}
          blur-md bg-gradient-to-br ${data.gradient}
          transition-opacity duration-500
          -z-10
        `} />
      </div>
    </motion.div>
  );
};

// Simple Card (for social platforms) - just logo and name, no description
const SimpleCard = ({ data, delay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = data.icon;

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div
        className="relative h-[120px] w-full rounded-xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={data.onClick}
      >
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden z-0">
          <div className={`
            absolute inset-0
            bg-[length:200%_200%]
            ${isHovered ? 'bg-gradient-to-br ' + data.gradient : 'bg-transparent'}
            transition-all duration-700
          `} />

          {!isHovered && (
            <motion.div
              className={`
                absolute -inset-[100%] w-[300%] h-[300%]
                bg-gradient-to-r ${data.gradient}
              `}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                borderRadius: "40%",
              }}
            />
          )}
        </div>

        {/* Card content with texture - simpler layout */}
        <div className={`
          absolute inset-[1px] rounded-[10px] z-10 overflow-hidden
          ${isHovered ? 'bg-black/60' : 'bg-gray-900/90'}
          backdrop-blur-md
          transition-all duration-500
          flex items-center justify-center
        `}>
          {/* Texture overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="flex flex-col items-center text-center p-4">
            {/* Icon */}
            <div className={`
              w-14 h-14 rounded-lg
              bg-black/30 backdrop-blur-sm
              flex items-center justify-center mb-3
              ${isHovered ? data.hoverColor : 'text-white/80'}
              transition-all duration-300
              shadow-lg
            `}>
              <Icon className="w-7 h-7" />
            </div>

            {/* Name only */}
            <h3 className="text-lg font-semibold text-white">{data.label}</h3>
          </div>
        </div>

        {/* Depth shadow */}
        <div className={`
          absolute -inset-0.5 rounded-xl
          opacity-0 ${isHovered ? 'opacity-30' : ''}
          blur-md bg-gradient-to-br ${data.gradient}
          transition-opacity duration-500
          -z-10
        `} />
      </div>
    </motion.div>
  );
};

// Photo Gallery Component
const PhotoGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([
    // These would be replaced with actual images from your public folder
    '/assets/team/team-photo-1.jpg',
    '/assets/team/team-photo-2.jpg',
    '/assets/team/team-photo-3.jpg',
    '/assets/team/team-photo-4.jpg',
  ]);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full w-full rounded-xl overflow-hidden">
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
        <h3 className="text-2xl font-semibold text-white mb-2">Working Together</h3>
        <p className="text-white/70">Collaborating with amazing teams to build exceptional products</p>
      </div>

      {/* Images */}
      <AnimatePresence mode="wait">
        {images.map((img, index) => (
          currentImageIndex === index && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={img}
                alt={`Team photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Image pagination dots */}
      <div className="absolute bottom-4 right-4 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'w-6 bg-rose-500' : 'bg-white/40'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Main Contact Component with proper grid spacing
const ContactDesktop = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(250, 140, 140, 0.15) 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid grid-cols-12 gap-8 min-h-[70vh]">
          {/* Left Column - Contact Cards */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
              Let's Connect
            </h2>

            {/* Featured contact methods (Email and Calendar) with descriptions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeaturedCard data={SocialsData.email} delay={0.1} />
              <FeaturedCard data={SocialsData.calendly} delay={0.2} />
            </div>

            {/* Social platforms - simpler cards with just logo and name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <SimpleCard data={SocialsData.github} delay={0.3} />
              <SimpleCard data={SocialsData.linkedin} delay={0.4} />
              <SimpleCard data={SocialsData.youtube} delay={0.5} />
              <SimpleCard data={SocialsData.wandb} delay={0.6} />
            </div>
          </div>

          {/* Right Column - Photo Gallery */}
          <div className="col-span-12 lg:col-span-4 h-full min-h-[580px]">
            <PhotoGallery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDesktop;