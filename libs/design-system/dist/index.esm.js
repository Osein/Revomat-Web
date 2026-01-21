import React from 'react';

// Theme configuration
const theme = {
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
        black: '#000000'
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xxl: 48
    },
    typography: {
        fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 24,
            xxl: 32
        },
        fontWeights: {
            light: '300',
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700'
        }
    },
    borderRadius: {
        sm: 4,
        md: 8,
        lg: 12,
        xl: 16,
        full: 9999
    }
};
// Utility functions
const getSpacing = (size)=>{
    return theme.spacing[size];
};
const getColor = (color)=>{
    return theme.colors[color];
};
const getFontSize = (size)=>{
    return theme.typography.fontSizes[size];
};
const getBorderRadius = (size)=>{
    return theme.borderRadius[size];
};

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

const Button = ({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, children, onClick })=>{
    const getButtonStyles = ()=>{
        const baseStyles = {
            padding: size === 'sm' ? '8px 16px' : size === 'lg' ? '16px 32px' : '12px 24px',
            fontSize: size === 'sm' ? theme.typography.fontSizes.sm : size === 'lg' ? theme.typography.fontSizes.lg : theme.typography.fontSizes.md,
            fontWeight: theme.typography.fontWeights.semibold,
            borderRadius: theme.borderRadius.md,
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            width: fullWidth ? '100%' : 'auto',
            transition: 'all 0.2s ease'
        };
        const variantStyles = {
            primary: {
                backgroundColor: theme.colors.primary,
                color: theme.colors.white
            },
            secondary: {
                backgroundColor: theme.colors.secondary,
                color: theme.colors.white
            },
            outline: {
                backgroundColor: 'transparent',
                color: theme.colors.primary,
                border: `2px solid ${theme.colors.primary}`
            },
            ghost: {
                backgroundColor: 'transparent',
                color: theme.colors.primary
            }
        };
        return _extends({}, baseStyles, variantStyles[variant]);
    };
    return /*#__PURE__*/ React.createElement("button", {
        style: getButtonStyles(),
        onClick: onClick,
        disabled: disabled
    }, children);
};

const Typography = ({ variant = 'body1', color = 'dark', align = 'left', children })=>{
    const getTypographyStyles = ()=>{
        const variantStyles = {
            h1: {
                fontSize: theme.typography.fontSizes.xxl,
                fontWeight: theme.typography.fontWeights.bold,
                lineHeight: 1.2
            },
            h2: {
                fontSize: theme.typography.fontSizes.xl,
                fontWeight: theme.typography.fontWeights.bold,
                lineHeight: 1.3
            },
            h3: {
                fontSize: theme.typography.fontSizes.lg,
                fontWeight: theme.typography.fontWeights.semibold,
                lineHeight: 1.4
            },
            h4: {
                fontSize: theme.typography.fontSizes.md,
                fontWeight: theme.typography.fontWeights.semibold,
                lineHeight: 1.5
            },
            h5: {
                fontSize: theme.typography.fontSizes.sm,
                fontWeight: theme.typography.fontWeights.semibold,
                lineHeight: 1.5
            },
            h6: {
                fontSize: theme.typography.fontSizes.xs,
                fontWeight: theme.typography.fontWeights.semibold,
                lineHeight: 1.5
            },
            body1: {
                fontSize: theme.typography.fontSizes.md,
                fontWeight: theme.typography.fontWeights.regular,
                lineHeight: 1.6
            },
            body2: {
                fontSize: theme.typography.fontSizes.sm,
                fontWeight: theme.typography.fontWeights.regular,
                lineHeight: 1.6
            },
            caption: {
                fontSize: theme.typography.fontSizes.xs,
                fontWeight: theme.typography.fontWeights.regular,
                lineHeight: 1.4
            }
        };
        return _extends({}, variantStyles[variant], {
            color: theme.colors[color],
            textAlign: align,
            margin: 0
        });
    };
    const Tag = variant.startsWith('h') ? variant : 'p';
    return /*#__PURE__*/ React.createElement(Tag, {
        style: getTypographyStyles()
    }, children);
};

export { Button, Typography, getBorderRadius, getColor, getFontSize, getSpacing, theme };
