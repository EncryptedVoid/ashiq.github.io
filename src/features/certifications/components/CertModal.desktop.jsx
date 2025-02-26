// src/features/certifications/components/CertModal.desktop.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

const CertModal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="
            absolute inset-0
            bg-black/80 backdrop-blur-xl
            transition-opacity duration-500
          " />

          {/* Modal Content */}
          <div className="
            absolute inset-8 md:inset-12
            flex flex-col items-center justify-center
          ">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="
                relative max-w-4xl w-full
                bg-white/[0.02] backdrop-blur-2xl
                border border-white/[0.06]
                rounded-3xl p-4
                h-[80vh]
              "
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="
                  absolute -top-12 right-0
                  w-10 h-10 rounded-full
                  bg-white/[0.03] hover:bg-white/[0.06]
                  border border-white/[0.06]
                  flex items-center justify-center
                  transition-all duration-300
                  hover:rotate-90
                "
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Download Button */}
              {cert.document && (
                <a
                  href={`/assets/certifications/${cert.document}`}
                  download
                  className="
                    absolute -top-12 right-14
                    w-10 h-10 rounded-full
                    bg-white/[0.03] hover:bg-white/[0.06]
                    border border-white/[0.06]
                    flex items-center justify-center
                    transition-all duration-300
                    hover:scale-110
                  "
                  onClick={e => e.stopPropagation()}
                >
                  <Download className="w-5 h-5 text-white" />
                </a>
              )}

              {/* PDF Viewer */}
              <iframe
                src={`/assets/certifications/${cert.document}`}
                title={cert.title}
                className="w-full h-full rounded-xl"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertModal;