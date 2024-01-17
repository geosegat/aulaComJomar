import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../../components/Navbar';
import DashedButton from '../../../refundComponents/DashedButton';
import App from '../../../../App';
import AppText from '../../../components/AppText';
import BankAccountCard from '../../../refundComponents/BankAccountCard';

const Screen64 = () => {
  return (
    <View>
      <Navbar
        label={'Dados bancários'}
        etapaInicio={'2'}
        etapaFim={'3'}
        style={styles.containerMargin20}
      />
      <View style={styles.container}>
        <DashedButton
          label={'+ ADICIONAR NOVA CONTA'}
          style={styles.containerMargin20}
        />
        <AppText
          style={styles.containerMargin10}
          size="xxlarge"
          variant="semiBold">
          Contas cadastradas
        </AppText>
        <BankAccountCard showSetaIcon style={styles.containerCards} />
        <BankAccountCard showSetaIcon style={styles.containerCards} />
      </View>
    </View>
  );
};

export default Screen64;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15},
  containerCards: {
    elevation: 0,
    backgroundColor: 'rgba(9, 73, 143, 0.1)',
    marginBottom: 10,
  },
  containerMargin20: {marginBottom: 20},
  containerMargin10: {marginBottom: 10},
});
