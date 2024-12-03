// src/components/sections/Contact/ContactSources.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactCard from './components/ContactCard';
import QuickLinks from './components/QuickLinks';
import { contactConfig, contactSources, quickLinks } from '../../../data/contactData';

const ContactSources = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [showOptional, setShowOptional] = useState(false);

  // Filter out optional contacts unless showOptional is true
  const visibleContacts = contactSources.filter(
    contact => !contact.optional || showOptional
  );

  const handleAction = async (contact) => {
    if (contact.action === 'copy') {
      try {
        await navigator.clipboard.writeText(contact.value);
        setCopiedId(contact.id);
        setTimeout(() => setCopiedId(null), contactConfig.animations.copyNotificationDuration);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else if (contact.action === 'link') {
      window.open(contact.value, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <section className="w-full py-20 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`
          text-3xl md:text-4xl
          font-bold
          text-transparent bg-clip-text
          bg-gradient-to-r ${contactConfig.styles.gradients.header}
        `}>
          {contactConfig.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-white/60">
          {contactConfig.sectionSubtitle}
        </p>

        {/* Quick Links */}
        <div className="mt-8">
          <QuickLinks links={quickLinks} />
        </div>
      </motion.div>

      {/* Contact Grid */}
      <div className="
        max-w-6xl mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">
        {visibleContacts.map((contact, index) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * contactConfig.animations.cardStagger
            }}
          >
            <ContactCard
              contact={contact}
              onAction={handleAction}
              isCopied={copiedId === contact.id}
            />
          </motion.div>
        ))}
      </div>

      {/* Show More Button - only if there are optional contacts */}
      {contactSources.some(contact => contact.optional) && (
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => setShowOptional(!showOptional)}
            className="
              px-6 py-3
              bg-white/[0.05]
              hover:bg-white/[0.1]
              border border-white/[0.1]
              rounded-full
              text-white/60
              hover:text-white
              transition-all duration-300
            "
          >
            {showOptional ? 'Show Less' : 'Show More Ways to Connect'}
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ContactSources;