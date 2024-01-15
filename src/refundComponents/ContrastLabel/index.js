import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const ContrastLabel = ({label, style}) => {
  return (
    <View style={[styles.container, style]}>
      <AppText size="large" variant="semiBold">
        {label ?? 'Victor Hugo Prando da Silva'}
      </AppText>
    </View>
  );
};

export default ContrastLabel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 10,
  },
});
