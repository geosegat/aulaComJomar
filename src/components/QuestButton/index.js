import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const QuestButton = ({label, onPress, style, color, isDisabled}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.buttonStyle, style]}
      onPress={onPress}>
      <AppText size="xxxlarge" color={color ?? 'white'}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default QuestButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 12,
    backgroundColor: 'rgba(92.72, 155.12, 163.62, 0.70)',
    alignItems: 'center',
    padding: 15,
  },
});
