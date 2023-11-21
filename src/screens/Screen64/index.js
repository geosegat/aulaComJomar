import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import DashedButton from '../../refundComponents/DashedButton';
import App from '../../../App';
import AppText from '../../components/AppText';
import BankAccountCard from '../../refundComponents/BankAccountCard';

const Screen64 = () => {
  return (
    <View>
      <Navbar label={'Dados bancários'} etapaInicio={'2'} etapaFim={'3'} />
      <DashedButton label={'+ ADICIONAR NOVA CONTA'} />
      <AppText>Contas cadastradas</AppText>
      <BankAccountCard
        showSetaIcon
        style={{backgroundColor: 'rgba(9, 73, 143, 0.1)'}}
      />
    </View>
  );
};

export default Screen64;

const styles = StyleSheet.create({});
