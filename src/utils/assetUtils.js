// Updated assetUtils.js
// src/utils/assetUtils.js
// src/utils/assetUtils.js
export const getAssetPath = (filename) => {
  // Ensure consistent formatting
  const cleanPath = filename.startsWith('/') ? filename.slice(1) : filename;
  return `/assets/${cleanPath}`;
};

export const getProjectPath = (filename) => {
  return getAssetPath(`projects/${filename}`);
};

export const getCertificationPath = (filename) => {
  // Remove "certifications/" if already in the path
  const cleanFilename = filename.includes('certifications/')
    ? filename
    : `certifications/${filename}`;
  return getAssetPath(cleanFilename);
};