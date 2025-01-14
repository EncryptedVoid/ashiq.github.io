// src/data/heroData.js
import { Briefcase, GraduationCap, Users, Code } from 'lucide-react';

export const heroData = {
intro: {
    terminalText: "WHOAMI",
    title: {
    line1: "Senior Full Stack",
    line2: "Developer"
    },
    description: [
    "Crafting elegant, user-centric digital experiences with deep expertise in both technical implementation and design philosophy.",
    "Former Apple Interaction Developer and Meta UI/UX Developer, specializing in creating seamless, responsive experiences."
    ]
},

status: {
    location: "OTTAWA, ON, CANADA",
    availability: "Available for Work",
    resumeLink: "/path-to-resume.pdf"
},

profileImage: {
    src: "/profile-image.jpg",
    alt: "Profile"
},

quickStats: [
    {
    icon: Briefcase,
    label: "Years Experience",
    value: "15+"
    },
    {
    icon: GraduationCap,
    label: "Projects Completed",
    value: "200+"
    },
    {
    icon: Users,
    label: "Satisfied Clients",
    value: "50+"
    },
    {
    icon: Code,
    label: "Technologies",
    value: "30+"
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

export default heroData;