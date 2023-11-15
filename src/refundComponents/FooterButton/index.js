import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const FooterButton = ({label, onPressButton, style}) => {
  return (
    <TouchableOpacity
      onPress={onPressButton}
      style={[styles.containerFooterButton, style]}>
      <AppText color="#fff" variant="bold" size="large">
        {label ?? 'PROSSEGUIR'}
      </AppText>
    </TouchableOpacity>
  );
};

export default FooterButton;

const styles = StyleSheet.create({
  containerFooterButton: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    padding: 25,
  },
});
