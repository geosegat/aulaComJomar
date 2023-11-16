import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppText from '../../components/AppText';

const ContrastHeader = ({userName, procedureGroup, style}) => {
  return (
    <View style={[styles.containerCard, style]}>
      <AppText size="small" color="#555">
        Beneficiário
      </AppText>
      <AppText color="#555" variant="semiBold">
        {userName ?? 'Victor Hugo Prando da Silva'}
      </AppText>
      <View style={styles.containerProcedureGroup}>
        <AppText size="small" color="#555">
          Grupo de procedimento
        </AppText>
        <AppText color="#555" variant="semiBold">
          {procedureGroup ?? 'Consultas médicas'}
        </AppText>
      </View>
    </View>
  );
};

export default ContrastHeader;

const styles = StyleSheet.create({
  containerCard: {backgroundColor: '#EEE', padding: 15},
  containerProcedureGroup: {marginTop: 10},
});
