import React from 'react';
import { theme, ButtonProps } from './design-system';

export const Button: React.FC<ButtonProps & { children: React.ReactNode; onClick?: () => void }> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
}) => {
  const getButtonStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
      fontSize: size === 'sm' ? theme.typography.fontSizes.sm : size === 'lg' ? theme.typography.fontSizes.lg : theme.typography.fontSizes.md,
      fontWeight: theme.typography.fontWeights.semibold,
      borderRadius: theme.borderRadius.md,
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? '100%' : 'auto',
      transition: 'all 0.2s ease',
    };

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.white,
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.white,
      },
      outline: {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
        border: `2px solid ${theme.colors.primary}`,
      },
      ghost: {
        backgroundColor: 'transparent',
        color: theme.colors.primary,
      },
    };

    return { ...baseStyles, ...variantStyles[variant] };
  };

  return (
    <button style={getButtonStyles()} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
