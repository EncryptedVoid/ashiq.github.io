// components/sections/Contact/ContactSources.jsx
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import ContactCard from './components/ContactCard';

const ContactSources = () => {
  const [copiedId, setCopiedId] = useState(null);

  const contacts = [
    {
      id: 1,
      type: 'Email',
      detail: 'your.email@example.com',
      action: 'copy',
      value: 'your.email@example.com',
      icon: Mail
    },
    {
      id: 2,
      type: 'GitHub',
      detail: 'Check out my repositories',
      action: 'link',
      value: 'https://github.com/yourusername',
      icon: Github
    },
    {
      id: 3,
      type: 'LinkedIn',
      detail: 'Let\'s connect professionally',
      action: 'link',
      value: 'https://linkedin.com/in/yourusername',
      icon: Linkedin
    },
    {
      id: 4,
      type: 'Schedule a Call',
      detail: 'Book a time to chat',
      action: 'link',
      value: 'https://calendly.com/yourusername',
      icon: Calendar
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
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h2 className="
          text-3xl md:text-4xl
          font-bold
          text-transparent bg-clip-text
          bg-gradient-to-r from-purple-400 to-pink-600
        ">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Connect with me through any of these professional channels
        </p>
      </div>

      {/* Contact Grid */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">
        {contacts.map((contact, index) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onAction={handleAction}
            isCopied={copiedId === contact.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactSources;