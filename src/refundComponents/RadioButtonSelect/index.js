import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconSelect from '../IconSelect';
import AppText from '../../components/AppText';

const RadioButtonSelect = ({
  label,
  style,
  onPressText,
  disabled,
  isSelected,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPressText}
      style={[styles.containerRadioSelect, style]}>
      <View style={styles.containerRadioSelect}>
        <IconSelect showHideSelect={isSelected} />
        <View style={styles.containerText}>
          <AppText size="large">{label ?? 'Texto'}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButtonSelect;

const styles = StyleSheet.create({
  containerRadioSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerText: {marginLeft: 17},
});
