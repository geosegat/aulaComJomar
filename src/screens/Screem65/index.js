import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExpenseCard from '../../refundComponents/ExpenseCard';
import Navbar from '../../components/Navbar';
import AppText from '../../components/AppText';
import BankAccountCard from '../../refundComponents/BankAccountCard';
import FooterButton from '../../refundComponents/FooterButton';
import CheckTerms from '../../refundComponents/CheckTerms';
import ExpenseDescriptionCard from '../../refundComponents/ExpenseDescriptionCard';

const Screen65 = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Navbar
          label={'Resumo da solicitação'}
          etapaInicio={'3'}
          etapaFim={'3'}
          style={styles.containerMarigin20}
        />
        <View style={styles.containerCards}>
          <AppText size="large" style={styles.containerMarigin10}>
            Victor Hugo Prando da Silva
          </AppText>
          <ExpenseCard style={styles.containerMarigin10} />
          <ExpenseCard style={styles.containerMarigin20} />

          <AppText size="large" style={styles.containerMarigin10}>
            Júlia Rizzi
          </AppText>
          <ExpenseCard />
          <AppText size="large" style={styles.containerMarigin10}>
            Conta bancária
          </AppText>
          <BankAccountCard
            disabled
            showSetaEdit
            style={styles.containerMarigin20}
          />

          <CheckTerms />
        </View>
      </ScrollView>
      <View style={styles.styleButton}>
        <FooterButton showHideButtonOn label={'FINALIZAR'} />
      </View>
    </View>
  );
};

export default Screen65;

const styles = StyleSheet.create({
  container: {backgroundColor: '#F6F6F6'},
  containerCards: {paddingHorizontal: 15},
  containerMarigin10: {marginBottom: 10},
  containerMarigin20: {marginBottom: 20},
  styleButton: {},
});
