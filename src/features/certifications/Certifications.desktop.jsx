// Certifications.desktop.jsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Grid, List, Search, Trophy, ChevronDown } from 'lucide-react';
import { Certifications as CertificationsData } from '@data/CertificationsData';
import { CertificationGrid, CertificationList, CertModal } from './components';
import { useScrollAnimation } from '@hooks';

const CertificationsDesktop = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // 'date', 'title', 'level'
  const [expanded, setExpanded] = useState(false);
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  // Get unique filters
  const filters = useMemo(() => {
    const categories = [...new Set(CertificationsData.map(cert => cert.category))];
    const types = [...new Set(CertificationsData.map(cert => cert.type))];
    const levels = [...new Set(CertificationsData.map(cert => cert.level))];

    return {
      categories: ['all', ...categories],
      types: ['all', ...types],
      levels: ['all', ...levels]
    };
  }, []);

  // Filter and sort certifications
  const processedCertifications = useMemo(() => {
    let filtered = CertificationsData;

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(cert =>
        cert.category === activeFilter ||
        cert.type === activeFilter ||
        cert.level === activeFilter
      );
    }

    // Apply sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'level':
          const levelOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0);
        case 'date':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return filtered;
  }, [searchQuery, activeFilter, sortBy]);

  const visibleCertifications = expanded
    ? processedCertifications
    : processedCertifications.slice(0, 6);

  return (
    <section ref={ref} className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'slide 20s linear infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
              <Trophy className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Professional Certifications
              </h2>
              <p className="text-gray-400 text-lg mt-2">
                {CertificationsData.length} certificates across multiple technologies
              </p>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-4 bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
            {/* Search */}
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/80 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                className="appearance-none bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              >
                <option value="all">All Certificates</option>
                <optgroup label="Categories">
                  {filters.categories.filter(c => c !== 'all').map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </optgroup>
                <optgroup label="Types">
                  {filters.types.filter(t => t !== 'all').map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </optgroup>
                <optgroup label="Levels">
                  {filters.levels.filter(l => l !== 'all').map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-2 pr-10 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
            >
              <option value="date">Latest First</option>
              <option value="title">Alphabetical</option>
              <option value="level">By Level</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex gap-2 border border-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-sm text-gray-400"
        >
          Showing {visibleCertifications.length} of {processedCertifications.length} certifications
          {activeFilter !== 'all' && ` in "${activeFilter}"`}
          {searchQuery && ` matching "${searchQuery}"`}
        </motion.div>

        {/* Certifications Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {viewMode === 'grid' ? (
              <CertificationGrid
                certifications={visibleCertifications}
                onCertSelect={setSelectedCert}
                isInView={isInView}
              />
            ) : (
              <CertificationList
                certifications={visibleCertifications}
                onCertSelect={setSelectedCert}
                isInView={isInView}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {processedCertifications.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg text-white font-medium transition-all duration-300 hover:from-purple-500/30 hover:to-blue-500/30"
            >
              <span className="relative z-10">
                {expanded ? 'Show Less' : `Show All ${processedCertifications.length} Certificates`}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}

        {/* Empty State */}
        {processedCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 mb-4">
              <Filter className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-medium text-white mb-2">No certificates found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
              }}
              className="mt-4 px-6 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      <CertModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

export default CertificationsDesktop;