import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Trophy, Award, Clock, Calendar, Star, Search, Download, ExternalLink,
  X, ArrowLeft, Globe, FileText
} from 'lucide-react';
import { Certifications, certStyles } from '@data/CertificationsData';

const CertificationsMobile = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  // Animation refs
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const cardsRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });

  const categories = useMemo(() => {
    const cats = [...new Set(Certifications.map(cert => cert.category))];
    return ['all', ...cats];
  }, []);

  const filteredCerts = useMemo(() => {
    let filtered = Certifications;

    if (activeCategory !== 'all') {
      filtered = filtered.filter(cert => cert.category === activeCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  // Group certificates by category for Instagram-style horizontal scrolling
  const certsByCategory = useMemo(() => {
    const grouped = {};

    if (activeCategory === 'all') {
      // Group all certificates by their categories
      Certifications.forEach(cert => {
        if (!grouped[cert.category]) {
          grouped[cert.category] = [];
        }
        grouped[cert.category].push(cert);
      });
    } else {
      // Show only selected category
      grouped[activeCategory] = filteredCerts;
    }

    return grouped;
  }, [activeCategory, filteredCerts]);

  // Mobile Certificate Card - same design as before
  const MobileCertCard = ({ cert, index }) => {
    const style = certStyles[cert.type] || certStyles.docker;

    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl overflow-hidden flex-shrink-0 w-80 mx-2"
        whileTap={{ scale: 0.98 }}
        onClick={() => setSelectedCert(cert)}
      >
        {/* Header with gradient */}
        <div className={`h-2 bg-gradient-to-r ${style.gradient}`} />

        <div className="p-4">
          {/* Top Row */}
          <div className="flex items-start gap-3 mb-3">
            <div className={`w-12 h-12 rounded-xl ${style.iconBg} p-2 flex-shrink-0`}>
              <img src={cert.icon} alt="" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">
                {cert.title}
              </h3>
              <p className="text-purple-400 text-xs">{cert.platform}</p>
            </div>
            <div className="text-right">
              <div className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80">
                {cert.level}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-4 mb-3 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{cert.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{cert.date}</span>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.slice(0, 3).map((skill, idx) => (
              <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-400">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Instagram-style Horizontal Scroll Section
  const HorizontalCertSection = ({ title, certs }) => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="text-sm text-white/60">{certs.length} cert{certs.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex pl-4 pr-4">
            {certs.map((cert, index) => (
              <MobileCertCard key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Mobile Modal with PDF Preview
  const MobileCertModal = ({ cert, onClose }) => {
    const [activeTab, setActiveTab] = useState('preview');

    if (!cert) return null;
    const style = certStyles[cert.type] || certStyles.docker;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50"
        >
          {/* Header */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-800 z-20">
            <div className="flex items-center gap-4 p-4">
              <button onClick={onClose} className="p-2 -ml-2">
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-white text-lg truncate">{cert.title}</h2>
                <p className="text-purple-400 text-sm">{cert.platform}</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-800">
              {[
                { id: 'preview', label: 'Preview', icon: FileText },
                { id: 'details', label: 'Details', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-400 border-b-2 border-purple-400'
                      : 'text-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto h-full pb-20">
            <AnimatePresence mode="wait">
              {activeTab === 'preview' && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-4 space-y-6"
                >
                  {/* PDF Preview */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="font-semibold text-white mb-3">Certificate Preview</h4>
                    <div className="bg-white rounded-lg overflow-hidden" style={{ height: '400px' }}>
                      <iframe
                        src={cert.document}
                        title={`${cert.title} Certificate`}
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={cert.document}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-purple-500/20 border border-purple-500/30 rounded-2xl text-purple-400 font-medium"
                    >
                      <Download className="w-5 h-5" />
                      Download Certificate
                    </a>
                    {cert.courseUrl && (
                      <a
                        href={cert.courseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 bg-gray-800 border border-gray-700 rounded-2xl text-white font-medium"
                      >
                        <Globe className="w-5 h-5" />
                        View Course
                      </a>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'details' && (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-4 space-y-6"
                >
                  {/* Header Card */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-2xl ${style.iconBg} p-3`}>
                        <img src={cert.icon} alt="" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{cert.title}</h3>
                        <p className="text-purple-400 text-sm">{cert.instructor}</p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center p-3 bg-gray-700/50 rounded-xl">
                        <Clock className="w-5 h-5 text-white/60 mx-auto mb-1" />
                        <p className="text-xs text-white/60">Duration</p>
                        <p className="text-sm text-white font-medium">{cert.length}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-700/50 rounded-xl">
                        <Award className="w-5 h-5 text-white/60 mx-auto mb-1" />
                        <p className="text-xs text-white/60">Level</p>
                        <p className="text-sm text-white font-medium">{cert.level}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-700/50 rounded-xl">
                        <Calendar className="w-5 h-5 text-white/60 mx-auto mb-1" />
                        <p className="text-xs text-white/60">Completed</p>
                        <p className="text-sm text-white font-medium">{cert.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="font-semibold text-white mb-3">About This Course</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="font-semibold text-white mb-3">Skills Learned</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {cert.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-xl">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="font-semibold text-white mb-3">Certificate Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Platform</span>
                        <span className="text-white text-sm font-medium">{cert.platform}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Category</span>
                        <span className="text-white text-sm font-medium">{cert.category}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm">Time Investment</span>
                        <span className="text-white text-sm font-medium">{cert.timeInvestment || cert.length}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="pt-3 border-t border-gray-700/50">
                          <span className="text-white/60 text-sm">Credential ID</span>
                          <p className="text-white/80 font-mono text-xs break-all mt-1">{cert.credentialId}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Industry & Tags */}
                  <div className="bg-gray-800/50 rounded-2xl p-4">
                    <h4 className="font-semibold text-white mb-3">Industry Focus</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.industry.map((industry, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-white/80 rounded text-xs">
                          {industry}
                        </span>
                      ))}
                    </div>

                    <h5 className="font-medium text-white/80 mb-2 text-sm">Tags</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  {cert.projects && cert.projects.length > 0 && (
                    <div className="bg-gray-800/50 rounded-2xl p-4">
                      <h4 className="font-semibold text-white mb-3">Related Projects</h4>
                      <div className="space-y-2">
                        {cert.projects.map((project, idx) => (
                          <a
                            key={idx}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-xl active:bg-gray-700"
                          >
                            <ExternalLink className="w-4 h-4 text-purple-400" />
                            <span className="text-white/80 text-sm flex-1">{project.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Mobile Header - Sticky */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-800 z-10"
      >
        <div className="p-4">
          {/* Title Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl">
                <Trophy className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Certifications</h1>
                <p className="text-sm text-white/60">{Certifications.length} certificates</p>
              </div>
            </div>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-white/10 rounded-xl"
            >
              <Search className="w-6 h-6 text-white/60" />
            </button>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search certificates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500/50"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      <X className="w-4 h-4 text-white/40" />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-800 text-white/60 hover:bg-gray-700'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mobile Content */}
      <div className="pb-20">
        {/* Stats Cards */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="grid grid-cols-3 gap-3 p-4"
        >
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">{Certifications.length}</div>
            <div className="text-xs text-white/60">Certificates</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-400 mb-1">
              {Math.round(Certifications.reduce((total, cert) => {
                const hours = parseFloat(cert.length.split(' ')[0]);
                return total + (isNaN(hours) ? 0 : hours);
              }, 0))}h
            </div>
            <div className="text-xs text-white/60">Hours</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-red-400 mb-1">
              {(() => {
                const allSkills = new Set();
                Certifications.forEach(cert => {
                  cert.skills.forEach(skill => allSkills.add(skill));
                });
                return allSkills.size;
              })()}
            </div>
            <div className="text-xs text-white/60">Skills</div>
          </div>
        </motion.div>

        {/* Instagram-style Horizontal Scrolling Sections */}
        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0 }}
          animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {Object.entries(certsByCategory).map(([category, certs]) => (
            <HorizontalCertSection
              key={category}
              title={category}
              certs={certs}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {Object.keys(certsByCategory).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 px-4"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No certificates found</h3>
            <p className="text-white/60 mb-4">Try adjusting your search or category filter</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white font-medium"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Mobile Modal */}
      <MobileCertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};

export default CertificationsMobile;