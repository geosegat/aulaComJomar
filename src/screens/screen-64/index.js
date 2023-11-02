import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Navbar from '../../components/Navbar';
import BotaoAddConta from '../../components/BotaoAddConta';
import AppText from '../../components/AppText';
import CardCadastrais from '../../components/CardCadastrais';

const Screen64 = () => {
  return (
    <View>
      <View style={styles.marginBotNavBar}>
        <Navbar label={'Dados bancários'} />
      </View>
      <View style={styles.marginButtonAddConta}>
        <BotaoAddConta />
      </View>
      <View style={styles.containeHeaderCard}>
        <View style={styles.marginCard}>
          <AppText size="xxlarge" variant="semiBold">
            Contas cadastradas
          </AppText>
        </View>
        <View style={styles.marginCard}>
          <CardCadastrais
            labelHeader={'Banco do Brasil'}
            labelName={'Victor Hugo Prando da Silva'}
            labelAg={'0070'}
            labelCc={'232323'}
          />
        </View>
        <View style={styles.marginCard}>
          <CardCadastrais />
        </View>

        <CardCadastrais />
      </View>
    </View>
  );
};

export default Screen64;

const styles = StyleSheet.create({
  marginBotNavBar: {marginBottom: 20},
  marginButtonAddConta: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  containeHeaderCard: {marginHorizontal: 15},
  marginCard: {marginBottom: 10},
});
