├── package.json
├── tailwind.config.js
├── src
│   ├── index.css
│   ├── App.tsx
│   ├── types
│   │   └── index.ts
│   ├── config
│   │   └── constants.ts
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ArtistSelection.tsx
│   │   ├── PromptBuilder.tsx
│   │   └── upload
│   │       └── ImageUploader.tsx
│   ├── features
│   │   ├── prompt
│   │   │   ├── types.ts
│   │   │   └── hooks
│   │   │       └── usePromptBuilder.ts
│   │   ├── artists
│   │   │   └── components
│   │   │       └── ArtistSelector.tsx
│   │   └── sketch
│   │       ├── components
│   │       │   ├── SketchWorkspace.tsx
│   │       │   └── SketchPreview.tsx
│   │       └── hooks
│   │           └── useSketchGeneration.ts
│   ├── hooks
│   │   ├── useAuth.ts
│   │   └── useSketchGeneration.ts
│   ├── lib
│   │   └── utils
│   │       └── imageProcessing.ts
│   ├── services
│   │   └── ai
│   │       ├── config.ts
│   │       ├── sketchGenerator.ts
│   │       └── stabilityAI.ts
│   ├── store
│   │   └── useSketchStore.ts
│   └── assets
│       └── logo.svg
└── README.md

// package.json
{
  "name": "skan-vzio",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.3.3",
    "typescript": "^4.9.5",
    "axios": "^1.4.0",
    "zustand": "^4.3.7"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}

// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-nebula-dark text-white;
}

// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtistSelection from './components/ArtistSelection';
import PromptBuilder from './components/PromptBuilder';
import SketchWorkspace from './features/sketch/components/SketchWorkspace';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nebula-background">
      <Navbar />
      <Hero />
      <ArtistSelection />
      <PromptBuilder />
      <SketchWorkspace />
    </div>
  );
};

export default App;

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nebula: {
          dark: '#0C0C1E',
          light: '#1A1A2E',
          accent: '#4B0082',
          primary: '#8A2BE2'
        }
      },
      animation: {
        'logo-pulse': 'pulse 2s infinite',
        'nebula-flow': 'flow 5s linear infinite'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }
    }
  }
}
