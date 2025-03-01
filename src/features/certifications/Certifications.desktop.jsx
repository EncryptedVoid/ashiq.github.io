// src/features/certifications/Certifications.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Certifications as CertificationsData, certStyles } from '@data/CertificationsData';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { CertCard, CertModal } from './components';
import { useScrollAnimation } from '@hooks';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredCerts, setFilteredCerts] = useState(CertificationsData);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Extract unique certificate types for filtering
  const certTypes = ['all', ...new Set(CertificationsData.map(cert => cert.type))];

  // Initial limit of certificates to show
  const initialLimit = 6;

  // Apply filters when active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredCerts(CertificationsData);
    } else {
      setFilteredCerts(CertificationsData.filter(cert => cert.type === activeFilter));
    }
    // Reset expanded state when filter changes
    setExpanded(false);
  }, [activeFilter]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      ref={ref}
      className="w-full md:px-8"
    >
      {/* Header with filter tabs */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {certTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300
                ${activeFilter === type
                  ? ' text-blue-400 border-blue-500/30'
                  : ' text-white/60 border-white/10 hover:bg-white/10'}
                border uppercase text-sm font-medium
              `}
            >
              {type === 'all' ? 'All Certificates' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Grid */}
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show limited items when not expanded */}
          {filteredCerts.slice(0, expanded ? filteredCerts.length : initialLimit).map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CertCard
                cert={cert}
                onClick={() => openModal(cert)}
              />
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredCerts.length > initialLimit && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              {expanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Show More ({filteredCerts.length - initialLimit} more)</span>
                  <ChevronDown className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <CertModal
        isOpen={isModalOpen}
        onClose={closeModal}
        cert={selectedCert}
      />
    </section>
  );
};

export default Certifications;