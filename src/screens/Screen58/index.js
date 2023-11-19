import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Navbar from '../../components/Navbar';
import RefundCard from '../../refundComponents/RefundCard';
import BankAccountCard from '../../refundComponents/BankAccountCard';
import RowLabel from '../../refundComponents/RowLabel';
import ProcedureGroupCard from '../../refundComponents/ProcedureGroupCard';

const Screen58 = () => {
  const navigation = useNavigation();

  const goToScreen56 = () => {
    navigation.navigate('Screen56', {protocol: '482394829'});
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Navbar
        label={'Resumo da solicitação'}
        etapaInicio={'3'}
        etapaFim={'3'}
        onPressBotaoBack={goToScreen56}
      />
      <View style={styles.containerCards}>
        <RowLabel
          leftLabel={'Dados Solicitação'}
          style={styles.containerMargin10}
        />
        <RefundCard
          protocol={'482394829'}
          style={styles.containerCardDados}
          borderColor={'#888'}
          disabled
        />
        <RowLabel
          leftLabel={'Dados bancários'}
          style={styles.containerMargin10}
        />
        <BankAccountCard style={styles.containerCardDados} />
        <RowLabel
          leftLabel={'Victor Hugo Prando da Silva …'}
          rightLabel={'Total: R$ 560,00'}
          showHideRightLabel
          style={styles.containerMargin10}
        />
        <ProcedureGroupCard style={styles.containerMargin10} />
        <ProcedureGroupCard style={styles.containerCardDados} />
        <RowLabel
          leftLabel={'Júlia Rizzi'}
          rightLabel={'Total: R$ 280,00'}
          showHideRightLabel
          style={styles.containerMargin10}
        />
        <ProcedureGroupCard />
      </View>
    </ScrollView>
  );
};

export default Screen58;

const styles = StyleSheet.create({
  container: {flex: 1},

  containerCards: {
    flex: 1,
    paddingVertical: 19,
    paddingHorizontal: 15,
  },
  containerMargin10: {marginBottom: 10},
  containerCardDados: {marginBottom: 20},
});
