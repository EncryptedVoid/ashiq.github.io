// src/ImageTest.jsx
import React from 'react';
import { getAssetPath } from './utils/assetUtils';

const ImageTest = () => {
  // Test with multiple image types
  const images = [
    { path: 'pfp.jpg', name: 'Profile Picture' },
    { path: 'logo/udemy-logo.webp', name: 'Udemy Logo' }
  ];

  return (
    <div className="p-4 m-4 space-y-8 bg-gray-800 rounded-lg">
      {images.map((image, index) => {
        const imagePath = getAssetPath(image.path);

        return (
          <div key={index} className="space-y-2">
            <h3 className="text-white font-bold">{image.name}</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Raw path: {image.path}</p>
              <p>Processed path: {imagePath}</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <img
                src={imagePath}
                alt={image.name}
                className="w-32 h-32 object-contain"
                onError={() => console.error(`Failed to load: ${imagePath}`)}
                onLoad={() => console.log(`Loaded: ${imagePath}`)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageTest;