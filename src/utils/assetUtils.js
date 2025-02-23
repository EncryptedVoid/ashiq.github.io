// src/utils/assetUtils.js
export const getAssetPath = (filename) => {
  return `/assets/${filename}`;
};

export const getCertificationPath = (filename) => {
  return `/assets/certifications/${filename}`;
};

export const getProjectPath = (filename) => {
  return `/assets/projects/${filename}`;
};

export default {
  getAssetPath,
  getCertificationPath,
  getProjectPath
};