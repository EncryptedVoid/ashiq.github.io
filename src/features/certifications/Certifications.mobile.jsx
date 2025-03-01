// src/features/certifications/Certifications.mobile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certifications as CertificationsData } from '@data/CertificationsData';
import {
  ChevronRight, ChevronLeft, ChevronDown, Filter,
  Award, X
} from 'lucide-react';
import { CertCardMobile as CertCard, CertModalMobile as CertModal } from './components';
import { useScrollAnimation } from '@hooks';

const MobileCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const carouselRef = useRef(null);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Extract unique certificate types for filters
  const certTypes = ['all', ...new Set(CertificationsData.map(cert => cert.type))];

  // Top featured certificates to always show
  const featuredCertsCount = 3;
  const featuredCerts = CertificationsData.slice(0, featuredCertsCount);

  // Remaining certificates that will be in the carousel
  const remainingCerts = CertificationsData.slice(featuredCertsCount);

  // Filtered certificates for carousel
  const [filteredCarouselCerts, setFilteredCarouselCerts] = useState(remainingCerts);

  // Apply filters when active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredCarouselCerts(remainingCerts);
    } else {
      setFilteredCarouselCerts(remainingCerts.filter(cert => cert.type === activeFilter));
    }
    setCurrentCarouselIndex(0);
  }, [activeFilter]);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  // Carousel navigation
  const nextSlide = () => {
    if (currentCarouselIndex < filteredCarouselCerts.length - 1) {
      setCurrentCarouselIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentCarouselIndex > 0) {
      setCurrentCarouselIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <section
      ref={ref}
      className="px-4 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 rounded-lg bg-white/5 border border-white/10"
        >
          <Filter className={`w-5 h-5 ${showFilters ? 'text-blue-400' : 'text-white/70'}`} />
        </button>
      </motion.div>

      {/* Filter chips - collapsible */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mb-6"
          >
            <div className="pb-2 flex flex-wrap gap-2">
              {certTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveFilter(type);
                    setShowAllCerts(false);
                  }}
                  className={`
                    px-3 py-1.5 rounded-full text-sm transition-all duration-300
                    ${activeFilter === type
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      : 'bg-white/5 text-white/60 border-white/10'}
                    border capitalize
                  `}
                >
                  {type === 'all' ? 'All' : type}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Featured Certifications */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-medium text-sm uppercase tracking-wider">
            Featured Certifications
          </h3>
          <span className="text-xs text-white/40">{featuredCerts.length} certificates</span>
        </div>

        <div className="space-y-3">
          {featuredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CertCard
                cert={cert}
                onClick={() => handleCertClick(cert)}
                featured={true}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      {!showAllCerts && filteredCarouselCerts.length > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-3 px-4 rounded-xl
            bg-white/5 border border-white/10
            text-white/70 font-medium flex items-center justify-center gap-2"
          onClick={() => setShowAllCerts(true)}
        >
          <span>Show More Certificates ({remainingCerts.length})</span>
          <ChevronDown className="w-5 h-5" />
        </motion.button>
      )}

      {/* Carousel of Additional Certificates */}
      <AnimatePresence>
        {showAllCerts && filteredCarouselCerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 overflow-hidden"
          >
            {/* Carousel Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                {activeFilter === 'all' ? 'All Other Certificates' : `${activeFilter} Certificates`}
              </h3>
              <button
                onClick={() => setShowAllCerts(false)}
                className="p-1.5 rounded-full bg-white/5 hover:bg-white/10"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Carousel */}
            <div className="relative">
              <div ref={carouselRef} className="mb-4 relative">
                <motion.div
                  key={currentCarouselIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <CertCard
                    cert={filteredCarouselCerts[currentCarouselIndex]}
                    onClick={() => handleCertClick(filteredCarouselCerts[currentCarouselIndex])}
                    featured={false}
                  />
                </motion.div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  disabled={currentCarouselIndex === 0}
                  className={`
                    p-2 rounded-full
                    ${currentCarouselIndex === 0
                      ? 'text-white/20 bg-white/5'
                      : 'text-white/60 bg-white/10'}
                  `}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-sm text-white/60">
                  {currentCarouselIndex + 1} of {filteredCarouselCerts.length}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={currentCarouselIndex === filteredCarouselCerts.length - 1}
                  className={`
                    p-2 rounded-full
                    ${currentCarouselIndex === filteredCarouselCerts.length - 1
                      ? 'text-white/20 bg-white/5'
                      : 'text-white/60 bg-white/10'}
                  `}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex justify-center gap-1 mt-4">
                {filteredCarouselCerts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCarouselIndex(index)}
                    className={`
                      w-2 h-2 rounded-full
                      ${index === currentCarouselIndex
                        ? 'bg-blue-400'
                        : 'bg-white/20'}
                      transition-all duration-200
                    `}
                    aria-label={`Go to certificate ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {showAllCerts && filteredCarouselCerts.length === 0 && (
        <div className="py-8 text-center text-white/40 bg-white/5 rounded-lg">
          No additional certificates found for this category
        </div>
      )}

      {/* Modal */}
      <CertModal
        cert={selectedCert}
        onClose={closeModal}
      />
    </section>
  );
};

export default MobileCertifications;