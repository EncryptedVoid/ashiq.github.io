import React, { useState } from 'react';
import {
  Copy, Check, ExternalLink, ArrowRight,
  Sparkles, Globe, Mail, Phone
} from 'lucide-react';
import { contactConfig, contactSources, quickLinks } from '../../../data/contactData';

const ContactButton = ({ link, index }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 px-4 py-2 bg-white/5
      rounded-xl border border-white/10 transition-all duration-500
      hover:border-white/20 hover:bg-white/10 hover:scale-105"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <link.icon className="w-4 h-4 text-white/60 transition-all duration-500
      group-hover:text-white group-hover:rotate-12" />
    <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-500">
      {link.label}
    </span>
  </a>
);

const ContactCard = ({ contact, isCopied, onAction }) => {
  const Icon = contact.icon;
  const ActionIcon = contact.action === 'copy' ? (isCopied ? Check : Copy) : ExternalLink;

  return (
    <div
      onClick={() => onAction(contact)}
      className="group relative overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02]
        rounded-3xl border border-white/10 p-6 cursor-pointer transition-all duration-500
        hover:border-white/20 hover:shadow-xl hover:shadow-purple-500/10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10
        opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content Container */}
      <div className="relative flex items-start gap-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center
          justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          <Icon className="w-6 h-6 text-white/80" />
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-white mb-1 transition-transform
            duration-500 group-hover:-translate-y-1">
            {contact.type}
          </h3>
          <p className="text-white/60 text-sm truncate transition-all duration-500
            group-hover:text-white/80">
            {contact.detail}
          </p>
        </div>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center
            transition-all duration-500 group-hover:bg-white/10">
            <ActionIcon className="w-4 h-4 text-white/60 group-hover:text-white" />
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {isCopied && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20
          backdrop-blur-sm rounded-full border border-green-500/30">
          <span className="text-xs text-green-400 flex items-center gap-1">
            <Check className="w-3 h-3" />
            Copied!
          </span>
        </div>
      )}

      {/* Hover Line Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r
        from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 origin-left
        transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

const ContactSources = () => {
  const [copiedId, setCopiedId] = useState(null);
  const [showOptional, setShowOptional] = useState(false);

  const visibleContacts = contactSources.filter(
    contact => !contact.optional || showOptional
  );

  const handleAction = async (contact) => {
    if (contact.action === 'copy') {
      try {
        await navigator.clipboard.writeText(contact.value);
        setCopiedId(contact.id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else if (contact.action === 'link') {
      window.open(contact.value, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/10
      to-gray-900 py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(120,40,200,0.15),transparent)]" />
        <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2
          -translate-y-1/2 rounded-full bg-purple-500/5 blur-3xl animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/5 border border-white/10 text-sm text-white/60 mb-6">
            <Sparkles className="w-4 h-4" />
            {contactConfig.sectionTitle}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r
            from-white via-purple-200 to-white bg-clip-text text-transparent">
            Let's Connect
          </h1>

          <p className="text-lg text-white/60 mb-8">
            {contactConfig.sectionSubtitle}
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link, index) => (
              <ContactButton key={link.id} link={link} index={index} />
            ))}
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visibleContacts.map((contact, index) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              isCopied={copiedId === contact.id}
              onAction={handleAction}
            />
          ))}
        </div>

        {/* Show More Button */}
        {contactSources.some(contact => contact.optional) && (
          <div className="text-center">
            <button
              onClick={() => setShowOptional(!showOptional)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-white/5 border border-white/10 text-white/60 transition-all duration-500
                hover:bg-white/10 hover:border-white/20 hover:text-white"
            >
              <span>{showOptional ? 'Show Less' : 'Show More Ways to Connect'}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-500
                group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSources;