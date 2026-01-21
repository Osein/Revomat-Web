export declare const theme: {
    colors: {
        primary: string;
        secondary: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        light: string;
        dark: string;
        white: string;
        black: string;
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        xxl: number;
    };
    typography: {
        fontSizes: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
            xxl: number;
        };
        fontWeights: {
            light: string;
            regular: string;
            medium: string;
            semibold: string;
            bold: string;
        };
    };
    borderRadius: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
        full: number;
    };
};
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    fullWidth?: boolean;
}
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
export interface TypographyProps {
    variant?: TypographyVariant;
    color?: keyof typeof theme.colors;
    align?: 'left' | 'center' | 'right';
}
export interface InputProps {
    error?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    placeholder?: string;
}
export declare const getSpacing: (size: keyof typeof theme.spacing) => number;
export declare const getColor: (color: keyof typeof theme.colors) => string;
export declare const getFontSize: (size: keyof typeof theme.typography.fontSizes) => number;
export declare const getBorderRadius: (size: keyof typeof theme.borderRadius) => number;
//# sourceMappingURL=design-system.d.ts.map