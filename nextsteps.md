Based on these symptoms, here are the specific areas to check:

Media Query Hook Implementation:

typescriptCopy// src/hooks/useMedia.js
- Check initial state value (should maybe be true for mobile widths)
- Verify the media query string format
- Add a log in the effect to see if the listener is firing

Breakpoint Consistency:

typescriptCopy// Places to check width values:
- useMedia hook default breakpoint (768px)
- Tailwind config breakpoints
- Any hardcoded media queries in CSS
- Component-specific breakpoint values

Viewport Meta Tag:

htmlCopy// public/index.html
<meta name="viewport" content="width=device-width, initial-scale=1" />

Navigation State:

typescriptCopy// src/features/navigation/Navigation.desktop.jsx
- Log section offsetTop values
- Log scroll position calculations
- Verify section IDs match exactly

Asset Loading Path:

typescriptCopy// src/utils/assetUtils.js
- Check actual file paths match getAssetPath output
- Verify public folder structure
- Check network tab for 404s

Component Loading:

typescriptCopy// Various component index.js files
- Add console.log at top level
- Log props being passed
- Check import/export paths

Bundle Analysis:

typescriptCopy// webpack/build output
- Check if mobile components are being included in bundle
- Look for tree-shaking issues

React Component Mounting:

typescriptCopy// Components using media queries
- Add useEffect with empty deps to log mount
- Check if components are mounting multiple times

Environment Variables:

typescriptCopy// .env and build config
- Check NODE_ENV
- Verify PUBLIC_URL if using

Event Listeners:

typescriptCopy// Media query listeners
- Check if they're being properly cleaned up
- Verify event registration timing
Most Likely Issues:

Media query hook not detecting mobile correctly
Asset paths not resolving properly
Navigation scroll calculations off
Component mounting order issues

Next Steps:

Add logging to useMedia hook
Check network tab for asset 404s
Verify section measurements
Test component mounting sequence