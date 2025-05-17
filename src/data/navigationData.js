// src/features/navigation/navigationData.js
import {
    Home,
    Briefcase,
    GraduationCap,
    Mail,
    Users,
    FolderKanban,
    BookOpen,
    Award,
    Target,
    ChevronDown
  } from 'lucide-react';

  // =========================================
  // SECTION & NAVIGATION STRUCTURE
  // =========================================

  /**
   * This is the central configuration file that controls:
   * 1. Section order on the page
   * 2. Navigation structure (items and categories)
   * 3. Section metadata (titles, subtitles)
   * 4. Theme configuration for the entire navigation system
   */

  // Define categories for navigation grouping
  export const CATEGORIES = [
    {
      id: 'work',
      label: 'Work',
      icon: Briefcase,
      description: 'Professional experience and projects'
    },
    {
      id: 'education',
      label: 'Training',
      icon: GraduationCap,
      description: 'Academic qualifications and skills'
    }
  ];

  // All sections with their metadata
  export const SECTIONS = {
    hero: {
      id: 'hero',
      label: 'Home',
      icon: Home,
      category: null, // Standalone item
      showHeader: false, // Don't show section header for hero
    },
    // testimonials: {
    //   id: 'testimonials',
    //   label: 'Testimonials',
    //   icon: Users,
    //   category: 'work',
    //   title: "What People Say",
    //   subtitle: "Feedback and testimonials from colleagues and clients",
    // },
    experience: {
      id: 'experience',
      label: 'Experience',
      icon: Briefcase,
      category: 'work',
      title: "",
      subtitle: "",
    },
    projects: {
      id: 'projects',
      label: 'Projects',
      icon: FolderKanban,
      category: 'work',
      title: "Project Showcase",
      subtitle: "Featured work and technical implementations",
    },
    skills: {
      id: 'skills',
      label: 'Skills',
      icon: BookOpen,
      category: 'education',
      title: "Skills & Expertise",
      subtitle: "Technical capabilities and professional competencies",
    },
    education: {
      id: 'education',
      label: 'Education',
      icon: GraduationCap,
      category: 'education',
      title: "Education",
      subtitle: "Academic background and qualifications",
    },
    certifications: {
      id: 'certifications',
      label: 'Certifications',
      icon: Award,
      category: 'education',
      title: "",
      subtitle: "",
    },
    goals: {
      id: 'goals',
      label: 'Goals',
      icon: Target,
      category: null, // Standalone item
      title: "",
      subtitle: "",
    },
    contact: {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      category: null, // Standalone item
      title: "Get In Touch",
      subtitle: "Connect with me professionally",
    }
  };

  // The order of sections on the page (this is the definitive order)
  // This array controls both the rendering order and navigation priority
  export const SECTION_ORDER = [
    'hero',
    // 'testimonials',
    'experience',
    'projects',
    'skills',
    'education',
    'certifications',
    'goals',
    'contact'
  ];

  // Build NAV_ITEMS array from SECTIONS in SECTION_ORDER
  // This ensures navigation items match section order
  export const NAV_ITEMS = SECTION_ORDER.map(id => ({
    id,
    label: SECTIONS[id].label,
    icon: SECTIONS[id].icon,
    category: SECTIONS[id].category
  }));

  // =========================================
  // THEME CONFIGURATION
  // =========================================

  // Theme configuration for navigation elements
  export const THEME = {
    primary: {
      main: 'rgba(255, 99, 110, 1)', // Primary color
      light: 'rgba(255, 99, 110, 0.4)',
      dark: 'rgba(255, 99, 110, 0.4)',
      hover: 'rgba(255, 99, 110, 0.4)',
      glow: 'rgba(255, 99, 110, 1)' // For glow effects
    },
    background: {
      main: 'rgba(15, 23, 42, 0.8)', // Dark slate background
      glass: 'rgba(15, 23, 42, 0.85)' // Dark glass effect
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.9)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      accent: 'rgba(255, 99, 110, 0.8)'
    },
    border: {
      active: 'rgba(255, 99, 110, 0.4)', // Primary color with transparency for borders
      inactive: 'rgba(255, 255, 255, 0.1)' // Low visibility border
    }
  };

  // =========================================
  // NAVIGATION CONFIGURATION
  // =========================================

  // Configuration for desktop navigation
  export const DESKTOP_NAV_CONFIG = {
    // Maximum number of items visible before overflow
    maxVisibleItems: 5,
    // Logo text to display
    logoText: "NICE TO MEET YOU!"
  };

  // Configuration for mobile navigation
  export const MOBILE_NAV_CONFIG = {
    // Bottom bar configuration
    bottomBar: {
      // Maximum number of items in bottom bar (including menu button)
      maxItems: 4,
      // Which sections to prioritize for bottom bar (by position in SECTION_ORDER)
      // 0 = first, -1 = last, etc.
      priorityPositions: [0, 1, -1] // First, second, and last items
    },
    // Text to show in the full menu header
    menuHeaderText: "Menu"
  };

  // Configuration for scroll detection
  export const SCROLL_CONFIG = {
    // Percentage of viewport height to trigger section change
    triggerThreshold: 0.3,
    // Minimum scroll position to consider non-hero sections
    minScrollForContent: 100,
    // Whether to update active section during scroll (vs only on navigation click)
    updateDuringScroll: true
  };

  // =========================================
  // SECTION STYLING
  // =========================================

  // Gradient colors for section headers
  export const SECTION_GRADIENTS = {
    hero: "from-blue-500 to-purple-500",
    testimonials: "from-pink-500 to-purple-500",
    experience: "from-green-500 to-blue-500",
    projects: "from-orange-500 to-red-500",
    skills: "from-purple-500 to-pink-500",
    education: "from-blue-500 to-cyan-500",
    certifications: "from-indigo-500 to-blue-500",
    goals: "from-red-500 to-orange-500",
    contact: "from-purple-500 to-indigo-500",
    default: "from-white to-gray-300" // Fallback gradient
  };

  // Export a helper function to get section data by ID
  export const getSectionData = (sectionId) => {
    return SECTIONS[sectionId] || null;
  };

  // Export helper function to validate navigation structure
  export const validateNavStructure = () => {
    // Check if all SECTION_ORDER items exist in SECTIONS
    SECTION_ORDER.forEach(id => {
      if (!SECTIONS[id]) {
        console.error(`Error: Section "${id}" in SECTION_ORDER is not defined in SECTIONS`);
      }
    });

    // Check for sections not included in SECTION_ORDER
    Object.keys(SECTIONS).forEach(id => {
      if (!SECTION_ORDER.includes(id)) {
        console.warn(`Warning: Section "${id}" is defined but not included in SECTION_ORDER`);
      }
    });

    // Check categories
    NAV_ITEMS.forEach(item => {
      if (item.category && !CATEGORIES.some(cat => cat.id === item.category)) {
        console.error(`Error: Item "${item.id}" references undefined category "${item.category}"`);
      }
    });
  };