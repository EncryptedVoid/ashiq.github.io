// src/data/HeroData.js
import { Code, GraduationCap, Terminal, FileCode } from 'lucide-react';
import { getAssetPath } from '../utils/assetUtils';

export const HeroData = {
  intro: {
    terminalText: "WHOAMI",
    title: {
      line1: "Ashiq Gazi",
      line2: "Software Engineer"
    },
    description: [
      "First-year University of Ottawa student pursuing a double major in Mathematics and Computer Science (Data Science), with a passion for AI and frontend development.",
      "Currently specializing in software automation and testing at BlackBerry QNX while developing frontend solutions as a freelance developer."
    ]
  },

  status: {
    location: "OTTAWA, ON, CANADA",
    availability: "Open to Opportunities",
    resumeLink: getAssetPath("resume.pdf"),
  },

  profileImage: {
    src: getAssetPath("pfp.jpg"),
    alt: "Ashiq Gazi - Software Developer"
  },

  quickStats: [
    {
      icon: Code,
      label: "Projects Completed",
      value: "25+"
    },
    {
      icon: GraduationCap,
      label: "Certifications",
      value: "5+"
    },
    {
      icon: Terminal,
      label: "Technologies",
      value: "10+"
    },
    {
      icon: FileCode,
      label: "GitHub Repos",
      value: "26+"
    }
  ],

  // Animation configs - keeping these with the data for easy tweaking
  animations: {
    springConfig: { damping: 15, stiffness: 150 },
    textDelays: {
      terminalText: 0.5,
      titleLine1: 0.7,
      titleLine2: 0.9,
      description: 1.1,
      status: 1.3
    }
  }
};

export default HeroData;