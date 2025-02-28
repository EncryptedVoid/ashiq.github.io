// src/features/navigation/navigation.constants.js
import {
  Home,
  Briefcase,
  GraduationCap,
  Mail,
  Users,
  FolderKanban,
  BookOpen,
  Award,
  Target
} from 'lucide-react';

// Base menu items
export const NAV_ITEMS = [
  { id: 'hero', label: 'Home', icon: Home, category: null },

  // Work Category
  { id: 'experience', label: 'Experience', icon: Briefcase, category: 'work' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, category: 'work' },
  { id: 'testimonials', label: 'Testimonials', icon: Users, category: 'work' },

  // Education Category
  { id: 'skills', label: 'Skills', icon: BookOpen, category: 'education' },
  { id: 'education', label: 'Education', icon: GraduationCap, category: 'education' },
  { id: 'certifications', label: 'Certifications', icon: Award, category: 'education' },

  // Other standalone items
  { id: 'goals', label: 'Goals', icon: Target, category: null },
  { id: 'contact', label: 'Contact', icon: Mail, category: null }
];

// Define the categories
export const CATEGORIES = [
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap }
];

// The order of sections on the actual page
// This will be used in App.js for rendering sections
export const SECTION_ORDER = [
  'hero',
  'experience',
  'skills',
  'projects',
  'testimonials',
  'education',
  'certifications',
  'contact',
  'goals'
];

// Theme configuration
export const THEME = {
  primary: {
    main: 'rgba(255, 99, 110, 1)', // Blue
    light: 'rgba(255, 99, 110, 0.4)',
    dark: 'rgba(255, 99, 110, 0.4)',
    hover: 'rgba(255, 99, 110, 0.4)'
  },
  background: {
    main: 'rgba(15, 23, 42, 0.8)', // Dark slate background
    glass: 'rgba(15, 23, 42, 0.85)' // Dark glass effect
  },
  text: {
    primary: 'rgba(255, 99, 110, 0.9)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    accent: 'rgba(255, 99, 110, 0.8)'
  },
  border: {
    active: 'rgba(255, 99, 110, 0.4)', // Blue with transparency
    inactive: 'rgba(255, 255, 255, 0.1)' // Low visibility border
  }
};