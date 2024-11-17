import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Users, Code } from 'lucide-react';

const MobileOptimizedProfile = () => {
const [expandedCategory, setExpandedCategory] = useState('professional');

const workloadCategories = {
    professional: {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Professional",
    items: [
        {
        title: "Software Engineer Intern @ Apple",
        status: "Active",
        details: "Working on iOS accessibility features",
        progress: 75
        },
        {
        title: "Research Assistant",
        status: "Starting Soon",
        details: "ML Research Project"
        }
    ]
    },
    academic: {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Academic",
    items: [
        {
        title: "Advanced ML Course",
        status: "In Progress",
        details: "CS 4780 - Current GPA: 3.9",
        progress: 60
        },
        {
        title: "Senior Thesis",
        status: "Research Phase",
        details: "AI in Healthcare Applications",
        progress: 40
        }
    ]
    },
    organizations: {
    icon: <Users className="w-6 h-6" />,
    title: "Organizations",
    items: [
        {
        title: "AI/ML Club",
        status: "Project Lead",
        details: "Leading computer vision project",
        progress: 80
        },
        {
        title: "Hackathon Team",
        status: "Upcoming",
        details: "Preparing for TreeHacks 2024"
        }
    ]
    },
    sideProjects: {
    icon: <Code className="w-6 h-6" />,
    title: "Side Projects",
    items: [
        {
        title: "iOS Health App",
        status: "Development",
        details: "SwiftUI + HealthKit Integration",
        progress: 65
        },
        {
        title: "Design System",
        status: "Open Source",
        details: "React component library",
        progress: 90
        }
    ]
    }
};

return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f8f8fa] p-4 md:p-6">
    <div className="max-w-6xl mx-auto space-y-6">
        {/* Info Section - Always visible but condensed on mobile */}
        <div className="bg-white/8 border border-white/12 rounded-2xl p-6 backdrop-blur-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#5856D6] bg-clip-text text-transparent">
            Overview
        </h1>

        {/* Only show name on mobile, expand on click */}
        <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-[#8e8e93]">Name</p>

            {/* Hide on mobile, show on larger screens */}
            <div className="hidden md:block space-y-4">
            <p className="text-base md:text-lg text-[#8e8e93]">Mission Statement</p>
            <p className="text-base md:text-lg text-[#8e8e93]">Goals</p>
            </div>

            {/* Availability - Condensed on mobile */}
            <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-[#34C759] animate-pulse" />
            <span className="text-[#34C759]">Available</span>
            </div>
        </div>
        </div>

        {/* Workload Section - Accordion style on mobile */}
        <div className="bg-white/8 border border-white/12 rounded-2xl p-6 backdrop-blur-xl">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#007AFF] to-[#5856D6] bg-clip-text text-transparent">
            Current Work
        </h1>

        <div className="space-y-4">
            {Object.entries(workloadCategories).map(([key, category]) => (
            <div key={key} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                className="w-full p-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center">
                    {category.icon}
                    </div>
                    <span className="font-semibold">{category.title}</span>
                </div>
                {expandedCategory === key ?
                    <ChevronUp className="w-5 h-5" /> :
                    <ChevronDown className="w-5 h-5" />
                }
                </button>

                {/* Expandable content */}
                {expandedCategory === key && (
                <div className="p-4 space-y-4">
                    {category.items.map((item, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-start">
                        <div className="font-medium">{item.title}</div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                            item.status === "Active" || item.status === "In Progress"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-orange-500/20 text-orange-400"
                        }`}>
                            {item.status}
                        </span>
                        </div>
                        <p className="text-sm text-[#8e8e93]">{item.details}</p>
                        {item.progress && (
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div
                            className="h-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                            />
                        </div>
                        )}
                    </div>
                    ))}
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
);
};

export default MobileOptimizedProfile;