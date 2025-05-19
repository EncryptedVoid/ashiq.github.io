// src/data/skillsData.js
export const skillsData = [
  // Programming Languages
  {
    id: "python",
    name: "Python",
    category: "Programming Languages",
    logo: "/assets/skill-logos/python-logo.svg",
    emoji: "🐍",
    color: "#3776AB", // Python blue
    officialLink: "https://www.python.org/",
    portfolioLinks: [
      { name: "ML Experimentation", url: "https://github.com/EncryptedVoid/Machine-Learning-Experimenting" },
      { name: "Conway's Game of Life", url: "https://github.com/EncryptedVoid/Conways-Game-Of-Life-Plus" },
      { name: "QNX Testing Framework", url: "https://private-repo-example.com/qnx-testing" }
    ],
    description: "Primary language for automation, testing frameworks, and data analysis projects."
  },
  {
    id: "java",
    name: "Java",
    category: "Programming Languages",
    logo: "/assets/skill-logos/java-logo.svg",
    emoji: "☕",
    color: "#f89820", // Java orange
    officialLink: "https://www.java.com/",
    portfolioLinks: [
      { name: "JONOPOLY", url: "https://github.com/EncryptedVoid/JONOPOLY-Java-Monopoly" },
      { name: "JUDOKU", url: "https://github.com/EncryptedVoid/JUDOKU-Java-Sudoku" },
      { name: "FortuneAI", url: "https://github.com/EncryptedVoid/FortuneAI" }
    ],
    description: "Used for object-oriented programming projects and algorithm implementation."
  },
  {
    id: "csharp",
    name: "C#",
    category: "Programming Languages",
    logo: "/assets/skill-logos/csharp-logo.svg",
    emoji: "🔷",
    color: "#9B4F96", // C# purple
    officialLink: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    portfolioLinks: [
      { name: "Unity Game Project", url: "https://github.com/username/unity-game" },
      { name: "Windows App", url: "https://github.com/username/windows-app" },
      { name: "Web API", url: "https://github.com/username/dotnet-api" }
    ],
    description: "Object-oriented programming language developed by Microsoft, used for Windows and game development."
  },
  {
    id: "cpp",
    name: "C/C++",
    category: "Programming Languages",
    logo: "/assets/skill-logos/cpp-logo.svg",
    emoji: "⚙️",
    color: "#659AD2", // C++ blue
    officialLink: "https://isocpp.org/",
    portfolioLinks: [
      { name: "Embedded Systems", url: "https://github.com/username/embedded-project" },
      { name: "Performance Library", url: "https://github.com/username/performance-lib" },
      { name: "Algorithm Implementation", url: "https://github.com/username/algorithms-cpp" }
    ],
    description: "Systems programming languages used for embedded systems, performance-critical applications, and hardware interfaces."
  },
  {
    id: "bash",
    name: "Bash/Shell",
    category: "Programming Languages",
    logo: "/assets/skill-logos/bash-logo.svg",
    emoji: "📜",
    color: "#4EAA25", // Bash green
    officialLink: "https://www.gnu.org/software/bash/",
    portfolioLinks: [
      { name: "Automation Scripts", url: "https://github.com/username/bash-automation" },
      { name: "System Utilities", url: "https://github.com/username/system-utils" },
      { name: "Development Tools", url: "https://github.com/username/dev-tools" }
    ],
    description: "Command line interface and scripting language for automating tasks and system administration."
  },
  {
    id: "html-css",
    name: "HTML5/CSS3",
    category: "Programming Languages",
    logo: "/assets/skill-logos/html-css-logo.svg",
    emoji: "🌐",
    color: "#E44D26", // HTML orange
    officialLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    portfolioLinks: [
      { name: "Personal Portfolio", url: "https://ashiq.live" },
      { name: "Client Website", url: "https://russelldrivingschool.com" },
      { name: "Web Projects", url: "https://github.com/username/web-projects" }
    ],
    description: "Core technologies for building web pages and applications, handling structure and styling."
  },

  // Web Development
  {
    id: "react",
    name: "React",
    category: "Web Development",
    logo: "/assets/skill-logos/react-logo.svg",
    emoji: "⚛️",
    color: "#61DAFB", // React blue
    officialLink: "https://reactjs.org/",
    portfolioLinks: [
      { name: "Personal Portfolio", url: "https://ashiq.live" },
      { name: "Russell Driving School", url: "https://russelldrivingschool.com" },
      { name: "Weather Dashboard", url: "https://github.com/EncryptedVoid/Weather-Dashboard-WebApp" }
    ],
    description: "Frontend library for building interactive user interfaces with component-based architecture."
  },
  {
    id: "wix",
    name: "WIX",
    category: "Web Development",
    logo: "/assets/skill-logos/wix-logo.svg",
    emoji: "🧩",
    color: "#0C6EFC", // Wix blue
    officialLink: "https://www.wix.com/",
    portfolioLinks: [
      { name: "Client Website 1", url: "https://www.example-client1.com" },
      { name: "Client Website 2", url: "https://www.example-client2.com" },
      { name: "Portfolio Site", url: "https://www.example-portfolio.com" }
    ],
    description: "Cloud-based website development platform for creating professional websites without coding."
  },

  // DevOps & CI/CD
  {
    id: "docker",
    name: "Docker",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/docker-logo.svg",
    emoji: "🐳",
    color: "#2496ED", // Docker blue
    officialLink: "https://www.docker.com/",
    portfolioLinks: [
      { name: "Containerized ML Environment", url: "https://github.com/username/ml-docker-env" },
      { name: "QNX Testing Containers", url: "https://private-repo-example.com/qnx-containers" },
      { name: "Development Environment", url: "https://github.com/username/dev-containers" }
    ],
    description: "Container platform for building, shipping, and running applications in isolated environments."
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/github-actions-logo.svg",
    emoji: "🔄",
    color: "#2088FF", // GitHub Actions blue
    officialLink: "https://github.com/features/actions",
    portfolioLinks: [
      { name: "CI/CD Pipeline", url: "https://github.com/username/cicd-pipeline" },
      { name: "Automated Testing", url: "https://github.com/username/automated-testing" },
      { name: "Deployment Workflow", url: "https://github.com/username/deployment-workflow" }
    ],
    description: "Automated workflows for CI/CD directly integrated into GitHub repositories."
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/jenkins-logo.svg",
    emoji: "👷",
    color: "#D33833", // Jenkins red
    officialLink: "https://www.jenkins.io/",
    portfolioLinks: [
      { name: "QNX Pipeline", url: "https://private-repo-example.com/jenkins-qnx" },
      { name: "Build Automation", url: "https://github.com/username/jenkins-builds" },
      { name: "Test Automation", url: "https://github.com/username/jenkins-tests" }
    ],
    description: "Open-source automation server for building, testing, and deploying software."
  },
  {
    id: "ssh-scp",
    name: "SSH/SCP",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/ssh-logo.svg",
    emoji: "🔐",
    color: "#4D4D4D", // SSH gray
    officialLink: "https://www.ssh.com/academy/ssh",
    portfolioLinks: [
      { name: "Remote Automation", url: "https://github.com/username/remote-automation" },
      { name: "File Transfer Scripts", url: "https://github.com/username/file-transfer" },
      { name: "Server Management", url: "https://github.com/username/server-management" }
    ],
    description: "Secure protocols for remote system access and file transfers in networked environments."
  },
  {
    id: "gcc",
    name: "GCC",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/gcc-logo.svg",
    emoji: "🔨",
    color: "#FFCF00", // GCC gold
    officialLink: "https://gcc.gnu.org/",
    portfolioLinks: [
      { name: "Custom Compilation", url: "https://github.com/username/custom-compilation" },
      { name: "Cross-Platform Build", url: "https://github.com/username/cross-platform-build" },
      { name: "Optimization Project", url: "https://github.com/username/optimization-project" }
    ],
    description: "GNU Compiler Collection supporting multiple programming languages and target platforms."
  },
  {
    id: "cmake",
    name: "CMake",
    category: "DevOps & CI/CD",
    logo: "/assets/skill-logos/cmake-logo.svg",
    emoji: "🏗️",
    color: "#064F8C", // CMake blue
    officialLink: "https://cmake.org/",
    portfolioLinks: [
      { name: "Cross-Platform Project", url: "https://github.com/username/cross-platform-project" },
      { name: "Build Configuration", url: "https://github.com/username/build-config" },
      { name: "Library Integration", url: "https://github.com/username/library-integration" }
    ],
    description: "Cross-platform build system generator for managing the build process in multiple environments."
  },

  // Version Control & Project Management
  {
    id: "git",
    name: "Git/GitHub/GitLab",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/git-logo.svg",
    emoji: "📊",
    color: "#F05032", // Git orange
    officialLink: "https://git-scm.com/",
    portfolioLinks: [
      { name: "Open Source Contributions", url: "https://github.com/EncryptedVoid" },
      { name: "Project Workflow", url: "https://github.com/username/project-workflow" },
      { name: "Collaboration Example", url: "https://github.com/username/collaboration-example" }
    ],
    description: "Distributed version control system for tracking changes in source code during software development."
  },
  {
    id: "subversion",
    name: "Subversion",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/subversion-logo.svg",
    emoji: "🗂️",
    color: "#809CC9", // Subversion blue
    officialLink: "https://subversion.apache.org/",
    portfolioLinks: [
      { name: "Legacy Project", url: "https://example.com/svn-legacy-project" },
      { name: "Corporate Repository", url: "https://private-repo-example.com/svn-corporate" },
      { name: "Migration Project", url: "https://github.com/username/svn-migration" }
    ],
    description: "Centralized version control system used for managing files and directories in corporate environments."
  },
  {
    id: "jira",
    name: "Jira",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/jira-logo.svg",
    emoji: "📋",
    color: "#0052CC", // Jira blue
    officialLink: "https://www.atlassian.com/software/jira",
    portfolioLinks: [
      { name: "Agile Workflow", url: "https://private-repo-example.com/jira-agile" },
      { name: "Project Tracking", url: "https://private-repo-example.com/jira-tracking" },
      { name: "Bug Management", url: "https://private-repo-example.com/jira-bugs" }
    ],
    description: "Project management tool for planning, tracking, and managing software development projects."
  },
  {
    id: "confluence",
    name: "Confluence",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/confluence-logo.svg",
    emoji: "📝",
    color: "#0052CC", // Confluence blue
    officialLink: "https://www.atlassian.com/software/confluence",
    portfolioLinks: [
      { name: "Project Documentation", url: "https://private-repo-example.com/confluence-docs" },
      { name: "Team Knowledge Base", url: "https://private-repo-example.com/confluence-kb" },
      { name: "Technical Specifications", url: "https://private-repo-example.com/confluence-specs" }
    ],
    description: "Team workspace for organizing, creating, and discussing work in one place."
  },
  {
    id: "reviewboard",
    name: "ReviewBoard",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/reviewboard-logo.svg",
    emoji: "👁️",
    color: "#88C7F4", // ReviewBoard blue
    officialLink: "https://www.reviewboard.org/",
    portfolioLinks: [
      { name: "Code Review Process", url: "https://private-repo-example.com/reviewboard-process" },
      { name: "Team Collaboration", url: "https://private-repo-example.com/reviewboard-collab" },
      { name: "Quality Assurance", url: "https://private-repo-example.com/reviewboard-qa" }
    ],
    description: "Web-based collaborative code review tool for reviewing code changes before they're committed."
  },
  {
    id: "mattermost",
    name: "Mattermost",
    category: "Version Control & Project Management",
    logo: "/assets/skill-logos/mattermost-logo.svg",
    emoji: "💬",
    color: "#0072C6", // Mattermost blue
    officialLink: "https://mattermost.com/",
    portfolioLinks: [
      { name: "Team Communication", url: "https://private-repo-example.com/mattermost-communication" },
      { name: "DevOps Integration", url: "https://private-repo-example.com/mattermost-devops" },
      { name: "Project Coordination", url: "https://private-repo-example.com/mattermost-coordination" }
    ],
    description: "Secure, open-source platform for team communication, collaboration, and project coordination."
  },

  // IDEs & Development Tools
  {
    id: "jetbrains",
    name: "Jetbrains IDEs",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/jetbrains-logo.svg",
    emoji: "🧠",
    color: "#000000", // JetBrains black
    officialLink: "https://www.jetbrains.com/",
    portfolioLinks: [
      { name: "Python Development", url: "https://github.com/username/python-pycharm" },
      { name: "Java Development", url: "https://github.com/username/java-intellij" },
      { name: "Web Development", url: "https://github.com/username/web-webstorm" }
    ],
    description: "Integrated development environments for various programming languages with advanced features and tools."
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/vscode-logo.svg",
    emoji: "📝",
    color: "#007ACC", // VS Code blue
    officialLink: "https://code.visualstudio.com/",
    portfolioLinks: [
      { name: "Web Projects", url: "https://github.com/username/web-vscode" },
      { name: "Extension Development", url: "https://github.com/username/vscode-extension" },
      { name: "Remote Development", url: "https://github.com/username/remote-dev" }
    ],
    description: "Lightweight but powerful source code editor with extensive ecosystem of extensions."
  },
  {
    id: "momentics",
    name: "Momentics IDE",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/momentics-logo.svg",
    emoji: "🔍",
    color: "#000000", // QNX black
    officialLink: "https://blackberry.qnx.com/en/software-solutions/tools",
    portfolioLinks: [
      { name: "QNX Development", url: "https://private-repo-example.com/qnx-dev" },
      { name: "Embedded Systems", url: "https://private-repo-example.com/embedded-momentics" },
      { name: "Real-time Applications", url: "https://private-repo-example.com/realtime-apps" }
    ],
    description: "Integrated development environment for QNX embedded systems and real-time applications."
  },
  {
    id: "quartus",
    name: "Altera Quartus",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/quartus-logo.svg",
    emoji: "⚡",
    color: "#0071C5", // Intel blue
    officialLink: "https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/overview.html",
    portfolioLinks: [
      { name: "FPGA Design", url: "https://github.com/username/fpga-design" },
      { name: "Hardware Development", url: "https://github.com/username/hardware-dev" },
      { name: "Digital Logic", url: "https://github.com/username/digital-logic" }
    ],
    description: "Design software for FPGA and CPLD development from Intel (formerly Altera)."
  },
  {
    id: "7zip",
    name: "7zip",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/7zip-logo.svg",
    emoji: "🗜️",
    color: "#990000", // 7zip red
    officialLink: "https://www.7-zip.org/",
    portfolioLinks: [
      { name: "Automation Scripts", url: "https://github.com/username/7zip-automation" },
      { name: "File Processing", url: "https://github.com/username/file-processing" },
      { name: "Backup Systems", url: "https://github.com/username/backup-systems" }
    ],
    description: "File archiver with high compression ratio for managing and processing archives."
  },
  {
    id: "nomachine",
    name: "NoMachine",
    category: "IDEs & Development Tools",
    logo: "/assets/skill-logos/nomachine-logo.svg",
    emoji: "🖥️",
    color: "#76B900", // NoMachine green
    officialLink: "https://www.nomachine.com/",
    portfolioLinks: [
      { name: "Remote Development", url: "https://private-repo-example.com/remote-dev-setup" },
      { name: "Cross-Platform Work", url: "https://private-repo-example.com/cross-platform" },
      { name: "Remote Access Solutions", url: "https://private-repo-example.com/remote-solutions" }
    ],
    description: "Remote desktop software for secure access to workstations across platforms and networks."
  },

  // Hardware & Embedded Systems
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/raspberry-pi-logo.svg",
    emoji: "🍓",
    color: "#C51A4A", // Raspberry Pi red
    officialLink: "https://www.raspberrypi.org/",
    portfolioLinks: [
      { name: "IoT Project", url: "https://github.com/username/iot-raspberry" },
      { name: "Camera Module Application", url: "https://github.com/username/pi-camera" },
      { name: "Home Automation", url: "https://github.com/username/home-automation" }
    ],
    description: "Single-board computer used for embedded projects, IoT applications, and educational purposes."
  },
  {
    id: "computer-building",
    name: "Computer Building",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/computer-building-logo.svg",
    emoji: "🔧",
    color: "#4F5BD5", // Tech blue
    officialLink: "https://pcpartpicker.com/",
    portfolioLinks: [
      { name: "Custom PC Build", url: "https://github.com/username/custom-pc" },
      { name: "Performance Workstation", url: "https://github.com/username/workstation-build" },
      { name: "Small Form Factor PC", url: "https://github.com/username/sff-build" }
    ],
    description: "Designing, assembling, and configuring custom computer systems for specific requirements."
  },
  {
    id: "soldering",
    name: "Soldering",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/soldering-logo.svg",
    emoji: "🔥",
    color: "#FF6B00", // Heat orange
    officialLink: "https://www.ipc.org/",
    portfolioLinks: [
      { name: "Circuit Repair", url: "https://github.com/username/circuit-repair" },
      { name: "Custom Electronics", url: "https://github.com/username/custom-electronics" },
      { name: "Hardware Mods", url: "https://github.com/username/hardware-mods" }
    ],
    description: "Joining electronic components using molten metal solder for circuits and hardware assemblies."
  },
  {
    id: "balena-etcher",
    name: "Balena Etcher",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/balena-etcher-logo.svg",
    emoji: "📀",
    color: "#41BF56", // Balena green
    officialLink: "https://www.balena.io/etcher/",
    portfolioLinks: [
      { name: "OS Deployment", url: "https://github.com/username/os-deployment" },
      { name: "Firmware Flashing", url: "https://github.com/username/firmware-flash" },
      { name: "Image Management", url: "https://github.com/username/image-management" }
    ],
    description: "Open-source utility for flashing OS images to SD cards and USB drives reliably."
  },
  {
    id: "rpi-imager",
    name: "RPI Imager",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/rpi-imager-logo.svg",
    emoji: "💾",
    color: "#C51A4A", // Raspberry Pi red
    officialLink: "https://www.raspberrypi.com/software/",
    portfolioLinks: [
      { name: "Raspberry Pi Setup", url: "https://github.com/username/rpi-setup" },
      { name: "Custom Image Deployment", url: "https://github.com/username/custom-image" },
      { name: "Multi-device Provisioning", url: "https://github.com/username/multi-provisioning" }
    ],
    description: "Official Raspberry Pi imaging tool for writing operating systems to SD cards."
  },
  {
    id: "mkqnximage",
    name: "Mkqnximage",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/qnx-logo.svg",
    emoji: "📦",
    color: "#000000", // QNX black
    officialLink: "https://blackberry.qnx.com/en/software-solutions/embedded-software/qnx-neutrino-rtos",
    portfolioLinks: [
      { name: "QNX Image Creation", url: "https://private-repo-example.com/qnx-image" },
      { name: "Embedded OS Deployment", url: "https://private-repo-example.com/embedded-deployment" },
      { name: "System Configuration", url: "https://private-repo-example.com/system-config" }
    ],
    description: "QNX utility for creating bootable system images for embedded QNX systems."
  },
  {
    id: "dejagnu",
    name: "DejaGNU",
    category: "Hardware & Embedded Systems",
    logo: "/assets/skill-logos/dejagnu-logo.svg",
    emoji: "🧪",
    color: "#7B6A4D", // GNU brown
    officialLink: "https://www.gnu.org/software/dejagnu/",
    portfolioLinks: [
      { name: "Test Framework", url: "https://github.com/username/dejagnu-framework" },
      { name: "Automated Testing", url: "https://github.com/username/dejagnu-automation" },
      { name: "Tool Validation", url: "https://github.com/username/tool-validation" }
    ],
    description: "Testing framework for programs, used primarily for testing GNU tools."
  },

  // Virtualization & Remote Access
  {
    id: "virtualbox",
    name: "VirtualBox",
    category: "Virtualization & Remote Access",
    logo: "/assets/skill-logos/virtualbox-logo.svg",
    emoji: "📦",
    color: "#183A61", // VirtualBox blue
    officialLink: "https://www.virtualbox.org/",
    portfolioLinks: [
      { name: "VM Management", url: "https://github.com/username/vm-management" },
      { name: "Development Environments", url: "https://github.com/username/dev-environments" },
      { name: "OS Testing", url: "https://github.com/username/os-testing" }
    ],
    description: "Open-source hypervisor for x86 virtualization, supporting multiple operating systems."
  },
  {
    id: "vmware",
    name: "VMWare",
    category: "Virtualization & Remote Access",
    logo: "/assets/skill-logos/vmware-logo.svg",
    emoji: "🖥️",
    color: "#607078", // VMWare blue-gray
    officialLink: "https://www.vmware.com/",
    portfolioLinks: [
      { name: "Enterprise Virtualization", url: "https://private-repo-example.com/enterprise-vm" },
      { name: "Virtual Infrastructure", url: "https://private-repo-example.com/virtual-infrastructure" },
      { name: "Testing Environment", url: "https://private-repo-example.com/vm-testing" }
    ],
    description: "Virtualization platform for desktop, server, and cloud computing environments."
  },
  {
    id: "qemu",
    name: "QEMU",
    category: "Virtualization & Remote Access",
    logo: "/assets/skill-logos/qemu-logo.svg",
    emoji: "🐧",
    color: "#FF6600", // QEMU orange
    officialLink: "https://www.qemu.org/",
    portfolioLinks: [
      { name: "Emulation Framework", url: "https://github.com/username/qemu-framework" },
      { name: "Architecture Testing", url: "https://github.com/username/arch-testing" },
      { name: "System Emulation", url: "https://github.com/username/system-emulation" }
    ],
    description: "Generic machine emulator and virtualizer supporting multiple architectures."
  },
  {
    id: "nomachine-remote",
    name: "NoMachine",
    category: "Virtualization & Remote Access",
    logo: "/assets/skill-logos/nomachine-logo.svg",
    emoji: "🔄",
    color: "#76B900", // NoMachine green
    officialLink: "https://www.nomachine.com/",
    portfolioLinks: [
      { name: "Remote Workflow", url: "https://github.com/username/remote-workflow" },
      { name: "Cross-Platform Access", url: "https://github.com/username/cross-platform-access" },
      { name: "Performance Testing", url: "https://github.com/username/remote-performance" }
    ],
    description: "Remote desktop software for secure access to workstations across platforms and networks."
  },

  // AI & Machine Learning
  {
    id: "claude-chatgpt",
    name: "Claude & ChatGPT",
    category: "AI & Machine Learning",
    logo: "/assets/skill-logos/ai-logo.svg",
    emoji: "🤖",
    color: "#10A37F", // OpenAI green
    officialLink: "https://www.anthropic.com/claude",
    portfolioLinks: [
      { name: "AI Integration Project", url: "https://github.com/username/ai-integration" },
      { name: "Research Assistant Tool", url: "https://github.com/username/research-assistant" },
      { name: "Automated Documentation", url: "https://github.com/username/auto-docs" }
    ],
    description: "Advanced AI assistants used for research, content creation, and problem-solving."
  },
  {
    id: "ollama",
    name: "Ollama",
    category: "AI & Machine Learning",
    logo: "/assets/skill-logos/ollama-logo.svg",
    emoji: "🦙",
    color: "#FF5A5A", // Ollama red
    officialLink: "https://ollama.com/",
    portfolioLinks: [
      { name: "Local AI Setup", url: "https://github.com/username/local-ai" },
      { name: "Model Deployment", url: "https://github.com/username/model-deployment" },
      { name: "Custom Applications", url: "https://github.com/username/custom-ai-apps" }
    ],
    description: "Tool for running open-source large language models locally on personal computers."
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    category: "AI & Machine Learning",
    logo: "/assets/skill-logos/lm-studio-logo.svg",
    emoji: "🧠",
    color: "#6366F1", // Indigo
    officialLink: "https://lmstudio.ai/",
    portfolioLinks: [
      { name: "Model Fine-tuning", url: "https://github.com/username/model-finetuning" },
      { name: "AI Experimentation", url: "https://github.com/username/ai-experiments" },
      { name: "Local LLM Setup", url: "https://github.com/username/local-llm" }
    ],
    description: "Desktop application for running local large language models with a user-friendly interface."
  },
  {
    id: "jupyter",
    name: "Jupyter Notebooks",
    category: "AI & Machine Learning",
    logo: "/assets/skill-logos/jupyter-logo.svg",
    emoji: "📓",
    color: "#F37626", // Jupyter orange
    officialLink: "https://jupyter.org/",
    portfolioLinks: [
      { name: "Data Analysis", url: "https://github.com/EncryptedVoid/Machine-Learning-Experimenting" },
      { name: "ML Prototyping", url: "https://github.com/username/ml-prototypes" },
      { name: "Research Documentation", url: "https://github.com/username/research-docs" }
    ],
    description: "Interactive computing environment for creating and sharing documents with live code and visualizations."
  },

  // 3D Printing & Design
  {
    id: "ultimaker-cura",
    name: "Ultimaker Cura",
    category: "3D Printing & Design",
    logo: "/assets/skill-logos/ultimaker-logo.svg",
    emoji: "🖨️",
    color: "#00AEEF", // Ultimaker blue
    officialLink: "https://ultimaker.com/software/ultimaker-cura",
    portfolioLinks: [
      { name: "3D Print Projects", url: "https://github.com/username/3d-prints" },
      { name: "Custom Slicing Profiles", url: "https://github.com/username/cura-profiles" },
      { name: "Print Optimization", url: "https://github.com/username/print-optimization" }
    ],
    description: "Slicing software for 3D printers, preparing 3D models for printing with custom settings."
  },
  {
    id: "tinkercad",
    name: "TinkerCAD",
    category: "3D Printing & Design",
    logo: "/assets/skill-logos/tinkercad-logo.svg",
    emoji: "✏️",
    color: "#01B0F0", // TinkerCAD blue
    officialLink: "https://www.tinkercad.com/",
    portfolioLinks: [
      { name: "3D Designs", url: "https://github.com/username/tinkercad-designs" },
      { name: "Educational Models", url: "https://github.com/username/educational-models" },
      { name: "Simple Prototypes", url: "https://github.com/username/simple-prototypes" }
    ],
    description: "Browser-based 3D design program for creating models suitable for 3D printing."
  },
  {
    id: "creality-ender3",
    name: "Creality Ender 3",
    category: "3D Printing & Design",
    logo: "/assets/skill-logos/creality-logo.svg",
    emoji: "🔩",
    color: "#FAAC18", // Creality yellow
    officialLink: "https://www.creality.com/products/ender-3-3d-printer",
    portfolioLinks: [
      { name: "Printer Mods", url: "https://github.com/username/printer-mods" },
      { name: "Print Gallery", url: "https://github.com/username/print-gallery" },
      { name: "Hardware Projects", url: "https://github.com/username/hardware-projects" }
    ],
    description: "Popular FDM 3D printer platform for creating physical objects from digital designs."
  },

  // Operating Systems & Command Line
  {
    id: "ubuntu",
    name: "Ubuntu",
    category: "Operating Systems & Command Line",
    logo: "/assets/skill-logos/ubuntu-logo.svg",
    emoji: "🐧",
    color: "#E95420", // Ubuntu orange
    officialLink: "https://ubuntu.com/",
    portfolioLinks: [
      { name: "Server Setup", url: "https://github.com/username/ubuntu-server" },
      { name: "Development Environment", url: "https://github.com/username/ubuntu-dev" },
      { name: "System Automation", url: "https://github.com/username/ubuntu-automation" }
    ],
    description: "Linux distribution based on Debian, widely used for development and server environments."
  },

  // Productivity & Collaboration Tools
  {
    id: "microsoft-sharepoint",
    name: "Microsoft SharePoint",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/sharepoint-logo.svg",
    emoji: "📊",
    color: "#038387", // SharePoint teal
    officialLink: "https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration",
    portfolioLinks: [
      { name: "Document Management", url: "https://private-repo-example.com/sharepoint-docs" },
      { name: "Team Collaboration", url: "https://private-repo-example.com/sharepoint-collab" },
      { name: "Workflow Automation", url: "https://private-repo-example.com/sharepoint-workflow" }
    ],
    description: "Web-based collaborative platform integrated with Microsoft Office for document management."
  },
  {
    id: "microsoft-suite",
    name: "Microsoft Suite",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/microsoft-logo.svg",
    emoji: "📝",
    color: "#0078D4", // Microsoft blue
    officialLink: "https://www.microsoft.com/en-us/microsoft-365",
    portfolioLinks: [
      { name: "Office Automation", url: "https://github.com/username/office-automation" },
      { name: "Document Templates", url: "https://github.com/username/document-templates" },
      { name: "Data Analysis", url: "https://github.com/username/excel-analysis" }
    ],
    description: "Suite of productivity applications including Word, Excel, PowerPoint, and OneDrive."
  },
  {
    id: "google-suite",
    name: "Google Suite",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/google-workspace-logo.svg",
    emoji: "📈",
    color: "#4285F4", // Google blue
    officialLink: "https://workspace.google.com/",
    portfolioLinks: [
      { name: "Collaborative Documents", url: "https://github.com/username/gdocs-collaboration" },
      { name: "Data Management", url: "https://github.com/username/gsheets-data" },
      { name: "Workflow Integration", url: "https://github.com/username/google-workflow" }
    ],
    description: "Cloud-based productivity tools including Docs, Sheets, Slides, and Drive for collaborative work."
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/notion-logo.svg",
    emoji: "📔",
    color: "#000000", // Notion black
    officialLink: "https://www.notion.so/",
    portfolioLinks: [
      { name: "Project Tracking", url: "https://private-repo-example.com/notion-projects" },
      { name: "Knowledge Base", url: "https://private-repo-example.com/notion-kb" },
      { name: "Documentation System", url: "https://private-repo-example.com/notion-docs" }
    ],
    description: "All-in-one workspace for notes, tasks, wikis, and databases with customizable templates."
  },
  {
    id: "dayforce",
    name: "Dayforce",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/dayforce-logo.svg",
    emoji: "⏰",
    color: "#1B75BB", // Dayforce blue
    officialLink: "https://www.ceridian.com/products/dayforce",
    portfolioLinks: [
      { name: "Time Management", url: "https://private-repo-example.com/dayforce-time" },
      { name: "HR Coordination", url: "https://private-repo-example.com/dayforce-hr" },
      { name: "Team Scheduling", url: "https://private-repo-example.com/dayforce-schedule" }
    ],
    description: "Human capital management platform for workforce management and HR administration."
  },
  {
    id: "workday",
    name: "Workday",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/workday-logo.svg",
    emoji: "📆",
    color: "#0875E1", // Workday blue
    officialLink: "https://www.workday.com/",
    portfolioLinks: [
      { name: "HR Management", url: "https://private-repo-example.com/workday-hr" },
      { name: "Financial Planning", url: "https://private-repo-example.com/workday-finance" },
      { name: "Resource Allocation", url: "https://private-repo-example.com/workday-resources" }
    ],
    description: "Cloud-based platform for financial management, HR, and enterprise planning."
  },
  {
    id: "figma",
    name: "Figma",
    category: "Productivity & Collaboration Tools",
    logo: "/assets/skill-logos/figma-logo.svg",
    emoji: "🎨",
    color: "#F24E1E", // Figma orange
    officialLink: "https://www.figma.com/",
    portfolioLinks: [
      { name: "UI Design", url: "https://private-repo-example.com/figma-ui" },
      { name: "Design System", url: "https://private-repo-example.com/figma-system" },
      { name: "Prototyping", url: "https://private-repo-example.com/figma-prototype" }
    ],
    description: "Collaborative interface design tool for creating websites, applications, and design systems."
  },

  // Testing & Quality Assurance
  {
    id: "pytest",
    name: "PyTest",
    category: "Testing & Quality Assurance",
    logo: "/assets/skill-logos/pytest-logo.svg",
    emoji: "🧪",
    color: "#009fe3", // PyTest blue
    officialLink: "https://docs.pytest.org/",
    portfolioLinks: [
      { name: "Test Framework", url: "https://github.com/username/pytest-framework" },
      { name: "Automated Testing", url: "https://github.com/username/automated-tests" },
      { name: "QA Pipeline", url: "https://github.com/username/qa-pipeline" }
    ],
    description: "Python testing framework used for unit tests and functional test automation."
  },
  {
    id: "lcov-gcov",
    name: "LCOV/GCOV",
    category: "Testing & Quality Assurance",
    logo: "/assets/skill-logos/lcov-logo.svg",
    emoji: "📊",
    color: "#C70D3A", // Coverage red
    officialLink: "https://github.com/linux-test-project/lcov",
    portfolioLinks: [
      { name: "Code Coverage", url: "https://github.com/username/code-coverage" },
      { name: "Quality Metrics", url: "https://github.com/username/quality-metrics" },
      { name: "Testing Standards", url: "https://github.com/username/testing-standards" }
    ],
    description: "Code coverage measurement tools for C/C++ development and quality assurance."
  },

  // Media & Content Creation
  {
    id: "obs",
    name: "OBS",
    category: "Media & Content Creation",
    logo: "/assets/skill-logos/obs-logo.svg",
    emoji: "🎬",
    color: "#302E31", // OBS dark gray
    officialLink: "https://obsproject.com/",
    portfolioLinks: [
      { name: "Streaming Setup", url: "https://github.com/username/streaming-setup" },
      { name: "Recording Projects", url: "https://github.com/username/recording-projects" },
      { name: "Video Production", url: "https://github.com/username/video-production" }
    ],
    description: "Open-source software for video recording and live streaming with advanced features."
  },

  // Technical Documentation & Writing
  {
    id: "test-plan-writing",
    name: "Test Plan Writing",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/documentation-logo.svg",
    emoji: "📝",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.istqb.org/",
    portfolioLinks: [
      { name: "QA Test Plans", url: "https://private-repo-example.com/test-plans" },
      { name: "Testing Strategy", url: "https://private-repo-example.com/testing-strategy" },
      { name: "Quality Assurance", url: "https://private-repo-example.com/qa-documentation" }
    ],
    description: "Creating comprehensive plans outlining testing scope, approach, resources, and schedule."
  },
  {
    id: "test-specification-writing",
    name: "Test Specification Writing",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/specification-logo.svg",
    emoji: "📋",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.istqb.org/",
    portfolioLinks: [
      { name: "Test Cases", url: "https://private-repo-example.com/test-cases" },
      { name: "Test Procedures", url: "https://private-repo-example.com/test-procedures" },
      { name: "Test Documentation", url: "https://private-repo-example.com/test-docs" }
    ],
    description: "Developing detailed test specifications with test cases, procedures, and expected results."
  },
  {
    id: "test-report-writing",
    name: "Test Report Writing",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/reporting-logo.svg",
    emoji: "📊",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.istqb.org/",
    portfolioLinks: [
      { name: "Test Results", url: "https://private-repo-example.com/test-results" },
      { name: "Quality Metrics", url: "https://private-repo-example.com/quality-metrics" },
      { name: "Bug Reporting", url: "https://private-repo-example.com/bug-reports" }
    ],
    description: "Documenting test results, defects, and recommendations in comprehensive test reports."
  },
  {
    id: "project-estimation",
    name: "Project Estimation",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/estimation-logo.svg",
    emoji: "⏱️",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.pmi.org/",
    portfolioLinks: [
      { name: "Time Estimation", url: "https://private-repo-example.com/time-estimation" },
      { name: "Resource Planning", url: "https://private-repo-example.com/resource-planning" },
      { name: "Cost Analysis", url: "https://private-repo-example.com/cost-analysis" }
    ],
    description: "Creating accurate project estimates for time, resources, and costs in technical documentation."
  },
  {
    id: "project-handover",
    name: "Project Handover Manuals",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/handover-logo.svg",
    emoji: "🤝",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.pmi.org/",
    portfolioLinks: [
      { name: "Knowledge Transfer", url: "https://private-repo-example.com/knowledge-transfer" },
      { name: "Transition Documentation", url: "https://private-repo-example.com/transition-docs" },
      { name: "Project Continuity", url: "https://private-repo-example.com/project-continuity" }
    ],
    description: "Developing comprehensive documentation for smooth project transitions between teams."
  },
  {
    id: "project-documentation",
    name: "Project Documentation",
    category: "Technical Documentation & Writing",
    logo: "/assets/skill-logos/project-docs-logo.svg",
    emoji: "📚",
    color: "#6CA0DC", // Documentation blue
    officialLink: "https://www.pmi.org/",
    portfolioLinks: [
      { name: "Technical Guides", url: "https://private-repo-example.com/technical-guides" },
      { name: "User Manuals", url: "https://private-repo-example.com/user-manuals" },
      { name: "System Documentation", url: "https://private-repo-example.com/system-docs" }
    ],
    description: "Creating comprehensive project documentation including user guides and technical specifications."
  }
];

// Group skills by category for easy organization
export const getSkillsByCategory = () => {
  const categories = {};

  skillsData.forEach(skill => {
    if (!categories[skill.category]) {
      categories[skill.category] = [];
    }
    categories[skill.category].push(skill);
  });

  return categories;
};

export default skillsData;