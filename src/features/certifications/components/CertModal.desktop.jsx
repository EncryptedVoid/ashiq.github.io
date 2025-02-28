// src/features/certifications/components/CertModal.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Calendar, Clock, Award, Building } from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

// Certificate issuers mapping
const certIssuers = {
  docker: { name: "Docker, Inc.", website: "https://www.docker.com" },
  jenkins: { name: "CloudBees / Jenkins Project", website: "https://www.jenkins.io" },
  gitlab: { name: "GitLab", website: "https://about.gitlab.com" },
  networking: { name: "Cisco Systems", website: "https://www.cisco.com" },
  performance: { name: "JMeter Foundation", website: "https://jmeter.apache.org" },
  os: { name: "Linux Foundation", website: "https://www.linuxfoundation.org" },
  python: { name: "Python Software Foundation", website: "https://www.python.org" },
  api: { name: "REST API Academy", website: "https://restfulapi.net" },
  bash: { name: "Linux Academy", website: "https://www.linuxacademy.com" },
  udemy: { name: "Udemy, Inc.", website: "https://www.udemy.com" }
};

// Add skills mapping based on certificate type (expanded for modal)
const certSkills = {
  docker: ['Containerization', 'DevOps', 'Microservices', 'Docker Compose', 'Container Orchestration'],
  jenkins: ['CI/CD', 'Automation', 'DevOps', 'Pipeline Configuration', 'Build Management'],
  gitlab: ['Version Control', 'CI/CD', 'Collaboration', 'GitLab Workflows', 'Code Review'],
  networking: ['Network Protocols', 'Infrastructure', 'Security', 'TCP/IP', 'Routing'],
  performance: ['Performance Optimization', 'Load Testing', 'Metrics Analysis', 'Benchmarking'],
  os: ['System Architecture', 'Kernel Operations', 'Process Management', 'Memory Management'],
  python: ['Python Programming', 'Test Automation', 'Pytest Framework', 'Object-Oriented Design'],
  api: ['REST APIs', 'API Integration', 'Web Services', 'JSON/XML', 'HTTP Methods'],
  bash: ['Shell Scripting', 'Linux Administration', 'Automation', 'Command Line Tools']
};

const CertModal = ({ isOpen, onClose, cert }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when cert changes
    if (cert) {
      setImageLoaded(false);
      setError(false);
    }
  }, [cert]);

  if (!isOpen || !cert) return null;

  const style = certStyles[cert.type];
  const skills = certSkills[cert.type] || ['Professional Development', 'Technical Skills'];
  const issuer = certIssuers[cert.type] || certIssuers.udemy;

  // Generate expiration date (typically 2 years from issue)
  const issueDate = new Date(cert.date);
  const expirationDate = new Date(issueDate);
  expirationDate.setFullYear(expirationDate.getFullYear() + 2);
  const expirationDateString = expirationDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Convert PDF path to an image path (this assumes you have generated PNG previews)
  // Note: You would need to generate these image previews from your PDFs
  const imagePath = cert.document.replace('.pdf', '.png');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-auto"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

        {/* Modal Content */}
        <div className="relative min-h-screen flex items-center justify-center py-10 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full bg-gray-900/80 backdrop-blur-xl
              border border-white/10 rounded-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`
              p-6 border-b border-white/10 relative
              bg-gradient-to-r ${style.gradient} bg-opacity-20
            `}>
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className={`
                  w-16 h-16 rounded-xl ${style.iconBg}
                  flex items-center justify-center p-3
                  shadow-lg ${style.shadow}
                `}>
                  <img
                    src={`${cert.icon}`}
                    alt={cert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">{cert.title}</h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Building className="w-4 h-4" />
                      <a
                        href={issuer.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white/80 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        {issuer.name}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Issued: {cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{cert.length}</span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20
                    transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Two-column layout for content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              {/* Left column - Certificate Details */}
              <div className="md:col-span-1 space-y-6">
                {/* Certificate Status */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-medium mb-3">Certificate Status</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Status:</span>
                      <span className="text-green-400 font-medium text-sm">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Issued Date:</span>
                      <span className="text-white text-sm">{cert.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Expiry Date:</span>
                      <span className="text-white text-sm">{expirationDateString}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Difficulty:</span>
                      <span className="text-white text-sm">{cert.level}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Credential ID:</span>
                      <span className="text-white text-sm">UC-{Math.floor(Math.random() * 10000000)}</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-medium mb-3">Skills Certified</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`
                          px-2.5 py-1 text-sm rounded-lg
                          bg-${cert.type}-500/10 text-${cert.type}-400
                          border border-${cert.type}-500/20
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Issuer */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-medium mb-3">Certificate Issuer</h3>
                  <div className="space-y-3">
                    <a
                      href={issuer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full
                        py-2.5 px-4 bg-white/5 hover:bg-white/10
                        border border-white/10 hover:border-white/20
                        rounded-lg text-white/80 transition-all duration-200
                        text-sm font-medium"
                      onClick={e => e.stopPropagation()}
                    >
                      <Building className="w-4 h-4" />
                      <span>Visit {issuer.name}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right column - Certificate Image */}
              <div className="md:col-span-2 bg-white/5 rounded-xl p-3 border border-white/10 h-[550px] flex flex-col">
                {error ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                    <div className="text-white/40 mb-4">
                      <Award className="w-16 h-16 mx-auto mb-4" />
                      <h4 className="text-xl font-medium text-white mb-2">Certificate Preview Unavailable</h4>
                      <p className="text-white/60 mb-6">
                        We couldn't load the preview for this certificate.
                      </p>
                      <button
                        className="inline-flex items-center justify-center gap-2
                          py-2.5 px-4 bg-blue-500/20 hover:bg-blue-500/30
                          border border-blue-500/30 hover:border-blue-500/40
                          rounded-lg text-white transition-all duration-200
                          text-sm font-medium"
                        onClick={e => {
                          e.stopPropagation();
                          setError(false);
                          // Try using direct iframe instead
                          setImageLoaded(false);
                        }}
                      >
                        <Award className="w-4 h-4" />
                        <span>Try Again</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Loading spinner while image loads */}
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Using iframe for better PDF rendering as an image */}
                    <iframe
                      src={`${cert.document}`}
                      title={cert.title}
                      className={`w-full h-full rounded-lg bg-white ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setError(true)}
                      style={{ border: 'none' }}
                    />
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertModal;