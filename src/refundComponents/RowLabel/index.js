import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const RowLabel = ({leftLabel, rightLabel, showHideRightLabel, style}) => {
  return (
    <View style={[styles.containerRowLabel, style]}>
      <View style={styles.containerLeftLabel}>
        <AppText size="large" variant="semiBold">
          {leftLabel ?? 'oi'}
        </AppText>
      </View>
      {showHideRightLabel && (
        <View>
          <AppText size="small" variant="semiBold">
            {rightLabel ?? 'Total: R$ 560,00'}
          </AppText>
        </View>
      )}
    </View>
  );
};

export default RowLabel;

const styles = StyleSheet.create({
  containerRowLabel: {flexDirection: 'row', alignItems: 'center'},
  containerLeftLabel: {flex: 1},
});
