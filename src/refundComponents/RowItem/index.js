import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const RowItem = ({leftLabel, rightLabel, style}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerLeftLabel}>
        <AppText>{leftLabel ?? 'Data do envio'} </AppText>
      </View>
      <AppText color="#555">{rightLabel ?? '20/07/2020'} </AppText>
    </View>
  );
};

export default RowItem;

const styles = StyleSheet.create({
  containerCard: {flexDirection: 'row', padding: 15},
  containerLeftLabel: {flex: 1},
});
