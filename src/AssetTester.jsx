// AssetTester.jsx
import React, { useEffect, useState } from 'react';
import { getAssetPath, getCertificationPath } from '@utils/assetUtils';

const AssetTester = () => {
  const [paths, setPaths] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Generate paths
    const testPaths = {
      certificate: getAssetPath('certifications/DOCKER-FOR-BEGINNERS.pdf'),
      logo: getAssetPath('logo/qnx-logo.webp'),
      profilePic: getAssetPath('pfp.jpg'),
      resume: getAssetPath('resume.pdf'),
      courseBanner: getAssetPath('course-thumbnails/year1/computing-1-thumbnail.webp')
    };

    setPaths(testPaths);

    // Test image loading
    const testImage = (path, key) => {
      const img = new Image();
      img.onload = () => console.log(`Successfully loaded: ${key}`);
      img.onerror = () => {
        console.error(`Failed to load: ${key}`);
        setErrors(prev => ({ ...prev, [key]: true }));
      };
      img.src = path;
    };

    testImage(testPaths.logo, 'logo');
    testImage(testPaths.profilePic, 'profilePic');
    testImage(testPaths.courseBanner, 'courseBanner');

  }, []);

  return (
    <div className="p-8 bg-white/5 rounded-lg mt-8">
      <h2 className="text-xl font-bold mb-4">Asset Path Tester</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Generated Paths:</h3>
          <pre className="bg-black/20 p-4 rounded overflow-auto text-sm">
            {JSON.stringify(paths, null, 2)}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Test Images:</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="mb-2">Logo:</p>
              <img
                src={paths.logo}
                alt="Logo"
                className={`w-32 h-32 object-contain border ${errors.logo ? 'border-red-500' : 'border-white/10'}`}
              />
              {errors.logo && <p className="text-red-500 text-sm mt-1">Failed to load</p>}
            </div>

            <div>
              <p className="mb-2">Profile Picture:</p>
              <img
                src={paths.profilePic}
                alt="Profile"
                className={`w-32 h-32 object-cover border ${errors.profilePic ? 'border-red-500' : 'border-white/10'}`}
              />
              {errors.profilePic && <p className="text-red-500 text-sm mt-1">Failed to load</p>}
            </div>

            <div>
              <p className="mb-2">Course Banner:</p>
              <img
                src={paths.courseBanner}
                alt="Course Banner"
                className={`w-32 h-32 object-cover border ${errors.courseBanner ? 'border-red-500' : 'border-white/10'}`}
              />
              {errors.courseBanner && <p className="text-red-500 text-sm mt-1">Failed to load</p>}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">PDF Links:</h3>
          <div className="space-y-2">
            <a
              href={paths.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30"
            >
              Open Certificate PDF
            </a>

            <a
              href={paths.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30"
            >
              Open Resume PDF
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Browser Path Info:</h3>
          <div className="bg-black/20 p-4 rounded text-sm space-y-1">
            <p>Public URL: {process.env.PUBLIC_URL || '(not set)'}</p>
            <p>Window Location: {window.location.href}</p>
            <p>Base URL: {document.baseURI}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetTester;