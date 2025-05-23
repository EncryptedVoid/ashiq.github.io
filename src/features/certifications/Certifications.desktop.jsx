import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Trophy, Award, Clock, Calendar, Star, Download, ExternalLink,
  ChevronLeft, ChevronRight, X, Globe, FileText
} from 'lucide-react';
import { Certifications, certStyles } from '@data/CertificationsData';

const CertificationsDesktop = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation refs with useInView
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const filtersRef = useRef(null);
  const carouselRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const filtersInView = useInView(filtersRef, { once: true, margin: "-100px" });
  const carouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  // Process certifications data
  const categories = useMemo(() => {
    const cats = [...new Set(Certifications.map(cert => cert.category))];
    return ['all', ...cats];
  }, []);

  const filteredCerts = useMemo(() => {
    if (activeFilter === 'all') return Certifications;
    return Certifications.filter(cert => cert.category === activeFilter);
  }, [activeFilter]);

  const totalHours = useMemo(() => {
    return Certifications.reduce((total, cert) => {
      const hours = parseFloat(cert.length.split(' ')[0]);
      return total + (isNaN(hours) ? 0 : hours);
    }, 0);
  }, []);

  const skillsCount = useMemo(() => {
    const allSkills = new Set();
    Certifications.forEach(cert => {
      cert.skills.forEach(skill => allSkills.add(skill));
    });
    return allSkills.size;
  }, []);

  // Carousel navigation
  const nextSlide = () => {
    const maxSlide = Math.max(0, Math.ceil(filteredCerts.length / 3) - 1);
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, Math.ceil(filteredCerts.length / 3) - 1);
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  // 3D Card Component
  const CertCard3D = ({ cert, index, onClick }) => {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const style = certStyles[cert.type] || certStyles.docker;

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateXValue = (e.clientY - centerY) / 10;
      const rotateYValue = (centerX - e.clientX) / 10;
      setRotateX(rotateXValue);
      setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    return (
      <motion.div
        ref={cardRef}
        className="relative w-80 h-96 cursor-pointer preserve-3d mx-4"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(cert)}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {/* Main Card */}
        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${style.gradient} p-1 shadow-2xl`}>
          <div className="w-full h-full rounded-2xl bg-gray-900/95 backdrop-blur-sm p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-16 h-16 rounded-xl ${style.iconBg} p-3 flex items-center justify-center`}>
                <img src={cert.icon} alt={cert.type} className="w-full h-full object-contain" />
              </div>
              <div className="text-right">
                <div className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                  {cert.level}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white line-clamp-2 mb-2">
              {cert.title}
            </h3>

            {/* Platform */}
            <p className="text-purple-400 text-sm mb-4">{cert.platform}</p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{cert.length}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-1 mb-4">
              {cert.skills.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                  {skill}
                </span>
              ))}
              {cert.skills.length > 3 && (
                <span className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-400">
                  +{cert.skills.length - 3}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-white/40">{cert.category}</span>
              <ExternalLink className="w-4 h-4 text-white/40" />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.gradient} opacity-0 blur-xl transition-opacity duration-500 ${hoveredCard === cert.id ? 'opacity-30' : ''}`} />
      </motion.div>
    );
  };

  // Certificate Modal with PDF Preview
  const CertModal = ({ cert, onClose }) => {
    const [activeTab, setActiveTab] = useState('preview');

    if (!cert) return null;
    const style = certStyles[cert.type] || certStyles.docker;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-3xl border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-8 bg-gradient-to-r ${style.gradient} bg-opacity-10 border-b border-gray-800`}>
              <div className="flex items-start gap-6">
                <div className={`w-24 h-24 rounded-2xl ${style.iconBg} p-4`}>
                  <img src={cert.icon} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-2">{cert.title}</h2>
                  <p className="text-purple-400 text-lg">{cert.platform}</p>
                  <p className="text-white/60">{cert.instructor}</p>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-1 mt-6 border-b border-gray-800">
                {[
                  { id: 'preview', label: 'Certificate Preview', icon: FileText },
                  { id: 'details', label: 'Details & Skills', icon: Award }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
                      activeTab === tab.id
                        ? 'text-white border-b-2 border-purple-400'
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 max-h-[60vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'preview' && (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* PDF Preview */}
                    <div className="bg-gray-800/50 rounded-2xl p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Certificate Preview</h3>
                      <div className="relative bg-white rounded-lg overflow-hidden" style={{ height: '500px' }}>
                        <iframe
                          src={cert.document}
                          title={`${cert.title} Certificate`}
                          className="w-full h-full border-0"
                          style={{ minHeight: '500px' }}
                        />
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={cert.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 py-4 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl text-purple-400 transition-colors font-medium"
                      >
                        <Download className="w-5 h-5" />
                        Download Certificate
                      </a>
                      {cert.courseUrl && (
                        <a
                          href={cert.courseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 flex-1 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl text-white transition-colors font-medium"
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
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                  >
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Course Description</h3>
                        <p className="text-white/70 leading-relaxed">{cert.description}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Skills Mastered</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {cert.skills.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span className="text-white/80">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {cert.projects && cert.projects.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-3">Related Projects</h3>
                          <div className="space-y-2">
                            {cert.projects.map((project, idx) => (
                              <a
                                key={idx}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors"
                              >
                                <ExternalLink className="w-4 h-4 text-purple-400" />
                                <span className="text-white/80">{project.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Metadata */}
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Certificate Details</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-white/60">Duration</span>
                            <span className="text-white font-medium">{cert.length}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Level</span>
                            <span className="text-white font-medium">{cert.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Completed</span>
                            <span className="text-white font-medium">{cert.date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Category</span>
                            <span className="text-white font-medium">{cert.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Platform</span>
                            <span className="text-white font-medium">{cert.platform}</span>
                          </div>
                          {cert.credentialId && (
                            <div className="pt-3 border-t border-gray-700/50">
                              <span className="text-white/60 text-sm">Credential ID</span>
                              <p className="text-white/80 font-mono text-xs break-all">{cert.credentialId}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Industry Focus</h3>
                        <div className="space-y-2">
                          {cert.industry.map((industry, idx) => (
                            <div key={idx} className="px-3 py-2 bg-gray-700/50 rounded-lg text-white/80 text-sm">
                              {industry}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                          {cert.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(244,63,94,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Trophy className="w-12 h-12 text-purple-400" />
            </div>
          </div>

          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6">
            Professional Certifications
          </h1>

          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Continuous learning through industry-leading certifications and hands-on training
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          <motion.div
            className="p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl text-center"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">{Certifications.length}</div>
            <div className="text-white/60">Certificates Earned</div>
          </motion.div>
          <motion.div
            className="p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl text-center"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="text-3xl font-bold text-pink-400 mb-2">{Math.round(totalHours)}h</div>
            <div className="text-white/60">Learning Hours</div>
          </motion.div>
          <motion.div
            className="p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl text-center"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="text-3xl font-bold text-red-400 mb-2">{skillsCount}</div>
            <div className="text-white/60">Skills Mastered</div>
          </motion.div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          ref={filtersRef}
          initial={{ opacity: 0, y: 30 }}
          animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Categories' : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Horizontal Carousel */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0 }}
          animate={carouselInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              animate={{
                x: `${-currentSlide * (320 * 3 + 32 * 2)}px` // card width * 3 + gaps
              }}
            >
              {filteredCerts.map((cert, index) => (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCard(cert.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CertCard3D
                    cert={cert}
                    index={index}
                    onClick={setSelectedCert}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {filteredCerts.length > 3 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {filteredCerts.length > 3 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(filteredCerts.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-purple-500 w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};

export default CertificationsDesktop;