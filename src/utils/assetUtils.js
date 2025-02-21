// src/utils/assetUtils.js
export const getAssetPath = (path) => {
  if (typeof window !== 'undefined') {
    // Get the base URL from the window location
    const baseUrl = window.location.pathname.includes('/ashiq.github.io')
      ? '/ashiq.github.io'
      : '';

    // Clean the path
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Combine baseUrl and cleanPath
    const finalPath = `${baseUrl}/${cleanPath}`;

    console.log({
      isProduction: process.env.NODE_ENV === 'production',
      baseUrl,
      originalPath: path,
      cleanPath,
      finalPath,
      windowLocation: window.location.pathname
    });

    return finalPath;
  }

  // Fallback for SSR
  return path;
};