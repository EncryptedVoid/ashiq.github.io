// src/features/certifications/components/CertModal.mobile.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CertModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <AnimatePresence>
      {cert && (
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
              <iframe
                src={`/assets/certifications/${cert.document}`}
                title={cert.title}
                className="w-full h-[calc(100vh-100px)] rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertModal;