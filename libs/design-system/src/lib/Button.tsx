import React from 'react';
import { Button as TamaguiButton } from 'tamagui';
import { theme, ButtonProps } from './design-system';

type DSButtonProps = ButtonProps & {
  children: React.ReactNode;
  onPress?: () => void;
  onClick?: () => void;
  minHeight?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
};

export const Button: React.FC<DSButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onPress,
  onClick,
  minHeight,
  paddingVertical,
  paddingHorizontal,
}) => {
  const defaultSizeStyles =
    size === 'sm'
      ? { paddingVertical: 8, paddingHorizontal: 16, fontSize: theme.typography.fontSizes.sm, minHeight: 36 }
      : size === 'lg'
        ? { paddingVertical: 16, paddingHorizontal: 32, fontSize: theme.typography.fontSizes.lg, minHeight: 52 }
        : { paddingVertical: 12, paddingHorizontal: 24, fontSize: theme.typography.fontSizes.md, minHeight: 44 };

  const resolvedSizeStyles = {
    ...defaultSizeStyles,
    paddingVertical: paddingVertical ?? defaultSizeStyles.paddingVertical,
    paddingHorizontal: paddingHorizontal ?? defaultSizeStyles.paddingHorizontal,
    minHeight: minHeight ?? defaultSizeStyles.minHeight,
  };

  const variantStyles =
    variant === 'secondary'
      ? { backgroundColor: theme.colors.secondary, color: theme.colors.white }
      : variant === 'outline'
        ? {
            backgroundColor: 'transparent',
            color: theme.colors.primary,
            borderWidth: 2,
            borderColor: theme.colors.primary,
          }
        : variant === 'ghost'
          ? { backgroundColor: 'transparent', color: theme.colors.primary }
          : { backgroundColor: theme.colors.primary, color: theme.colors.white };

  return (
    <TamaguiButton
      {...resolvedSizeStyles}
      {...variantStyles}
      borderRadius={theme.borderRadius.md}
      disabled={disabled}
      opacity={disabled ? 0.5 : 1}
      width={fullWidth ? '100%' : undefined}
      onPress={onPress ?? onClick}
    >
      {children}
    </TamaguiButton>
  );
};
