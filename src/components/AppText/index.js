import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppText = ({
  variant = 'normal',
  size = 'normal',
  color = '#333',
  children,
  style,
}) => {
  const sizes = {
    small: 12,
    normal: 14,
    large: 16,
    xlarge: 18,
    xxlarge: 20,
    huge: 24,
    xhuge: 28,
  };
  const variants = {
    normal: 'normal',
    semiBold: '500',
    bold: '700',
  };
  const styles = StyleSheet.create({
    text: {fontSize: sizes[size], fontWeight: variants[variant], color},
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;