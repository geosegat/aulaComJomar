import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const RowItem = ({
  leftLabel,
  rightLabel,
  style,
  showRightLabel,
  rightLabelStyle,
}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <View style={styles.containerLeftLabel}>
        <AppText>{leftLabel ?? 'Data do envio'} </AppText>
      </View>
      {!showRightLabel && (
        <AppText style={rightLabelStyle} color="#555">
          {rightLabel ?? '20/07/2020'}
        </AppText>
      )}
    </View>
  );
};

export default RowItem;

const styles = StyleSheet.create({
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#DDD',
    borderBottomWidth: 1,
  },
  containerLeftLabel: {flex: 1},
});
