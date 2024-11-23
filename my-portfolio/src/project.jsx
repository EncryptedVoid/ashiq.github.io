import './project.css';

function Projects() {
// Projects data array to avoid repetition
const projects = [
    {
    id: 1,
    status: "In Progress",
    title: "iOS 17 Gestures",
    skills: ["SwiftUI", "Gesture Design", "HCI"],
    description: "Leading the design and implementation of system-wide gesture interactions for iOS 17, focusing on natural and intuitive user experiences with improved accessibility features.",
    progress: 50,
    image: "" // Add image URL here
    },
    {
        id: 1,
        status: "In Progress",
        title: "iOS 17 Gestures",
        skills: ["SwiftUI", "Gesture Design", "HCI"],
        description: "Leading the design and implementation of system-wide gesture interactions for iOS 17, focusing on natural and intuitive user experiences with improved accessibility features.",
        progress: 50,
        image: "" // Add image URL here
    },
    {
        id: 1,
        status: "In Progress",
        title: "iOS 17 Gestures",
        skills: ["SwiftUI", "Gesture Design", "HCI"],
        description: "Leading the design and implementation of system-wide gesture interactions for iOS 17, focusing on natural and intuitive user experiences with improved accessibility features.",
        progress: 50,
        image: "" // Add image URL here
    },
    {
        id: 1,
        status: "In Progress",
        title: "iOS 17 Gestures",
        skills: ["SwiftUI", "Gesture Design", "HCI"],
        description: "Leading the design and implementation of system-wide gesture interactions for iOS 17, focusing on natural and intuitive user experiences with improved accessibility features.",
        progress: 50,
        image: "" // Add image URL here
    },
    {
        id: 1,
        status: "In Progress",
        title: "iOS 17 Gestures",
        skills: ["SwiftUI", "Gesture Design", "HCI"],
        description: "Leading the design and implementation of system-wide gesture interactions for iOS 17, focusing on natural and intuitive user experiences with improved accessibility features.",
        progress: 50,
        image: "" // Add image URL here
    },
    // Add more projects here with different data
];

// ProjectCard component to avoid repetition
const ProjectCard = ({ project }) => (
    <div className="project-card">
    <div className="project-status">{project.status}</div>
    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
    <div className="project-content">
        <h2 className="project-title">{project.title}</h2>
        <div className="project-skills">
        {project.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
        ))}
        </div>
        <p className="project-description">{project.description}</p>
        <div className="progress-container">
        <div className="progress-label">
            <span>Development Progress</span>
            <span>{project.progress}%</span>
        </div>
        <div className="progress-bar">
            <div
            className="progress"
            style={{ width: `${project.progress}%` }}
            ></div>
        </div>
        </div>
    </div>
    </div>
);

return (
    <div className="App">
    <section className="projects-section">
        <div className="section-header">
        <h1 className="header-title">Featured Projects</h1>
        <p className="header-subtitle">
            A curated selection of innovative projects showcasing my expertise
            in human interface design and interaction development.
        </p>
        </div>

        <div className="projects-grid">
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
        </div>
    </section>
    </div>
);
}

export default Projects;