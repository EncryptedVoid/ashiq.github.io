// Certifications.mobile.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import { Certifications as CertificationsData } from '@data/CertificationsData';
import { CertCardMobile, CertModalMobile } from './components';
import { useScrollAnimation } from '@hooks';

const CertificationsMobile = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Process certifications into categories
  const categorizedCerts = useMemo(() => {
    let filtered = CertificationsData;

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Group by category
    const grouped = filtered.reduce((acc, cert) => {
      const category = cert.category || 'Other';
      if (!acc[category]) acc[category] = [];
      acc[category].push(cert);
      return acc;
    }, {});

    // Sort each category by date
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => new Date(b.date) - new Date(a.date));
    });

    return grouped;
  }, [searchQuery]);

  // Get visible certifications based on active category
  const visibleCertifications = useMemo(() => {
    if (activeCategory === 'all') {
      // Show featured from each category
      const featured = {};
      Object.entries(categorizedCerts).forEach(([category, certs]) => {
        featured[category] = certs.slice(0, 3);
      });
      return featured;
    } else {
      // Show all from selected category
      return { [activeCategory]: categorizedCerts[activeCategory] || [] };
    }
  }, [categorizedCerts, activeCategory]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Mobile Header */}
      <div className="sticky top-0 z-20 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="px-4 py-4">
          {/* Title Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                <Trophy className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Certifications</h2>
                <p className="text-xs text-gray-400">{CertificationsData.length} certificates</p>
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 rounded-lg bg-gray-800 border border-gray-700"
            >
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="flex gap-2 pt-3 overflow-x-auto pb-1 scrollbar-hide">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      activeCategory === 'all'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-gray-800 text-gray-400 border border-gray-700'
                    }`}
                  >
                    All
                  </button>
                  {Object.keys(categorizedCerts).map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        activeCategory === category
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          : 'bg-gray-800 text-gray-400 border border-gray-700'
                      }`}
                    >
                      {category} ({categorizedCerts[category].length})
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 pb-24">
        {Object.entries(visibleCertifications).map(([category, certs]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">{category}</h3>
              {activeCategory === 'all' && categorizedCerts[category]?.length > 3 && (
                <button
                  onClick={() => setActiveCategory(category)}
                  className="text-sm text-purple-400 flex items-center gap-1"
                >
                  View All
                  <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Certificate Cards */}
            <div className="space-y-3">
              {certs.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CertCardMobile
                    certificate={cert}
                    onClick={() => setSelectedCert(cert)}
                  />
                </motion.div>
              ))}
            </div>

            {/* Show More for Category */}
            {activeCategory === category && categorizedCerts[category]?.length > certs.length && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => toggleSection(category)}
                className="w-full mt-4 py-2 text-sm text-purple-400 flex items-center justify-center gap-2"
              >
                {expandedSections[category] ? (
                  <>
                    Show Less
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show {categorizedCerts[category].length - certs.length} More
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            )}
          </motion.div>
        ))}

        {/* Empty State */}
        {Object.keys(visibleCertifications).length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <h3 className="text-lg font-medium text-white mb-1">No certificates found</h3>
              <p className="text-sm">Try a different search term</p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 text-sm"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <CertModalMobile
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default CertificationsMobile;