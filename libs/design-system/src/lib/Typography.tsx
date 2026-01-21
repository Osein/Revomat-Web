import React from 'react';
import { theme, TypographyProps } from './design-system';

export const Typography: React.FC<TypographyProps & { children: React.ReactNode }> = ({
  variant = 'body1',
  color = 'dark',
  align = 'left',
  children,
}) => {
  const getTypographyStyles = (): React.CSSProperties => {
    const variantStyles: Record<string, React.CSSProperties> = {
      h1: {
        fontSize: theme.typography.fontSizes.xxl,
        fontWeight: theme.typography.fontWeights.bold,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: theme.typography.fontSizes.xl,
        fontWeight: theme.typography.fontWeights.bold,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: theme.typography.fontSizes.lg,
        fontWeight: theme.typography.fontWeights.semibold,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.semibold,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: theme.typography.fontSizes.sm,
        fontWeight: theme.typography.fontWeights.semibold,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: theme.typography.fontSizes.xs,
        fontWeight: theme.typography.fontWeights.semibold,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: theme.typography.fontSizes.md,
        fontWeight: theme.typography.fontWeights.regular,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: theme.typography.fontSizes.sm,
        fontWeight: theme.typography.fontWeights.regular,
        lineHeight: 1.6,
      },
      caption: {
        fontSize: theme.typography.fontSizes.xs,
        fontWeight: theme.typography.fontWeights.regular,
        lineHeight: 1.4,
      },
    };

    return {
      ...variantStyles[variant],
      color: theme.colors[color],
      textAlign: align,
      margin: 0,
    };
  };

  const Tag = variant.startsWith('h') ? variant : 'p';

  return React.createElement(Tag, { style: getTypographyStyles() }, children);
};
