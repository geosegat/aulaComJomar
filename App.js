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
      <View style={styles.marginBot}>
        <Navbar label={'Dados bancários'} labelSub={'Etapa 2 de 3'} />
      </View>
      <View style={{marginHorizontal: 15, marginBottom: 20}}>
        <BotaoAddConta />
      </View>
      <View style={{marginHorizontal: 15}}>
        <View style={{marginBottom: 10}}>
          <AppText size="xxlarge" variant="semiBold">
            Contas cadastradas
          </AppText>
        </View>
        <View style={{marginBottom: 10}}>
          <CardCadastrais />
        </View>
        <CardCadastrais />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  marginBot: {marginBottom: 20},
});
