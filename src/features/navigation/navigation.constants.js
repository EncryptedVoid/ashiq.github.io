// src/features/navigation/navigation.constants.js
import { Home, Code, Briefcase, FolderGit2, GraduationCap, Mail, Star, Award, Target, Eye, EyeOff } from 'lucide-react';

// Keep original labels but with improved icons
export const NAV_ITEMS = [
  { id: 'hero', label: 'HOME', icon: Home },
  { id: 'testimonials', label: 'TESTIMONIALS', icon: Star },
  { id: 'experience', label: 'EXPERIENCE', icon: Briefcase },
  { id: 'skills', label: 'SKILLS', icon: Code },
  { id: 'projects', label: 'PROJECTS', icon: FolderGit2 },
  { id: 'education', label: 'EDUCATION', icon: GraduationCap },
  { id: 'certifications', label: 'CERTIFICATIONS', icon: Award },
  { id: 'contact', label: 'CONTACT ME', icon: Mail },
  { id: 'goals', label: 'PERSONAL GOALS', icon: Target }
];

// Gamer-themed color scheme
export const THEME = {
  primary: {
    main: '#FF4757', // Red/Salmon
    light: '#FF6B81', // Lighter Red
    dark: '#C0392B', // Darker Red
    glow: '#FF4757' // Glow color
  },
  background: {
    main: 'rgba(15, 15, 20, 0.8)', // Dark background with blue tint
    glass: 'rgba(20, 20, 30, 0.85)' // Dark glass effect
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
    accent: '#FF4757'
  },
  border: {
    active: 'rgba(255, 71, 87, 0.4)', // Red/Salmon with transparency
    inactive: 'rgba(255, 71, 87, 0.1)' // Less visible border
  }
};