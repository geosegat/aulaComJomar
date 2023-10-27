import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';
import BotaoAdd from './svgs/botao-adicionar.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.container2}>
        <TouchableOpacity style={styles.containerBotaoVoltar}>
          <View style={{}}>
            <SvgVoltar width={18} height={18} color="white"></SvgVoltar>
          </View>
          <Text style={styles.fontBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.fontReembolsoCassi}>Reembolso Cassi</Text>
        <TouchableOpacity style={styles.containerBotaoAdicionar}>
          <BotaoAdd width={21} height={21} color="white"></BotaoAdd>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  container2: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    paddingVertical: 10,
  },
  containerBotaoVoltar: {
    flexDirection: 'row',
    position: 'absolute',
    left: 3,
    top: 10,
    alignItems: 'center',
  },
  fontBotaoVoltar: {fontSize: 17, color: '#FFFFFF', fontWeight: '400'},
  fontReembolsoCassi: {fontSize: 17, color: '#FFFFFF', fontWeight: 'bold'},
  containerBotaoAdicionar: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 13,
    alignItems: 'center',
  },
});
