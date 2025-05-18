// src/features/contact/Contact.mobile.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialsData } from '@data/SocialsData';

const ContactMobile = () => {
  // Mobile Contact Button
  const ContactButton = ({ data, index, isFeatured = false }) => {
    const [isPressed, setIsPressed] = useState(false);
    const Icon = data.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="w-full"
      >
        <div
          className={`
            relative bg-black/40 border border-white/10
            ${isFeatured ? 'py-4' : 'py-3'} px-4
            rounded-xl overflow-hidden
            transition-all duration-200
          `}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onClick={data.onClick}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)`,
              backgroundSize: '12px 12px',
            }}
          />

          {/* Card content */}
          <div className="relative z-10 flex items-center">
            {/* Logo Circle */}
            <div className={`
              w-10 h-10 rounded-full
              bg-gradient-to-br ${data.gradient}
              flex items-center justify-center
              transition-transform duration-200
              ${isPressed ? 'scale-95' : ''}
              shadow-md
            `}>
              <Icon className="w-5 h-5 text-white" />
            </div>

            {/* Text content */}
            <div className="ml-4 flex-1">
              <h3 className="text-white font-medium text-base">
                {data.label}
              </h3>

              {/* Description for featured buttons only */}
              {isFeatured && data.description && (
                <p className="text-white/60 text-xs mt-1">
                  {data.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Photo Carousel for Mobile
  const MobilePhotoCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([
      '/assets/team/team-photo-1.jpg',
      '/assets/team/team-photo-2.jpg',
      '/assets/team/team-photo-3.jpg',
    ]);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-8 shadow-md">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
          <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
          <p className="text-sm text-white/70">Building the future together</p>
        </div>

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

        <div className="absolute bottom-3 right-4 flex gap-1.5 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? 'w-4 bg-rose-500' : 'bg-white/40'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 py-10">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">
          Let's Connect
        </h2>

        {/* Primary contact methods */}
        <div className="space-y-4 mb-8">
          <ContactButton data={SocialsData.email} index={0} isFeatured={true} />
          <ContactButton data={SocialsData.calendly} index={1} isFeatured={true} />
        </div>

        {/* Photo carousel */}
        <MobilePhotoCarousel />

        {/* Social platforms */}
        <h3 className="text-white/80 text-xs uppercase tracking-wider font-medium mb-4">
          Professional Profiles
        </h3>
        <div className="space-y-3">
          <ContactButton data={SocialsData.github} index={2} />
          <ContactButton data={SocialsData.linkedin} index={3} />
          <ContactButton data={SocialsData.youtube} index={4} />
          <ContactButton data={SocialsData.wandb} index={5} />
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;