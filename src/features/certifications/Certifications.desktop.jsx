// src/features/certifications/Certifications.desktop.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Certifications as CertificationsData, certStyles } from '@data/CertificationsData';
import { CertCard, CertModal } from './components';
import { useScrollAnimation } from '@hooks';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

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
      className="w-full py-20 px-4 md:px-8"
    >
      {/* Grid */}
      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-6 max-w-7xl mx-auto
      ">
        {CertificationsData.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertCard
              cert={cert}
              onClick={() => openModal(cert)}
            />
          </motion.div>
        ))}
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