# 🚀 Quick Start Guide

## What You Have

A complete Nx monorepo with:
- ✅ **revomat-web**: Next.js 16 app with React 19
- ✅ **revomat-app**: React Native app
- ✅ **design-system**: Shared library used by both apps
- ✅ **Package-based version management**: Different React versions working together

## 🏃 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Design System
```bash
nx build design-system
```

### 3. Run Your Apps

#### Web App (Next.js)
```bash
nx serve revomat-web
```
Then open http://localhost:4200

You'll see:
- A welcome page with the design system components
- Three styled buttons (Primary, Secondary, Outline)
- Typography components using the shared theme

#### Mobile App (React Native)

**For Web Preview:**
```bash
nx serve revomat-app
```
Then open http://localhost:4200

**For iOS Simulator:**
```bash
nx run-ios revomat-app
```

**For Android Emulator:**
```bash
nx run-android revomat-app
```

The mobile app includes:
- A toggle button to switch between design system demo and original Nx welcome screen
- Design system demo showing buttons and color palette
- Examples of using theme utilities in React Native

## 🎨 Design System Features

### Theme Configuration
Located in `libs/design-system/src/lib/design-system.ts`:

```typescript
import { theme } from '@revomat/design-system';

// Colors
theme.colors.primary    // #007AFF
theme.colors.secondary  // #5856D6
theme.colors.success    // #34C759
// ... and more

// Spacing
theme.spacing.xs   // 4
theme.spacing.sm   // 8
theme.spacing.md   // 16
// ... and more

// Typography
theme.typography.fontSizes.md    // 16
theme.typography.fontWeights.bold // '700'
```

### Utility Functions
```typescript
import { getColor, getSpacing, getFontSize, getBorderRadius } from '@revomat/design-system';

// Get values from theme
const primaryColor = getColor('primary');
const mediumSpacing = getSpacing('md');
const largeFontSize = getFontSize('lg');
const mediumRadius = getBorderRadius('md');
```

### Web Components (React)
```typescript
import { Button, Typography } from '@revomat/design-system';

<Typography variant="h1">Welcome</Typography>
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

### React Native Usage
```typescript
import { theme, getColor, getSpacing } from '@revomat/design-system';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: getColor('light'),
    padding: getSpacing('lg'),
  },
  text: {
    color: getColor('dark'),
    fontSize: theme.typography.fontSizes.md,
  }
});
```

## 📦 How Package-Based Works

### Different React Versions ✅

**Web App** (`apps/revomat-web/package.json`):
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "next": "~16.0.1"
  }
}
```

**Mobile App** (`apps/revomat-app/package.json`):
```json
{
  "dependencies": {
    "react": "*",
    "react-native": "*"
  }
}
```

**Design System** (`libs/design-system/package.json`):
```json
{
  "peerDependencies": {
    "react": ">=18.0.0"
  }
}
```

This works because:
1. Each project manages its own dependencies
2. Design system uses peer dependencies (flexible version requirement)
3. npm workspaces link packages together
4. No version conflicts!

## 🛠️ Common Tasks

### Add a New Component to Design System
```bash
# Create the component file
touch libs/design-system/src/lib/Card.tsx

# Export it from index
echo "export { Card } from './lib/Card';" >> libs/design-system/src/index.ts

# Rebuild
nx build design-system
```

### View Project Dependencies
```bash
nx graph
```

### Run Tests
```bash
nx test design-system
```

### Lint Code
```bash
nx lint revomat-web
nx lint revomat-app
nx lint design-system
```

### Build Everything
```bash
nx run-many -t build
```

## 📚 File Locations

### Web App Example
- Main page: `apps/revomat-web/src/app/page.tsx`
- Uses: `Button`, `Typography`, `theme` from design system

### Mobile App Example
- Main app: `apps/revomat-app/src/app/App.tsx`
- Demo: `apps/revomat-app/src/app/DesignSystemDemo.tsx`
- Uses: `theme`, `getColor`, `getSpacing`, etc. from design system

### Design System
- Theme: `libs/design-system/src/lib/design-system.ts`
- Button: `libs/design-system/src/lib/Button.tsx`
- Typography: `libs/design-system/src/lib/Typography.tsx`
- Public API: `libs/design-system/src/index.ts`

## 🎯 Next Steps

1. **Customize the theme**: Edit `libs/design-system/src/lib/design-system.ts`
2. **Add more components**: Create new components in `libs/design-system/src/lib/`
3. **Style your apps**: Use the design system in your pages
4. **Add features**: Build out your web and mobile apps
5. **Share code**: Create more shared libraries in `libs/`

## 💡 Tips

- Always build the design system after making changes: `nx build design-system`
- Use `nx graph` to visualize project dependencies
- The design system exports platform-agnostic code that works everywhere
- For React Native, use utility functions instead of React components
- Check `WORKSPACE_STRUCTURE.md` for detailed architecture info

## 🆘 Troubleshooting

### "Cannot find module '@revomat/design-system'"
```bash
# Build the design system first
nx build design-system

# Then reinstall if needed
npm install
```

### "Module not found" in React Native
```bash
# Clear metro cache
nx reset

# Restart the dev server
nx serve revomat-app
```

### TypeScript errors
```bash
# Sync TypeScript project references
nx sync

# Rebuild
nx build design-system
```

## 📖 Documentation

- `README.md` - Overview and getting started
- `WORKSPACE_STRUCTURE.md` - Detailed architecture and structure
- `QUICK_START.md` - This file!

Happy coding! 🎉
