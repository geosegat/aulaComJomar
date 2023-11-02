import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardDados from './src/components/CardCadastrais/index';
import CardBorder from './src/components/CardWithBorder/index';
import CardCadastrais from './src/components/CardCadastrais/index';
import BotaoAddConta from './src/components/BotaoAddConta/index';
import Navbar from './src/components/Navbar';
import AppText from './src/components/AppText';

const App = () => {
  return (
    <View>
      <View style={styles.marginBotNavBar}>
        <Navbar label={'Dados bancários'} labelSub={'Etapa 2 de 3'} />
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
          <CardCadastrais />
        </View>
        <View style={styles.marginCard}>
          <CardCadastrais />
        </View>
        <CardCadastrais />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  marginBotNavBar: {marginBottom: 20},
  marginButtonAddConta: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  containeHeaderCard: {marginHorizontal: 15},
  marginCard: {marginBottom: 10},
});
