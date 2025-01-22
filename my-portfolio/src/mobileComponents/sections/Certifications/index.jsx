import React, { useState } from 'react';
import { X, Medal, ChevronRight, ExternalLink, Calendar } from 'lucide-react';
import { Certifications, certStyles } from '../../../data/CertificationsData';

const CertificationCard = ({ cert, onClick }) => {
  const style = certStyles[cert.type];

  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent
        rounded-3xl cursor-pointer transition-all duration-500"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/[0.07] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Main content container */}
      <div className="relative p-6 flex flex-col h-full border border-white/10 rounded-3xl
        group-hover:border-white/20 transition-all duration-500">

        {/* Certificate icon with glow effect */}
        <div className="relative w-16 h-16 mb-6">
          <div className={`absolute inset-0 rounded-2xl ${style.gradient} opacity-20 blur-xl
            group-hover:opacity-40 transition-opacity duration-500`} />
          <div className="relative w-full h-full rounded-2xl bg-white/5 border border-white/10
            flex items-center justify-center overflow-hidden group-hover:border-white/20
            transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <img src={cert.icon} alt="" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {/* Certificate details */}
        <div className="flex-1">
          <h3 className={`text-xl font-bold bg-gradient-to-r ${style.gradient} bg-clip-text
            text-transparent mb-2 group-hover:scale-105 transition-transform duration-500`}>
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Calendar className="w-4 h-4" />
            <span>{cert.date}</span>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Medal className={`w-4 h-4 ${style.textColor}`} />
            <span className="text-sm text-white/60">{cert.level}</span>
          </div>
        </div>

        {/* View details button */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/40 group-hover:text-white/60
            transition-colors duration-500">
            View Certificate
          </span>
          <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/60
            transform group-hover:translate-x-1 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

const CertificationModal = ({ cert, onClose }) => {
  if (!cert) return null;
  const style = certStyles[cert.type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

      {/* Modal content */}
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-white/10 to-white/5
        rounded-3xl border border-white/10 p-8 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10
            border border-white/10 hover:border-white/20 transition-all duration-300
            hover:rotate-90 group"
        >
          <X className="w-5 h-5 text-white/60 group-hover:text-white/90" />
        </button>

        {/* Certificate content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Certificate image */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <img src={cert.image} alt={cert.title} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
            </div>
          </div>

          {/* Certificate details */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className={`text-3xl font-bold bg-gradient-to-r ${style.gradient}
                bg-clip-text text-transparent mb-2`}>
                {cert.title}
              </h2>
              <p className="text-white/60">{cert.date}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <Medal className={`w-5 h-5 ${style.textColor}`} />
                <span>{cert.level}</span>
              </div>
              {cert.description && (
                <p className="text-white/60 leading-relaxed">{cert.description}</p>
              )}
            </div>

            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5
                  hover:bg-white/10 border border-white/10 hover:border-white/20
                  transition-all duration-300 group"
              >
                <span className="text-white/80">Verify Certificate</span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white/80
                  group-hover:translate-x-1 transition-all duration-300" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900
      py-20 px-4 md:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(56,189,248,0.15),transparent)]" />
        <div className="absolute w-[500px] h-[500px] -top-40 -right-40 rounded-full
          bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-40 -left-40 rounded-full
          bg-purple-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r
            from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </h1>
          <p className="text-lg text-white/60">
            Industry recognized Certifications and achievements
          </p>
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              cert={cert}
              onClick={() => setSelectedCert(cert)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <CertificationModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

export default MobileCertifications;