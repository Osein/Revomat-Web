# Revomat Workspace

A package-based Nx monorepo containing web and mobile applications with a shared design system.

## 📦 Projects

### Applications

- **revomat-web** - React (CSR) web application (Vite + React 19)
  - Location: `apps/revomat-web`
  - Framework: React + Vite
  - React Version: 19.0.0

- **revomat-app** - React Native mobile application
  - Location: `apps/revomat-app`
  - Framework: React Native
  - React Version: Latest (from React Native)

### Libraries

- **design-system** - Shared design system library
  - Location: `libs/design-system`
  - Contains: Theme configuration, utility functions, and reusable components
  - Used by both web and mobile apps

## 🏗️ Architecture

This workspace uses a **package-based** approach, which means:
- Each project has its own `package.json`
- Projects can have different versions of dependencies (e.g., different React versions)
- Dependencies are managed via npm workspaces
- The design system is imported as `@revomat/design-system` in both apps

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Build the Design System

```bash
nx build design-system
```

### Run Applications

#### Web Application (React + Vite)
```bash
nx run @revomat/revomat-web:dev
```

Visit http://localhost:3000

#### Mobile Application (React Native)

For iOS:
```bash
nx run-ios revomat-app
```

For Android:
```bash
nx run-android revomat-app
```

For Web (development):
```bash
nx serve revomat-app
```

## 📚 Design System

The design system provides:

### Theme Configuration
- Colors (primary, secondary, success, danger, etc.)
- Spacing scale (xs, sm, md, lg, xl, xxl)
- Typography (font sizes and weights)
- Border radius values

### Utility Functions
- `getColor(color)` - Get color from theme
- `getSpacing(size)` - Get spacing value
- `getFontSize(size)` - Get font size
- `getBorderRadius(size)` - Get border radius

### Components (Web)
- `Button` - Styled button with variants (primary, secondary, outline, ghost)
- `Typography` - Text component with semantic variants (h1-h6, body1-2, caption)

### Usage in React Native
The design system exports pure TypeScript/JavaScript utilities that work in React Native.
See `apps/revomat-app/src/app/DesignSystemDemo.tsx` for examples.

## 🛠️ Development

### Build All Projects
```bash
nx run-many -t build
```

### Run Tests
```bash
nx test design-system
```

### Lint
```bash
nx run-many -t lint
```

### View Project Graph
```bash
nx graph
```

## 📝 Package Versions

This workspace allows different React versions:
- **revomat-web**: Uses React 19
- **revomat-app**: Uses React version bundled with React Native
- **design-system**: Accepts React >=18.0.0 as peer dependency

This is possible because we use a package-based monorepo structure where each project manages its own dependencies.

## 🔧 Adding New Projects

### Add a new library
```bash
nx g @nx/js:library my-lib --directory=libs/my-lib
```

### Add a new React (Vite) app
```bash
nx g @nx/react:application my-app --directory=apps/my-app --bundler=vite
```

### Add a new React Native app
```bash
nx g @nx/react-native:application my-app --directory=apps/my-app
```

## 📖 Learn More

- [Nx Documentation](https://nx.dev)
- [Vite Documentation](https://vite.dev)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
