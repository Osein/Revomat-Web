# Workspace Structure

## 📁 Directory Layout

```
Revomat-Web/
├── apps/
│   ├── revomat-web/              # React (CSR) Web Application
│   │   ├── index.html
│   │   ├── src/
│   │   │   ├── App.tsx           # Root component
│   │   │   ├── main.tsx          # Entry point
│   │   │   └── global.css
│   │   ├── package.json          # React 19.0.0
│   │   ├── project.json
│   │   ├── vite.config.mts
│   │   └── tsconfig.json
│   │
│   ├── revomat-app/              # React Native Mobile Application
│   │   ├── src/
│   │   │   └── app/
│   │   │       ├── App.tsx       # Main app with toggle
│   │   │       └── DesignSystemDemo.tsx  # Uses design system
│   │   ├── ios/                  # iOS native code
│   │   ├── android/              # Android native code
│   │   ├── package.json          # React Native version
│   │   ├── metro.config.js
│   │   └── tsconfig.json
│   │
│   └── revomat-web-e2e/          # E2E tests for web app
│
├── libs/
│   └── design-system/            # Shared Design System Library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── design-system.ts    # Theme & types
│       │   │   ├── Button.tsx          # Button component
│       │   │   └── Typography.tsx      # Typography component
│       │   └── index.ts                # Public API
│       ├── dist/                       # Built output
│       ├── package.json                # Peer dep: react >=18.0.0
│       ├── rollup.config.cjs
│       └── tsconfig.json
│
├── package.json                  # Root workspace config
├── nx.json                       # Nx configuration
├── tsconfig.base.json            # Base TypeScript config
└── README.md                     # Documentation
```

## 🔗 Dependency Graph

```
┌─────────────────────┐
│  revomat-web        │
│  (React + Vite + 19) │
└──────────┬──────────┘
           │
           │ imports
           ▼
┌─────────────────────┐
│  design-system      │◄──────────┐
│  (Shared Library)   │           │
└─────────────────────┘           │
           ▲                      │
           │ imports              │
           │                      │
┌──────────┴──────────┐           │
│  revomat-app        │───────────┘
│  (React Native)     │
└─────────────────────┘
```

## 📦 Package-Based Version Management

### Why Package-Based?

This workspace uses a **package-based** approach instead of an integrated approach because:

1. **Different React Versions**: 
   - Web app uses React 19
   - React Native uses its own React version
   - Package-based allows each app to specify its own React version

2. **Independent Dependencies**:
   - Each project has its own `package.json`
   - Projects can upgrade dependencies independently
   - No conflicts between web and mobile dependencies

3. **Flexible Peer Dependencies**:
   - Design system uses `peerDependencies: { "react": ">=18.0.0" }`
   - Works with both React 19 (web) and React Native's version (mobile)

### How It Works

1. **Root Workspace** (`package.json`):
   - Defines npm workspaces: `["apps/*", "libs/*"]`
   - Installs shared devDependencies
   - Links local packages together

2. **Each Project** has its own `package.json`:
   ```json
   // apps/revomat-web/package.json
   {
     "dependencies": {
       "react": "^19.0.0",
       "@revomat/design-system": "*"
     }
   }

   // apps/revomat-app/package.json
   {
     "dependencies": {
       "react": "*",  // Uses React Native's version
       "@revomat/design-system": "*"
     }
   }
   ```

3. **Design System** exports platform-agnostic code:
   - Theme configuration (colors, spacing, typography)
   - Utility functions
   - TypeScript types
   - React components (for web)
   - Pure JS/TS that works in React Native

## 🎨 Design System Usage

### In React (Web)
```typescript
import { Button, Typography, theme } from '@revomat/design-system';

export default function Page() {
  return (
    <>
      <Typography variant="h1">Hello</Typography>
      <Button variant="primary">Click me</Button>
    </>
  );
}
```

### In React Native (Mobile)
```typescript
import { theme, getColor, getSpacing } from '@revomat/design-system';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: getColor('primary'),
    padding: getSpacing('md'),
  }
});
```

## 🚀 Commands

### Build
```bash
# Build design system
nx build design-system

# Build web app
nx run @revomat/revomat-web:build

# Build all
nx run-many -t build
```

### Serve
```bash
# Serve web app
nx run @revomat/revomat-web:dev

# Serve mobile app (web version)
nx serve revomat-app

# Run iOS
nx run-ios revomat-app

# Run Android
nx run-android revomat-app
```

### Test & Lint
```bash
# Test design system
nx test design-system

# Lint all
nx run-many -t lint

# Run affected tests
nx affected -t test
```

### Visualize
```bash
# View project graph
nx graph

# View project details
nx show project @revomat/design-system
```

## ✅ Verification Checklist

- [x] Nx workspace initialized
- [x] React (Vite) app created (`revomat-web`)
- [x] React Native app created (`revomat-app`)
- [x] Design system library created
- [x] Package-based structure configured
- [x] Different React versions working
- [x] Design system imported in both apps
- [x] Design system builds successfully
- [x] Example components created
- [x] Documentation added
