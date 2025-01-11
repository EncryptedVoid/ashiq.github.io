// components/sections/Contact/components/ContactCard.jsx
import React from 'react';
import { Copy, ExternalLink, Check } from 'lucide-react';

const ContactCard = ({ contact, onAction, isCopied }) => {
  const Icon = contact.icon;
  const ActionIcon = contact.action === 'copy' ? (isCopied ? Check : Copy) : ExternalLink;

  return (
    <div
      onClick={() => onAction(contact)}
      className="
        relative
        group
        bg-white/5
        hover:bg-white/10
        border border-white/10
        hover:border-white/20
        rounded-2xl
        p-6
        transition-all
        duration-300
        cursor-pointer
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-purple-500/10
      "
      role="button"
      tabIndex={0}
    >
      {/* Icon */}
      <div className="
        mb-4
        w-12 h-12
        bg-white/5
        rounded-xl
        flex items-center justify-center
        transition-transform
        duration-300
        group-hover:scale-110
        group-hover:rotate-[-8deg]
      ">
        <Icon className="w-6 h-6 text-white/80" />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-white">
          {contact.type}
        </h3>
        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {contact.detail}
        </p>
      </div>

      {/* Action Icon */}
      <div className="
        absolute top-6 right-6
        w-8 h-8
        bg-white/5
        rounded-full
        flex items-center justify-center
        transition-all
        duration-300
        opacity-0
        scale-50
        group-hover:opacity-100
        group-hover:scale-100
      ">
        <ActionIcon className="w-4 h-4 text-white/60" />
      </div>

      {/* Copy Tooltip */}
      {contact.action === 'copy' && isCopied && (
        <div className="
          absolute -top-8 left-1/2 -translate-x-1/2
          px-3 py-1
          bg-green-500
          rounded-full
          text-xs text-white
          animate-fadeIn
        ">
          Copied!
        </div>
      )}
    </div>
  );
};

export default ContactCard;