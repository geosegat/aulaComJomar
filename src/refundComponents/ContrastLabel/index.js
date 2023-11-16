import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const ContrastLabel = ({label}) => {
  return (
    <View style={styles.container}>
      <AppText size="large" variant="semiBold">
        {label ?? 'Victor Hugo Prando da Silva'}
      </AppText>
    </View>
  );
};

export default ContrastLabel;

const styles = StyleSheet.create({
  container: {backgroundColor: '#eee', padding: 10},
});
