import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DesignSystemProvider } from '@revomat/design-system';
import './global.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <DesignSystemProvider>
      <App />
    </DesignSystemProvider>
  </StrictMode>
);

