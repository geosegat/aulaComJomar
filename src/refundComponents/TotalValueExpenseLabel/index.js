import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const TotalValueExpenseLabel = ({label, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerFlex}>
        <AppText variant="bold">{label ?? 'TOTAL DE DESPESAS:'}</AppText>
      </View>
      <View style={styles.containerFlex2}>
        <AppText variant="bold">{value ?? 'R$ 560,00'}</AppText>
      </View>
    </View>
  );
};

export default TotalValueExpenseLabel;

const styles = StyleSheet.create({
  container: {backgroundColor: '#eee', padding: 10, flexDirection: 'row'},
  containerFlex: {flex: 2},
  containerFlex2: {flex: 1},
});
