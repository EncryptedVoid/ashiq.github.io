// src/components/sections/certifications/components/CertModal.jsx
import React from 'react';
import { X, Download } from 'lucide-react';

const CertModal = ({ isOpen, onClose, cert }) => {
  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
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
        <div
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
          {/* <a
            href={cert.document}
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
          </a> */}

          {/* PDF Viewer */}
          <iframe
            src={cert.document}
            title={cert.title}
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CertModal;