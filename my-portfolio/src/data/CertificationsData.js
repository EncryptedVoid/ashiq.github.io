// src/components/sections/Certifications/CertificationsData.js
export const Certifications = [
    {
      id: 1,
      type: 'aws',
      title: 'AWS Solutions Architect',
      date: 'December 2023',
      level: 'Associate',
      icon: '/images/certs/aws-icon.png',
      image: '/images/certs/aws-cert.png'
    },
    {
      id: 2,
      type: 'gcp',
      title: 'Google Cloud Professional',
      date: 'November 2023',
      level: 'Professional',
      icon: '/images/certs/gcp-icon.png',
      image: '/images/certs/gcp-cert.png'
    },
    {
      id: 3,
      type: 'azure',
      title: 'Azure Solutions Architect',
      date: 'October 2023',
      level: 'Expert',
      icon: '/images/certs/azure-icon.png',
      image: '/images/certs/azure-cert.png'
    }
  ];

  export const certStyles = {
    aws: {
      gradient: 'from-[#ff9900] to-[#ffc300]',
      shadow: 'shadow-[#ff9900]/20',
      iconBg: 'bg-[#ff9900]'
    },
    gcp: {
      gradient: 'from-[#4285f4] to-[#34a853]',
      shadow: 'shadow-[#4285f4]/20',
      iconBg: 'bg-[#4285f4]'
    },
    azure: {
      gradient: 'from-[#0078d4] to-[#00bcf2]',
      shadow: 'shadow-[#0078d4]/20',
      iconBg: 'bg-[#0078d4]'
    }
  };

