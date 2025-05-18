// components/CertificationGrid.desktop.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CertCardDesktop as CertCard } from './index';

const CertificationGrid = ({ certifications, onCertSelect, isInView }) => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {certifications.map((cert) => (
        <motion.div
          key={cert.id}
          variants={itemVariants}
          layout
        >
          <CertCard
            certificate={cert}
            onClick={() => onCertSelect(cert)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CertificationGrid;