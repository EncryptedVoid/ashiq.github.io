// src/utils/assetUtils.js
export const getAssetPath = (filename) => {
  // Use process.env.PUBLIC_URL for production builds
  const baseUrl = process.env.PUBLIC_URL || '';
  return `${baseUrl}/assets/${filename}`.replace(/\/+/g, '/');
};

export const getCertificationPath = (filename) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  return `${baseUrl}/assets/certifications/${filename}`.replace(/\/+/g, '/');
};

export const getProjectPath = (filename) => {
  return `/assets/projects/${filename}`;
};

export default {
  getAssetPath,
  getCertificationPath,
  getProjectPath
};