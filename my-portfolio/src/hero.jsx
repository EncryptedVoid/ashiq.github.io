import React, { useState, useEffect } from 'react';  // Add useState and useEffect imports
import { Briefcase, GraduationCap, Users, Code } from 'lucide-react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Reusable components
const GlassPanel = ({ children, className = "" }) => (
<div className={`
    relative overflow-hidden
    bg-white/[0.08] backdrop-blur-2xl
    border border-white/[0.12]
    rounded-3xl
    transition-all duration-500 ease-out
    hover:-translate-y-2 hover:scale-[1.02]
    hover:bg-white/[0.12] hover:border-white/[0.2]
    hover:shadow-xl hover:shadow-blue-500/10
    active:scale-[0.98] active:translate-y-1
    ${className}
`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] to-white/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative z-10">{children}</div>
</div>
);

const WorkloadItem = ({ title, status, details, progress }) => {
const getStatusStyle = (status) => {
    switch(status) {
    case 'Active':
    case 'In Progress':
    case 'Project Lead':
    case 'Development':
    case 'Open Source':
    case 'Research Phase':
        return 'bg-green-500/20 text-green-400';
    case 'Starting Soon':
    case 'Next Month':
        return 'bg-orange-500/20 text-orange-400';
    default:
        return 'bg-white/10 text-gray-300';
    }
};

return (
    <motion.div
    className="p-4 rounded-2xl bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06]
        hover:translate-x-1 space-y-3 border border-white/[0.06] hover:border-white/[0.12]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    >
    <div className="flex justify-between items-start gap-4">
        <h3 className="font-medium text-white text-sm md:text-base">{title}</h3>
        <span className={`
        px-3 py-1 rounded-full text-xs font-medium
        transition-colors duration-300
        ${getStatusStyle(status)}
        `}>
        {status}
        </span>
    </div>
    <p className="text-gray-400 text-xs md:text-sm">{details}</p>
    {progress !== undefined && (
        <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full
            transform origin-left transition-transform duration-1000 ease-out"
            style={{ width: `${progress}%` }}
        />
        </div>
    )}
    </motion.div>
);
};

const CategoryCard = ({ icon: Icon, title, items }) => (
<GlassPanel className="flex flex-col h-full">
    <div className="flex items-center gap-3 p-4 border-b border-white/[0.06]">
    <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
        <Icon className="w-5 h-5 text-white" />
    </div>
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    </div>
    <div className="space-y-4 p-4 flex-grow">
    {items.map((item, idx) => (
        <WorkloadItem
        key={idx}
        title={item.title}
        status={item.status}
        details={item.details}
        progress={item.progress}
        />
    ))}
    </div>
</GlassPanel>
);

const Hero = () => {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(false);
}, []);

// Workload categories data
const workloadCategories = [
    {
    id: 1,
    title: "Professional",
    icon: Briefcase,
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
    {
    id: 2,
    title: "Academic",
    icon: GraduationCap,
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
    {
    id: 3,
    title: "Organizations",
    icon: Users,
    items: [
        {
        title: "AI/ML Club",
        status: "Project Lead",
        details: "Leading computer vision project",
        progress: 80
        },
        {
        title: "Hackathon Team",
        status: "Next Month",
        details: "Preparing for TreeHacks 2024"
        }
    ]
    },
    {
    id: 4,
    title: "Side Projects",
    icon: Code,
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
];

if (isLoading) {
    return <div>Loading...</div>;
}

return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8 lg:p-12">
    <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
        {/* Info Section */}
        <GlassPanel className="md:col-span-2 p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            WHOAMI
            </h1>
            <div className="space-y-6">
            <p className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-blue-400">
                ASHIQ GAZI
            </p>
            <p className="text-lg text-gray-300 transition-colors duration-300 hover:text-white">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <p className="text-lg text-gray-300 transition-colors duration-300 hover:text-white">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <div className="flex items-center gap-3 mt-8">
                <span className="text-gray-400">OTTAWA, ON, CANADA</span>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400">Open to opportunities</span>
            </div>
            </div>
        </GlassPanel>

            {/* Headshot Section */}
            <div className="
            aspect-square rounded-3xl
            bg-gradient-to-br from-blue-500 to-indigo-600
            transition-all duration-500
            hover:scale-[1.02] hover:rotate-2
            hover:shadow-2xl hover:shadow-blue-500/20
            relative overflow-hidden
            ">
            <img
                src="https://picsum.photos/400/400"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            </div>
        </div>

        {/* Workload Section */}
        <GlassPanel className="p-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
            CURRENTLY WORKING ON:
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workloadCategories.map(category => (
            <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.title}
                items={category.items}
            />
            ))}
        </div>
        </GlassPanel>
    </div>
    </div>
);
};

export default Hero;

// import { Briefcase, GraduationCap, Users, Code } from 'lucide-react';
// import './hero.css';

// function Hero() {
//   // Data for workload categories
//   const workloadCategories = [
//     {
//       id: 1,
//       title: "Professional",
//       icon: <Briefcase />,
//       items: [
//         {
//           title: "Software Engineer Intern @ Apple",
//           status: "Active",
//           details: "Working on iOS accessibility features",
//           progress: 75,
//           isActive: true
//         },
//         {
//           title: "Research Assistant",
//           status: "Starting Soon",
//           details: "ML Research Project",
//           isUpcoming: true
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: "Academic",
//       icon: <GraduationCap />,
//       items: [
//         {
//           title: "Advanced ML Course",
//           status: "In Progress",
//           details: "CS 4780 - Current GPA: 3.9",
//           progress: 60,
//           isActive: true
//         },
//         {
//           title: "Senior Thesis",
//           status: "Research Phase",
//           details: "AI in Healthcare Applications",
//           progress: 40,
//           isActive: true
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "Organizations",
//       icon: <Users />,
//       items: [
//         {
//           title: "AI/ML Club",
//           status: "Project Lead",
//           details: "Leading computer vision project",
//           progress: 80,
//           isActive: true
//         },
//         {
//           title: "Hackathon Team",
//           status: "Next Month",
//           details: "Preparing for TreeHacks 2024",
//           isUpcoming: true
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: "Side Projects",
//       icon: <Code />,
//       items: [
//         {
//           title: "iOS Health App",
//           status: "Development",
//           details: "SwiftUI + HealthKit Integration",
//           progress: 65,
//           isActive: true
//         },
//         {
//           title: "Design System",
//           status: "Open Source",
//           details: "React component library",
//           progress: 90,
//           isActive: true
//         }
//       ]
//     }
//   ];

//   const WorkloadItem = ({ item }) => (
//     <div className="workload-item">
//       <div className="item-header">
//         <div className="item-title">{item.title}</div>
//         <div className={`item-status ${item.isActive ? 'active' : ''} ${item.isUpcoming ? 'upcoming' : ''}`}>
//           {item.status}
//         </div>
//       </div>
//       <div className="item-details">{item.details}</div>
//       {item.progress !== undefined && (
//         <div className="progress-bar">
//           <div
//             className="progress-fill"
//             style={{ width: `${item.progress}%` }}
//           ></div>
//         </div>
//       )}
//     </div>
//   );

//   const WorkloadCategory = ({ category }) => (
//     <div className="workload-category">
//       <div className="category-header">
//         <div className="category-icon">
//           {category.icon}
//         </div>
//         <div className="category-title">{category.title}</div>
//       </div>
//       <div className="workload-items">
//         {category.items.map((item, index) => (
//           <WorkloadItem key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="hero-container">
//       <div className="info-section">
//         <h1>WHOAMI</h1>
//         <p>ASHIQ GAZI</p>
//         <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
//         <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
//         <div className="availability-wrapper">
//           <span>OTTAWA, ON, CANADA</span>
//           <div className="status-indicator available"></div>
//           <span className="status-text available">Open to opportunities</span>
//         </div>
//       </div>

//       <div className="headshot-section"></div>

//       <div className="workload-section">
//         <h1>CURRENTLY WORKING ON:</h1>
//         <div className="workload-grid">
//           {workloadCategories.map(category => (
//             <WorkloadCategory key={category.id} category={category} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;