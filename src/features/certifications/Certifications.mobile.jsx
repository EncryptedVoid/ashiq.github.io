// src/features/certifications/Certifications.mobile.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Certifications as CertificationsData } from '@data/CertificationsData';
import CertCard from './components/CertCard.mobile';
import CertModal from './components/CertModal.mobile';
import { useScrollAnimation } from '@hooks';

const MobileCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      ref={ref}
      className="py-16 px-4 space-y-6"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="tech-heading text-3xl font-bold mb-2">
          Certifications
        </h2>
        <p className="tech-text text-sm text-white/60">
          Industry recognized certificates and achievements
        </p>
      </motion.div>

      {/* Cards */}
      <div className="space-y-4">
        {CertificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
          >
            <CertCard
              cert={cert}
              onClick={() => handleCertClick(cert)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <CertModal
        cert={selectedCert}
        onClose={closeModal}
      />
    </section>
  );
};

export default MobileCertifications;