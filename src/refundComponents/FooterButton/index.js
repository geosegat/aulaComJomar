import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const FooterButton = ({
  label,
  onPressButton,
  style,
  showHideButtonOn,
  showHideButtonOff,
}) => {
  return (
    <View>
      {showHideButtonOn && (
        <TouchableOpacity
          onPress={onPressButton}
          style={[styles.containerFooterButton, style]}>
          <AppText color="#fff" variant="bold" size="large">
            {label ?? 'PROSSEGUIR'}
          </AppText>
        </TouchableOpacity>
      )}

      {showHideButtonOff && (
        <View
          onPress={onPressButton}
          style={[styles.containerFooterButtonOff, style]}>
          <AppText color="#fff" variant="bold" size="large">
            {label ?? 'PROSSEGUIR'}
          </AppText>
        </View>
      )}
    </View>
  );
};

export default FooterButton;

const styles = StyleSheet.create({
  containerFooterButton: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    padding: 25,
  },
  containerFooterButtonOff: {
    backgroundColor: '#85a5c7',
    alignItems: 'center',
    padding: 25,
  },
});
