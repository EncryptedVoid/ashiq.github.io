import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Calendar,
  Video,
  Copy,
  ExternalLink,
  Check
} from 'lucide-react';

const iconComponents = {
  'Email': Mail,
  'Phone': Phone,
  'Schedule a Meeting': Calendar,
  'Microsoft Teams': Video
};

const ContactCard = ({ contact, onAction, isCopied }) => {
  const Icon = iconComponents[contact.type];
  const ActionIcon = contact.action === 'copy' ?
    (isCopied ? Check : Copy) :
    ExternalLink;

  return (
    <div
      onClick={() => onAction(contact)}
      className={`
        group relative
        flex items-center gap-6
        bg-white/[0.03] hover:bg-white/[0.06]
        border border-white/[0.06] hover:border-white/[0.12]
        rounded-2xl p-6
        cursor-pointer
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-white/[0.05]
        overflow-hidden
      `}
      role="button"
      tabIndex={0}
    >
      {/* Background Gradient */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-purple-500/10 to-red-500/10
        opacity-0 transition-opacity duration-500
        group-hover:opacity-100
      " />

      {/* Icon Container */}
      <div className="
        relative
        w-12 h-12
        bg-white/[0.03] group-hover:bg-white/[0.06]
        border border-white/[0.06] group-hover:border-white/[0.12]
        rounded-xl
        flex items-center justify-center
        transition-all duration-500
        group-hover:scale-110 group-hover:-rotate-6
      ">
        <Icon className="w-6 h-6 text-white/80" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">
          {contact.type}
        </h3>
        <p className="text-white/60 transition-colors duration-500 group-hover:text-white/80">
          {contact.detail}
        </p>
      </div>

      {/* Action Button */}
      <div className={`
        w-10 h-10
        bg-white/[0.03] group-hover:bg-white/[0.06]
        border border-white/[0.06] group-hover:border-white/[0.12]
        rounded-full
        flex items-center justify-center
        transition-all duration-500
        ${isCopied ? 'text-green-400' : 'text-white/60 group-hover:text-white'}
        transform translate-x-4 opacity-0
        group-hover:translate-x-0 group-hover:opacity-100
      `}>
        <ActionIcon className="w-4 h-4" />
      </div>

      {/* Copy Tooltip */}
      {contact.action === 'copy' && (
        <div className={`
          absolute top-0 left-1/2 -translate-x-1/2
          px-3 py-1 rounded-full
          bg-black/80 backdrop-blur-sm
          text-sm text-white
          transition-all duration-300
          ${isCopied
            ? '-translate-y-1/2 opacity-100'
            : 'translate-y-0 opacity-0'
          }
        `}>
          Copied!
        </div>
      )}
    </div>
  );
};

const ContactSources = () => {
  const [copiedId, setCopiedId] = useState(null);

  const contacts = [
    {
      id: 1,
      type: 'Email',
      detail: 'email@example.com',
      action: 'copy',
      value: 'email@example.com'
    },
    {
      id: 2,
      type: 'Phone',
      detail: '+1 (123) 456-7890',
      action: 'copy',
      value: '+1 (123) 456-7890'
    },
    {
      id: 3,
      type: 'Schedule a Meeting',
      detail: 'Calendly',
      action: 'link',
      value: 'https://calendly.com/example'
    },
    {
      id: 4,
      type: 'Microsoft Teams',
      detail: 'Schedule a call',
      action: 'link',
      value: 'https://teams.microsoft.com/example'
    }
  ];

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
    <div className="w-full py-20 px-4 md:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="
          text-4xl md:text-5xl font-bold mb-6
          bg-gradient-to-r from-purple-500 via-red-500 to-orange-500
          bg-clip-text text-transparent
        ">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-400">
          Connect with me through any of these professional channels
        </p>
        {/* Decorative Line */}
        <div className="
          w-24 h-1 mx-auto mt-8
          bg-gradient-to-r from-purple-500 via-red-500 to-orange-500
          rounded-full
        " />
      </div>

      {/* Contact Grid */}
      <div className="
        max-w-4xl mx-auto
        grid grid-cols-1 md:grid-cols-2
        gap-4 md:gap-6
      ">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ContactCard
              contact={contact}
              onAction={handleAction}
              isCopied={copiedId === contact.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSources;