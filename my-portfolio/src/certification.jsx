import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const certStyles = {
  aws: {
    gradient: 'from-[#ff9900] to-[#ffc300]',
    shadow: 'shadow-[#ff9900]/20',
    iconBg: 'bg-[#ff9900]'
  },
  gcp: {
    gradient: 'from-[#4285f4] to-[#34a853]',
    shadow: 'shadow-[#4285f4]/20',
    iconBg: 'bg-[#4285f4]'
  },
  azure: {
    gradient: 'from-[#0078d4] to-[#00bcf2]',
    shadow: 'shadow-[#0078d4]/20',
    iconBg: 'bg-[#0078d4]'
  }
};

const CertCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];

  return (
    <div
      onClick={onClick}
      className={`
        group relative overflow-hidden
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        rounded-3xl p-8
        transition-all duration-700 ease-out
        hover:-translate-y-2 hover:shadow-2xl ${style.shadow}
        cursor-pointer
      `}
      role="button"
      tabIndex={0}
    >
      {/* Subtle gradient overlay */}
      <div className={`
        absolute inset-0 opacity-0 transition-opacity duration-700
        bg-gradient-to-br ${style.gradient}
        group-hover:opacity-[0.02]
      `} />

      {/* Left accent line */}
      <div className={`
        absolute left-0 top-0 h-full w-1
        bg-gradient-to-b ${style.gradient}
        opacity-0 origin-top scale-y-0
        transition-all duration-700
        group-hover:scale-y-100 group-hover:opacity-100
      `} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Container */}
        <div className={`
          relative w-32 h-32 mb-8
          bg-white/[0.03]
          border border-white/[0.06]
          rounded-2xl
          overflow-hidden
          transition-all duration-700
          group-hover:scale-110 group-hover:-rotate-3
          group-hover:shadow-lg ${style.shadow}
        `}>
          <img
            src={cert.icon}
            alt={cert.title}
            className="w-full h-full object-cover"
          />
          {/* Shine effect */}
          <div className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/[0.1] to-transparent
            translate-x-[-200%]
            group-hover:translate-x-[200%]
            transition-transform duration-1000
          " />
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h3 className={`
            text-2xl font-bold
            bg-gradient-to-r ${style.gradient}
            bg-clip-text text-transparent
            transition-transform duration-700
            group-hover:-translate-y-1
          `}>
            {cert.title}
          </h3>

          <p className="text-white/60">{cert.date}</p>

          <div className="
            inline-block
            px-4 py-2 rounded-full
            bg-white/[0.03] border border-white/[0.06]
            text-sm text-white/80
            transform translate-y-4 opacity-0
            transition-all duration-700 delay-100
            group-hover:translate-y-0 group-hover:opacity-100
          ">
            {cert.level}
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      {/* Backdrop */}
      <div className="
        absolute inset-0
        bg-black/80 backdrop-blur-xl
        transition-opacity duration-500
        animate-fadeIn
      " />

      {/* Modal Content */}
      <div className="
        absolute inset-8 md:inset-12
        flex items-center justify-center
      ">
        <div
          className="
            relative max-w-4xl w-full
            bg-white/[0.02] backdrop-blur-2xl
            border border-white/[0.06]
            rounded-3xl p-4
            animate-scaleIn
          "
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="
              absolute -top-12 right-0
              w-10 h-10 rounded-full
              bg-white/[0.03] hover:bg-white/[0.06]
              border border-white/[0.06]
              flex items-center justify-center
              transition-all duration-300
              hover:rotate-90
            "
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Certificate Image */}
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {  // Remove the certifications prop
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add certifications data
  const certifications = [
    {
      id: 1,
      type: 'aws',
      title: 'AWS Solutions Architect',
      date: 'December 2023',
      level: 'Associate',
      icon: '/path-to-aws-icon.png', // Add your icon path
      image: '/path-to-aws-cert.png' // Add your certificate image path
    },
    {
      id: 2,
      type: 'gcp',
      title: 'Google Cloud Professional',
      date: 'November 2023',
      level: 'Professional',
      icon: '/path-to-gcp-icon.png',
      image: '/path-to-gcp-cert.png'
    },
    {
      id: 3,
      type: 'azure',
      title: 'Azure Solutions Architect',
      date: 'October 2023',
      level: 'Expert',
      icon: '/path-to-azure-icon.png',
      image: '/path-to-azure-cert.png'
    }
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, []);

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
    <div className="w-full py-20 px-4 md:px-8">
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
          Professional certifications and achievements in cloud technologies
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
        {certifications.map((cert) => (
          <CertCard
            key={cert.id}
            cert={cert}
            onClick={() => openModal(cert)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        cert={selectedCert}
      />
    </div>
  );
};

export default Certifications;