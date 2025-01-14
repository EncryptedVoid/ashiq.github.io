// src/components/sections/Projects/projectsData.js

export const projectsData = [
    {
    id: 'project-1',
    title: 'AI-Powered Testing Framework',
    description: 'Automated testing framework that uses machine learning to identify high-risk test cases and optimize test execution.',
    image: '/project-images/testing-framework.jpg',
    status: 'Completed',
    duration: '6 months',
    type: 'Professional',
    metrics: {
        testsAutomated: '1500+',
        timeReduction: '60%',
        codeCoverage: '95%'
    },
    technologies: [
        'Python',
        'TensorFlow',
        'Docker',
        'Jenkins',
        'AWS',
        'GitLab CI'
    ],
    features: [
        'ML-based test prioritization',
        'Automated test generation',
        'Real-time monitoring dashboard',
        'Integration with CI/CD pipeline'
    ],
    links: {
        github: 'https://github.com/username/project',
        live: 'https://project-demo.com',
        documentation: 'https://docs.project.com'
    }
    },
    {
    id: 'project-2',
    title: 'Real-Time System Monitor',
    description: 'Distributed system monitoring tool that provides real-time insights into system performance and anomaly detection.',
    image: '/project-images/system-monitor.jpg',
    status: 'In Progress',
    duration: '4 months',
    type: 'Open Source',
    metrics: {
        dataPoints: '1M+/day',
        responseTime: '<100ms',
        accuracy: '99.9%'
    },
    technologies: [
        'Go',
        'React',
        'InfluxDB',
        'Kubernetes',
        'Prometheus',
        'Grafana'
    ],
    features: [
        'Real-time metrics visualization',
        'Predictive anomaly detection',
        'Custom alert configurations',
        'Distributed tracing'
    ],
    links: {
        github: 'https://github.com/username/monitor',
        live: 'https://monitor-demo.com'
    }
    },
    {
    id: 'project-3',
    title: 'Embedded IoT Platform',
    description: 'IoT platform for embedded devices with real-time data processing and remote management capabilities.',
    image: '/project-images/iot-platform.jpg',
    status: 'Completed',
    duration: '8 months',
    type: 'Professional',
    metrics: {
        devices: '500+',
        uptime: '99.99%',
        dataProcessed: '5TB+'
    },
    technologies: [
        'C++',
        'MQTT',
        'AWS IoT',
        'FreeRTOS',
        'ARM',
        'Python'
    ],
    features: [
        'Remote device management',
        'Real-time data processing',
        'Secure OTA updates',
        'Energy optimization'
    ],
    links: {
        documentation: 'https://docs.iot-platform.com'
    }
    }
];

export default projectsData;