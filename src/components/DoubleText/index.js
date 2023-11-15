import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';

const index = ({label, value}) => {
  const showLabel = true;
  const showValue = true;
  return (
    <View>
      <AppText>{label}</AppText>
      <AppText>{label && value ? value : label ? label : value}</AppText>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
