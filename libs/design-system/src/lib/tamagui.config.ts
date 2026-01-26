import { createTamagui } from 'tamagui';
import { theme } from './design-system';

const fallbackTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    success: '#34C759',
    danger: '#FF3B30',
    warning: '#FF9500',
    info: '#5AC8FA',
    light: '#F2F2F7',
    dark: '#1C1C1E',
    white: '#FFFFFF',
    black: '#000000',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    fontSizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      xxl: 32,
    },
    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
};

const resolvedTheme = theme ?? fallbackTheme;

const config = createTamagui({
  tokens: {
    color: resolvedTheme.colors,
    space: {
      ...resolvedTheme.spacing,
      true: resolvedTheme.spacing.md,
    },
    radius: resolvedTheme.borderRadius,
    size: {
      sm: resolvedTheme.typography.fontSizes.sm,
      md: resolvedTheme.typography.fontSizes.md,
      true: resolvedTheme.typography.fontSizes.md,
      lg: resolvedTheme.typography.fontSizes.lg,
      xl: resolvedTheme.typography.fontSizes.xl,
    },
    zIndex: {
      sm: 0,
      md: 10,
      true: 10,
      lg: 20,
      xl: 30,
    },
  },
  themes: {
    light: {
      background: resolvedTheme.colors.white,
      color: resolvedTheme.colors.dark,
      primary: resolvedTheme.colors.primary,
      secondary: resolvedTheme.colors.secondary,
    },
    dark: {
      background: resolvedTheme.colors.dark,
      color: resolvedTheme.colors.white,
      primary: resolvedTheme.colors.primary,
      secondary: resolvedTheme.colors.secondary,
    },
  },
});

export default config;
export type AppTamaguiConfig = typeof config;

