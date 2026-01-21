// Theme configuration
export const theme = {
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

// Button variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

// Typography variants
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: keyof typeof theme.colors;
  align?: 'left' | 'center' | 'right';
}

// Input variants
export interface InputProps {
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
}

// Utility functions
export const getSpacing = (size: keyof typeof theme.spacing): number => {
  return theme.spacing[size];
};

export const getColor = (color: keyof typeof theme.colors): string => {
  return theme.colors[color];
};

export const getFontSize = (size: keyof typeof theme.typography.fontSizes): number => {
  return theme.typography.fontSizes[size];
};

export const getBorderRadius = (size: keyof typeof theme.borderRadius): number => {
  return theme.borderRadius[size];
};
