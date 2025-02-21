import {
  Mail,
  Calendar,
  Github,
  Linkedin,
  Youtube,
  Brain,
  ExternalLink,
  Code,
  MessageCircle
} from 'lucide-react';

const SocialsData = {
  email: {
    icon: Mail,
    label: "Send me an email",
    gradient: "from-blue-500 via-cyan-400 to-blue-500",
    bgColor: "bg-blue-950/40",
    hoverColor: "text-blue-400",
    onClick: () => window.location.href = 'mailto:ashiqarib@gmail.com'
  },
  calendly: {
    icon: Calendar,
    label: "Schedule a call",
    gradient: "from-emerald-500 via-green-400 to-emerald-500",
    bgColor: "bg-emerald-950/40",
    hoverColor: "text-emerald-400",
    onClick: () => window.open("https://calendly.com/your-calendly-link", '_blank'),
    description: "Book a 30-minute slot to discuss collaboration opportunities"
  },
  github: {
    icon: Github,
    label: "GitHub",
    gradient: "from-[#2ea043] via-[#238636] to-[#2ea043]",
    bgColor: "bg-[#0d1117]",
    hoverColor: "text-[#2ea043]",
    onClick: () => window.open("https://github.com/yourusername", '_blank'),
    stats: "View my code repositories",
    description: "Check out my open-source projects and contributions"
  },
  linkedin: {
    icon: Linkedin,
    label: "LinkedIn",
    gradient: "from-[#0077b5] via-[#00a0dc] to-[#0077b5]",
    bgColor: "bg-[#0a66c2]/20",
    hoverColor: "text-[#0077b5]",
    onClick: () => window.open("https://linkedin.com/in/yourusername", '_blank'),
    stats: "Connect professionally",
    description: "View my professional experience and achievements"
  },
  youtube: {
    icon: Youtube,
    label: "YouTube",
    gradient: "from-[#ff0000] via-[#ff4e45] to-[#ff0000]",
    bgColor: "bg-[#282828]",
    hoverColor: "text-[#ff0000]",
    onClick: () => window.open("https://youtube.com/c/yourchannel", '_blank'),
    stats: "Watch my tutorials",
    description: "Technical tutorials and design system insights"
  },
  wandb: {
    icon: Brain,
    label: "Weights & Biases",
    gradient: "from-[#ff9d00] via-[#ff0080] to-[#ff9d00]",
    bgColor: "bg-[#111827]",
    hoverColor: "text-[#ff9d00]",
    onClick: () => window.open("https://wandb.ai/yourusername", '_blank'),
    stats: "Explore ML experiments",
    description: "Machine learning experiments and research projects"
  }
};

export default SocialsData