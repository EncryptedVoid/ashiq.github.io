// src/features/certifications/components/CertModal.mobile.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Download, ExternalLink, Calendar, Clock,
  Award, Building, ChevronLeft, ChevronRight
} from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

// Certificate issuers mapping (same as desktop)
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
  docker: ['Containerization', 'DevOps', 'Microservices', 'Docker Compose'],
  jenkins: ['CI/CD', 'Automation', 'DevOps', 'Pipeline Config'],
  gitlab: ['Version Control', 'CI/CD', 'Collaboration', 'GitLab Workflows'],
  networking: ['Network Protocols', 'Infrastructure', 'Security', 'TCP/IP'],
  performance: ['Performance Optimization', 'Load Testing', 'Metrics Analysis'],
  os: ['System Architecture', 'Kernel Operations', 'Process Management'],
  python: ['Python Programming', 'Test Automation', 'Pytest Framework'],
  api: ['REST APIs', 'API Integration', 'Web Services', 'HTTP Methods'],
  bash: ['Shell Scripting', 'Linux Administration', 'Automation']
};

const CertModalMobile = ({ cert, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when cert changes
    if (cert) {
      setImageLoaded(false);
      setError(false);
      setActiveTab('details');
    }
  }, [cert]);

  if (!cert) return null;

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
  const imagePath = cert.document.replace('.pdf', '.png');

  // Tab button component
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex-1 py-2.5 flex items-center justify-center gap-1.5
        ${activeTab === id
          ? 'text-blue-400 border-b-2 border-blue-400'
          : 'text-white/50'}
        transition-all duration-200
      `}
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col touch-none"
        >
          {/* Header */}
          <div className={`
            px-4 py-3 border-b border-white/10
            bg-gradient-to-r ${style.gradient} bg-opacity-20
            sticky top-0 z-10
          `}>
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="p-2 -ml-2 rounded-full"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <h2 className="text-white font-bold text-lg text-center truncate px-2 flex-1">
                Certificate Details
              </h2>

              <div className="w-10"></div> {/* Spacer for alignment */}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-white/10">
            <TabButton id="details" label="Details" icon={Award} />
            <TabButton id="preview" label="Preview" icon={ExternalLink} />
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 space-y-5"
                >
                  {/* Certificate Title & Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`
                      w-12 h-12 rounded-lg ${style.iconBg}
                      flex items-center justify-center p-2
                      flex-shrink-0
                    `}>
                      <img
                        src={`${cert.icon}`}
                        alt={cert.title}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{cert.title}</h3>
                      <div className="text-white/60 text-sm">
                        {issuer.name}
                      </div>
                    </div>
                  </div>

                  {/* Certificate Status */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white text-sm font-medium mb-3">Certificate Status</h4>
                    <div className="space-y-3">
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
                        <span className="text-white/60 text-sm">Duration:</span>
                        <span className="text-white text-sm">{cert.length}</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-white text-sm font-medium mb-3">Skills Certified</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-sm rounded-lg bg-white/10 text-white/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-3">
                    <a
                      href={issuer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full
                        py-3 px-4 bg-white/5
                        border border-white/10
                        rounded-xl text-white/80
                        text-sm font-medium"
                      onClick={e => e.stopPropagation()}
                    >
                      <Building className="w-5 h-5" />
                      <span>Visit {issuer.name}</span>
                    </a>

                    <button
                      onClick={() => setActiveTab('preview')}
                      className="flex items-center justify-center gap-2 w-full
                        py-3 px-4 bg-blue-500/20
                        border border-blue-500/30
                        rounded-xl text-white
                        text-sm font-medium"
                    >
                      <Award className="w-5 h-5" />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'preview' && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full p-2"
                >
                  {error ? (
                    <div className="flex flex-col items-center justify-center text-center p-6 h-full">
                      <div className="text-white/40 mb-4">
                        <Award className="w-16 h-16 mx-auto mb-4" />
                        <h4 className="text-lg font-medium text-white mb-2">Certificate Preview Unavailable</h4>
                        <p className="text-white/60 mb-6">
                          We couldn't load the preview for this certificate. You can still download the PDF.
                        </p>
                        <button
                          className="inline-flex items-center justify-center gap-2
                            py-2.5 px-4 bg-blue-500/20
                            border border-blue-500/30
                            rounded-lg text-white
                            text-sm font-medium"
                          onClick={e => {
                            e.stopPropagation();
                            setError(false);
                            setImageLoaded(false);
                            // Try to reload the tab
                            setActiveTab('details');
                            setTimeout(() => setActiveTab('preview'), 300);
                          }}
                        >
                          <Award className="w-4 h-4" />
                          <span>Try Again</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                      {/* Loading indicator */}
                      {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                      )}

                      {/* Using iframe for better PDF display */}
                      <iframe
                        src={`${cert.document}`}
                        title={cert.title}
                        className={`w-full h-full rounded-lg bg-white ${!imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setError(true)}
                        style={{ border: 'none' }}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertModalMobile;