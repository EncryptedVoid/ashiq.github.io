import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Medal, Calendar, ExternalLink } from 'lucide-react';
import { certStyles, Certifications } from '../../../data/CertificationsData';
import { TypewriterText } from '../../../styles/TypewriterText'


const MobileCertCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="relative w-full bg-white/[0.03] rounded-2xl overflow-hidden touch-manipulation"
    >
      {/* Card Content */}
      <div className="flex items-center gap-4 p-4">
        {/* Icon */}
        <div className={`
          w-16 h-16 rounded-xl ${style.iconBg}
          flex-shrink-0 flex items-center justify-center
          transition-transform active:scale-95
        `}>
          <img src={cert.icon} alt="" className="w-10 h-10" />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 truncate">
            {cert.title}
          </h3>

          <div className="flex items-center gap-3 text-sm text-white/60">
            <Calendar className="w-4 h-4" />
            <span>{cert.date}</span>
          </div>
        </div>

        {/* Level Badge */}
        <div className="px-3 py-1 rounded-full bg-white/[0.06] text-sm">
          {cert.level}
        </div>
      </div>
    </motion.div>
  );
};

const MobileModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg touch-none"
    >
      <div className="relative h-full overflow-y-auto p-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="pt-12">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full rounded-xl shadow-2xl"
          />

          {cert.verificationUrl && (
            <a
              href={cert.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 p-4
                rounded-xl bg-white/10 text-white"
            >
              Verify Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MobileCertifications = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [selectedCert, setSelectedCert] = React.useState(null);

  if (!isMobile) return null;

  return (
    <section className="py-16 px-4 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <TypewriterText
          text="Certifications"
          size={3}
          typingSpeed={100}
          delayBeforeRestart={60000}
        />
        <p className="text-white/60">
          Industry recognized certificates and achievements
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {Certifications.map(cert => (
          <MobileCertCard
            key={cert.id}
            cert={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <MobileModal
            cert={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default MobileCertifications;