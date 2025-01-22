// src/data/ContactData.js
import { Mail, Github, Linkedin, Calendar, Twitter, Youtube, ExternalLink } from 'lucide-react';

export const contactConfig = {
sectionTitle: "Get in Touch",
sectionSubtitle: "Connect with me through any of these professional channels",

// Animation settings
animations: {
    cardStagger: 0.1,
    copyNotificationDuration: 2000,
    cardHoverScale: 1.02
},

// Style configuration
styles: {
    gradients: {
    header: "from-purple-400 to-pink-600",
    email: "from-blue-500 to-cyan-500",
    github: "from-gray-600 to-gray-800",
    linkedin: "from-blue-600 to-blue-800",
    calendar: "from-green-500 to-emerald-600",
    twitter: "from-blue-400 to-blue-600",
    youtube: "from-red-500 to-red-700"
    }
}
};

export const contactSources = [
{
    id: 'email',
    type: 'Email',
    detail: 'your.email@example.com',
    action: 'copy',
    value: 'your.email@example.com',
    icon: Mail,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Direct email communication for professional inquiries',
    responseTime: '24-48 hours'
},
{
    id: 'github',
    type: 'GitHub',
    detail: 'Check out my repositories',
    action: 'link',
    value: 'https://github.com/yourusername',
    icon: Github,
    gradient: 'from-gray-600 to-gray-800',
    stats: {
    repos: '50+',
    contributions: '500+',
    stars: '100+'
    }
},
{
    id: 'linkedin',
    type: 'LinkedIn',
    detail: 'Let\'s connect professionally',
    action: 'link',
    value: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
    gradient: 'from-blue-600 to-blue-800',
    network: {
    connections: '500+',
    endorsements: '50+'
    }
},
{
    id: 'calendar',
    type: 'Schedule a Call',
    detail: 'Book a time to chat',
    action: 'link',
    value: 'https://calendly.com/yourusername',
    icon: Calendar,
    gradient: 'from-green-500 to-emerald-600',
    availability: {
    timezone: 'EST',
    slots: '30min / 1hour',
    days: 'Mon-Fri'
    }
},
{
    id: 'twitter',
    type: 'Twitter',
    detail: 'Follow me for tech insights',
    action: 'link',
    value: 'https://twitter.com/yourusername',
    icon: Twitter,
    gradient: 'from-blue-400 to-blue-600',
    optional: true // Won't show by default
}
];

export const quickLinks = [
{
    id: 'resume',
    label: 'Download Resume',
    icon: ExternalLink,
    url: '/path-to-resume.pdf',
    type: 'download'
},
// Add more quick links
];