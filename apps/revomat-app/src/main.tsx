import { AppRegistry } from 'react-native';
import React from 'react';
import App from './app/App';
import { DesignSystemProvider } from '@revomat/design-system';

const Root = () => (
  <DesignSystemProvider>
    <App />
  </DesignSystemProvider>
);

AppRegistry.registerComponent('RevomatApp', () => Root);
