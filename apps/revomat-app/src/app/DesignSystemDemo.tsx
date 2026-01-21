import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { theme, getColor, getSpacing, getFontSize, getBorderRadius } from '@revomat/design-system';

// React Native Button component using design system
interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onPress?: () => void;
}

const DSButton: React.FC<ButtonProps> = ({ title, variant = 'primary', onPress }) => {
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.buttonPrimary,
    variant === 'secondary' && styles.buttonSecondary,
    variant === 'outline' && styles.buttonOutline,
  ];

  const textStyles = [
    styles.buttonText,
    variant === 'outline' && styles.buttonTextOutline,
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

// React Native Typography component using design system
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
  children: React.ReactNode;
  style?: any;
}

const DSTypography: React.FC<TypographyProps> = ({ variant = 'body1', children, style }) => {
  const textStyles = [
    styles.text,
    variant === 'h1' && styles.h1,
    variant === 'h2' && styles.h2,
    variant === 'h3' && styles.h3,
    variant === 'body1' && styles.body1,
    variant === 'body2' && styles.body2,
    style,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export const DesignSystemDemo: React.FC = () => {
  return (
    <View style={styles.container}>
      <DSTypography variant="h1" style={styles.title}>
        Revomat App 📱
      </DSTypography>
      
      <DSTypography variant="body1" style={styles.subtitle}>
        React Native app using the shared design system
      </DSTypography>

      <View style={styles.buttonContainer}>
        <DSButton 
          title="Primary Button" 
          variant="primary" 
          onPress={() => Alert.alert('Primary', 'Primary button pressed!')}
        />
        
        <DSButton 
          title="Secondary Button" 
          variant="secondary" 
          onPress={() => Alert.alert('Secondary', 'Secondary button pressed!')}
        />
        
        <DSButton 
          title="Outline Button" 
          variant="outline" 
          onPress={() => Alert.alert('Outline', 'Outline button pressed!')}
        />
      </View>

      <View style={styles.colorPalette}>
        <DSTypography variant="h3" style={{ marginBottom: getSpacing('md') }}>
          Color Palette
        </DSTypography>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: getColor('primary') }]} />
          <View style={[styles.colorBox, { backgroundColor: getColor('secondary') }]} />
          <View style={[styles.colorBox, { backgroundColor: getColor('success') }]} />
          <View style={[styles.colorBox, { backgroundColor: getColor('danger') }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: getSpacing('lg'),
    backgroundColor: getColor('white'),
  },
  title: {
    marginBottom: getSpacing('sm'),
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: getSpacing('xl'),
    textAlign: 'center',
    color: getColor('dark'),
  },
  buttonContainer: {
    gap: getSpacing('md'),
    marginBottom: getSpacing('xl'),
  },
  button: {
    paddingVertical: getSpacing('md'),
    paddingHorizontal: getSpacing('lg'),
    borderRadius: getBorderRadius('md'),
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: getColor('primary'),
  },
  buttonSecondary: {
    backgroundColor: getColor('secondary'),
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: getColor('primary'),
  },
  buttonText: {
    color: getColor('white'),
    fontSize: getFontSize('md'),
    fontWeight: '600',
  },
  buttonTextOutline: {
    color: getColor('primary'),
  },
  text: {
    color: getColor('dark'),
  },
  h1: {
    fontSize: getFontSize('xxl'),
    fontWeight: '700',
  },
  h2: {
    fontSize: getFontSize('xl'),
    fontWeight: '700',
  },
  h3: {
    fontSize: getFontSize('lg'),
    fontWeight: '600',
  },
  body1: {
    fontSize: getFontSize('md'),
    fontWeight: '400',
  },
  body2: {
    fontSize: getFontSize('sm'),
    fontWeight: '400',
  },
  colorPalette: {
    marginTop: getSpacing('xl'),
  },
  colorRow: {
    flexDirection: 'row',
    gap: getSpacing('md'),
  },
  colorBox: {
    width: 60,
    height: 60,
    borderRadius: getBorderRadius('md'),
  },
});
