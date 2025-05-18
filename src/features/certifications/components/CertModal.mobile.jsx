// components/CertModal.mobile.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Download, ExternalLink, Calendar, Clock, Award,
  Building, User, BookOpen, Link, ChevronRight, Globe
} from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertModalMobile = ({ certificate, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (certificate) {
      setImageLoading(true);
      setImageError(false);
      setActiveTab('overview');
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [certificate]);

  if (!certificate) return null;

  const style = certStyles[certificate.type];

  // Mock data for demonstration
  const additionalData = {
    completionRate: '95%',
    certificateId: `CERT-${certificate.id}-${new Date().getFullYear()}`,
    expiryDate: new Date(new Date(certificate.date).setFullYear(new Date(certificate.date).getFullYear() + 2)).toLocaleDateString(),
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'preview', label: 'Preview' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
      >
        {/* Header */}
        <div className={`sticky top-0 z-20 bg-gray-900/95 backdrop-blur border-b border-gray-800`}>
          <div className="flex items-center gap-4 p-4">
            <button onClick={onClose} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-white truncate">
                {certificate.title}
              </h2>
              <p className="text-sm text-gray-400">{certificate.platform}</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-400 border-b-2 border-purple-400'
                    : 'text-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-4 space-y-6"
              >
                {/* Header Info */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className={`w-14 h-14 rounded-lg ${style.iconBg} flex items-center justify-center p-3`}>
                    <img src={certificate.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{certificate.title}</h3>
                    <div className="text-sm text-gray-400 mt-1">
                      {certificate.instructor}
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                    <Calendar className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">Completed</p>
                    <p className="text-sm text-white">{certificate.date}</p>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                    <Clock className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">Duration</p>
                    <p className="text-sm text-white">{certificate.length}</p>
                  </div>
                  <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                    <Award className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-400">Level</p>
                    <p className="text-sm text-white">{certificate.level}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-white font-medium mb-3">Course Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-white font-medium mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {certificate.projects && certificate.projects.length > 0 && (
                  <div>
                    <h4 className="text-white font-medium mb-3">Related Projects</h4>
                    <div className="space-y-2">
                      {certificate.projects.map((project, index) => (
                        <a
                          key={index}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg active:bg-gray-800"
                        >
                          <Link className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300 text-sm flex-1">{project.name}</span>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-4 space-y-4"
              >
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Certificate Details</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Completion Rate</span>
                      <span className="text-white text-sm font-medium">{additionalData.completionRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Certificate ID</span>
                      <span className="text-white text-sm font-mono">{additionalData.certificateId}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Valid Until</span>
                      <span className="text-white text-sm">{additionalData.expiryDate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Time Investment</span>
                      <span className="text-white text-sm">{certificate.timeInvestment || 'Self-paced'}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Industry Recognition</h4>
                  <div className="space-y-2">
                    {certificate.industry.map((industry, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <ChevronRight className="w-4 h-4 text-purple-400" />
                        <span>{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {certificate.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs rounded bg-gray-700/50 text-gray-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'preview' && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="p-4 space-y-4"
              >
                <div className="relative">
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg h-64">
                      <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                    </div>
                  )}

                  {imageError ? (
                    <div className="h-64 bg-gray-800 rounded-lg flex flex-col items-center justify-center text-center p-6">
                      <Award className="w-12 h-12 text-gray-400 mb-3" />
                      <h3 className="text-lg font-medium text-white mb-2">Preview Unavailable</h3>
                      <p className="text-sm text-gray-400 mb-4">Unable to load certificate preview</p>
                      <button
                        onClick={() => setImageError(false)}
                        className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 text-sm"
                      >
                        Try Again
                      </button>
                    </div>
                  ) : (
                    <iframe
                      src={certificate.document}
                      title={certificate.title}
                      className={`w-full h-64 rounded-lg border border-gray-700 bg-white ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
                      onLoad={() => setImageLoading(false)}
                      onError={() => {
                        setImageLoading(false);
                        setImageError(true);
                      }}
                    />
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={certificate.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Certificate</span>
                  </a>

                  {certificate.courseUrl && (
                    <a
                      href={certificate.courseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
                    >
                      <Globe className="w-4 h-4" />
                      <span>View Course</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertModalMobile;