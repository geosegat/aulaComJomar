import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const DashedButton = ({label, onPressButton, style}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[styles.containerButton, style]}>
      <AppText variant="semiBold" color="#09498F">
        {label ?? '+ ADICIONAR DESPESA'}
      </AppText>
    </TouchableOpacity>
  );
};

export default DashedButton;

const styles = StyleSheet.create({
  containerButton: {
    padding: 20,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderColor: '#09498F',
    alignItems: 'center',
    borderRadius: 5,
  },
});
