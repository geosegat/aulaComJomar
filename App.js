import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import SvgSeta from './svgs/seta-esquerda.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.containerStatusBar}>
        <TouchableOpacity style={styles.containerButtonVoltar}>
          <SvgSeta width={18} height={18} color="white" />
          <Text style={styles.fontButtonVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.fontDadosBancarios}>Dados Bancários</Text>
        <Text style={styles.fontEtapasText}>Etapa 2 de 3</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'pink'}}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  containerStatusBar: {
    backgroundColor: '#09498F',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  containerButtonVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 5,
    top: 10,
  },
  fontButtonVoltar: {fontSize: 17, color: '#FFF'},
  fontDadosBancarios: {fontSize: 17, color: '#FFF', fontWeight: '500'},
  fontEtapasText: {fontSize: 12, color: '#FFF'},
});
