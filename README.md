| File/Folder             | Purpose                                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| **App.tsx**             | Main page + routing (`/` → HomePage, `/analyze/:soundName` → SoundAnalysisPage).                |
| **index.css**           | Only Tailwind imports (`@tailwind base; @tailwind components; @tailwind utilities;`).           |
| **components/**         | All components in one folder for simplicity. No nested folders.                                 |
| **utils/audioUtils.ts** | Tiny helpers for loading audio, handling mic input, or data conversions.                        |
| **public/**             | Store all native sound files for analysis.                                                      |
| **package.json**        | Project dependencies (React, Tailwind, TypeScript, react-router-dom, wavesurfer.js, plotly.js). |
