// src/components/sections/Certifications/index.jsx
import React, { useState } from 'react';
import CertCard from './components/CertCard';
import CertModal from './components/CertModal';
import { Certifications } from '../../../data/CertificationsData';


const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="w-full py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="
          text-4xl md:text-5xl font-bold mb-6
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          bg-clip-text text-transparent
        ">
          Certifications
        </h1>
        <p className="text-lg text-gray-400">
          Professional Certifications and achievements in cloud technologies
        </p>
        {/* Decorative Line */}
        <div className="
          w-24 h-1 mx-auto mt-8
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500
          rounded-full
        " />
      </div>

      {/* Grid */}
      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-6 max-w-7xl mx-auto
      ">
        {Certifications.map((cert) => (
          <CertCard
            key={cert.id}
            cert={cert}
            onClick={() => openModal(cert)}
          />
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

export default CertificationsSection;