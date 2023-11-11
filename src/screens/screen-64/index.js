import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import BotaoAddConta from '../../components/BotaoAddConta';
import AppText from '../../components/AppText';
import BlueCard from '../../components/BlueCard';
import Navbar from '../../components/Navbar';
import App from '../../../App';
import BankAccountCard from '../../components/BankAccountCard';

const Screen64 = () => {
  const accountList = [
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
    {
      bankName: 'Banco do Brasil SA',
      nomeTitular: 'Victor Hugo Prando da Silva',
      agencia: '0070',
      conta: '12099-0',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Navbar label={'Dados bancários'} />
      <View style={styles.contentView}>
        <BotaoAddConta style={styles.botaoAddConta} />
        <AppText style={styles.marginTitle} size="xxlarge" variant="semiBold">
          Contas cadastradas
        </AppText>
        <ScrollView showsVerticalScrollIndicator={false}>
          {accountList.map(a => {
            return (
              <BankAccountCard
                key={Math.random()}
                style={styles.marginCard}
                bankName={a.bankName}
                nomeTitular={a.nomeTitular}
                agencia={a.agencia}
                conta={a.conta}
              />
            );
          })}
          <View />
        </ScrollView>
      </View>
    </View>
  );
};

export default Screen64;

const styles = StyleSheet.create({
  contentView: {padding: 15, flex: 1},
  botaoAddConta: {marginBottom: 20},
  marginButtonAddConta: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  containeHeaderCard: {marginHorizontal: 15},
  marginTitle: {marginBottom: 10},
  marginCard: {marginBottom: 10},
});
