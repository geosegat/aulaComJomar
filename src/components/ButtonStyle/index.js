import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const ButtonStyle = ({label, colorButtonStyle, colorText, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, colorButtonStyle]}>
      <AppText color={colorText} variant="bold" size="xlarge">
        {label ?? 'enter'}
      </AppText>
    </TouchableOpacity>
  );
};

export default ButtonStyle;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    borderRadius: 6,
  },
});
