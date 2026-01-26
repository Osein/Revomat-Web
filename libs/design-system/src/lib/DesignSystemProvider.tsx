import React from 'react';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';

type DesignSystemProviderProps = {
  children: React.ReactNode;
};

export const DesignSystemProvider: React.FC<DesignSystemProviderProps> = ({
  children,
}) => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      {children}
    </TamaguiProvider>
  );
};

