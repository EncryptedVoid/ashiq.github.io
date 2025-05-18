// components/CertModal.desktop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Download, ExternalLink, Calendar, Clock, Award, Building,
  Globe, User, BookOpen, Link, BarChart3, ChevronRight
} from 'lucide-react';
import { certStyles } from '@data/CertificationsData';

const CertModalDesktop = ({ certificate, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (certificate) {
      setImageLoading(true);
      setImageError(false);
      setActiveTab('overview');
    }
  }, [certificate]);

  if (!certificate) return null;

  const style = certStyles[certificate.type];

  // Mock data for demonstration - you'd typically fetch this
  const additionalData = {
    completionRate: '95%',
    certificateId: `CERT-${certificate.id}-${new Date().getFullYear()}`,
    expiryDate: new Date(new Date(certificate.date).setFullYear(new Date(certificate.date).getFullYear() + 2)).toLocaleDateString(),
    relatedCourses: ['Advanced React', 'System Design', 'Cloud Architecture'],
    prerequisites: ['Basic Programming', 'Web Development Fundamentals'],
    nextSteps: ['Advanced Certification', 'Practical Projects', 'Teaching Others']
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'details', label: 'Details', icon: BarChart3 },
    { id: 'preview', label: 'Preview', icon: ExternalLink },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-auto bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="min-h-screen flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-6xl w-full bg-gray-900/95 backdrop-blur border border-gray-700 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`relative p-8 border-b border-gray-800 bg-gradient-to-r ${style.gradient} bg-opacity-10`}>
              <div className="flex items-start gap-6">
                <div className={`w-20 h-20 rounded-xl ${style.iconBg} flex items-center justify-center p-4 ${style.shadow}`}>
                  <img
                    src={certificate.icon}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {certificate.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{certificate.platform}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{certificate.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Completed {certificate.date}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-1 mt-8 border-b border-gray-800">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'text-white border-b-2 border-purple-400'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="grid md:grid-cols-2 gap-8"
                  >
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Course Description</h3>
                        <p className="text-gray-300 leading-relaxed">
                          {certificate.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Skills Covered</h3>
                        <div className="flex flex-wrap gap-2">
                          {certificate.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 text-sm border border-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Personal Projects */}
                      {certificate.projects && certificate.projects.length > 0 && (
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-4">Related Projects</h3>
                          <div className="space-y-2">
                            {certificate.projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                              >
                                <Link className="w-4 h-4 text-purple-400" />
                                <span className="text-gray-300">{project.name}</span>
                                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Certificate Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Duration</span>
                            <span className="text-white">{certificate.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Level</span>
                            <span className="text-white">{certificate.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Completion</span>
                            <span className="text-white">{additionalData.completionRate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Certificate ID</span>
                            <span className="text-white font-mono text-sm">{additionalData.certificateId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Expires</span>
                            <span className="text-white">{additionalData.expiryDate}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Next Steps</h3>
                        <div className="space-y-2">
                          {additionalData.nextSteps.map((step, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-300">
                              <ChevronRight className="w-4 h-4 text-purple-400" />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'details' && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <h3 className="text-white font-medium mb-4">Performance</h3>
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full" />
                          <div className="relative text-center py-8">
                            <div className="text-3xl font-bold text-white">{additionalData.completionRate}</div>
                            <div className="text-sm text-gray-400">Completion Rate</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <h3 className="text-white font-medium mb-4">Time Investment</h3>
                        <div className="text-center py-8">
                          <div className="text-3xl font-bold text-white">{certificate.length}</div>
                          <div className="text-sm text-gray-400">Total Duration</div>
                          <div className="mt-2 text-xs text-gray-500">
                            {certificate.timeInvestment || 'Self-paced'}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <h3 className="text-white font-medium mb-4">Validation</h3>
                        <div className="text-center py-8">
                          <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Award className="w-8 h-8 text-green-400" />
                          </div>
                          <div className="text-sm text-gray-400">Verified Certificate</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Prerequisites</h3>
                        <div className="space-y-2">
                          {additionalData.prerequisites.map((prereq, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-300 bg-gray-800/30 p-3 rounded">
                              <Award className="w-4 h-4 text-gray-400" />
                              <span>{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Related Courses</h3>
                        <div className="space-y-2">
                          {additionalData.relatedCourses.map((course, index) => (
                            <div key={index} className="flex items-center gap-2 text-gray-300 bg-gray-800/30 p-3 rounded">
                              <BookOpen className="w-4 h-4 text-gray-400" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                    className="space-y-6"
                  >
                    <div className="relative">
                      {imageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                          <div className="w-10 h-10 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                        </div>
                      )}

                      {imageError ? (
                        <div className="h-[600px] bg-gray-800 rounded-lg flex flex-col items-center justify-center text-center p-8">
                          <Award className="w-16 h-16 text-gray-400 mb-4" />
                          <h3 className="text-xl font-semibold text-white mb-2">Preview Unavailable</h3>
                          <p className="text-gray-400 mb-6">Unable to load certificate preview</p>
                          <button
                            onClick={() => setImageError(false)}
                            className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 transition-colors"
                          >
                            Try Again
                          </button>
                        </div>
                      ) : (
                        <iframe
                          src={certificate.document}
                          title={certificate.title}
                          className={`w-full h-[600px] rounded-lg border border-gray-700 bg-white ${imageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                          onLoad={() => setImageLoading(false)}
                          onError={() => {
                            setImageLoading(false);
                            setImageError(true);
                          }}
                        />
                      )}
                    </div>

                    <div className="flex justify-center gap-4">
                      <a
                        href={certificate.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download Certificate
                      </a>

                      {certificate.courseUrl && (
                        <a
                          href={certificate.courseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          View Course
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CertModalDesktop;