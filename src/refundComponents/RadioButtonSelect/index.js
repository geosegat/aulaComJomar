import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconSelect from '../IconSelect';
import AppText from '../../components/AppText';

const RadioButtonSelect = ({label, style, onPress}) => {
  return (
    <View style={[styles.containerRadioSelect, style]}>
      <IconSelect onPressIconNoSelect={onPress} onPressIconSelect={onPress} />
      <View style={styles.containerText}>
        <AppText size="large">{label ?? 'Texto'}</AppText>
      </View>
    </View>
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
