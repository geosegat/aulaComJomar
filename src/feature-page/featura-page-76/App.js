import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';
import SvgCheck from './svgs/icon-check-green.svg';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.containerStatusBar}>
        <TouchableOpacity style={styles.containerButtonVoltar}>
          <SvgVoltar width={20} height={20} color="white"></SvgVoltar>
          <Text style={styles.fontButtonVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.fontHeaderStatusBar}>Comprovantes</Text>
      </View>
      <View style={styles.containerScreen}>
        <View style={styles.contianerHeaderScreen}>
          <Text style={styles.fontHeaderDocNecessarios}>
            Documentos necessários
          </Text>
        </View>

        <View style={styles.containerCard}>
          <View style={styles.containerText}>
            <Text style={styles.fontText}>
              Nota fiscal ou recibo - Consulta médica
            </Text>
          </View>
          <View style={styles.containerCheck}>
            <SvgCheck></SvgCheck>
            <TouchableOpacity style={styles.containerButtonIr}>
              <SvgVoltar color="#09498F" width={12} height={12} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerCard}>
          <View style={styles.containerText}>
            <Text style={styles.fontText}>Autorização </Text>
          </View>
          <View style={styles.containerCheck}>
            <SvgCheck></SvgCheck>
            <TouchableOpacity style={styles.containerButtonIr}>
              <SvgVoltar color="#09498F" width={12} height={12} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.containerSalvarDespesa}>
        <Text style={styles.fontSalvarDespesa}>SALVAR DESPESA</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStatusBar: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
  },
  containerScreen: {
    padding: 15,
    flex: 1,
  },
  containerButtonVoltar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 15,
    left: 3,
    alignItems: 'center',
  },
  fontButtonVoltar: {fontSize: 17, color: '#FFF'},
  fontHeaderStatusBar: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
  },
  fontHeaderDocNecessarios: {fontSize: 20, color: '#333', fontWeight: '500'},
  contianerHeaderScreen: {marginBottom: 15},
  containerCard: {
    backgroundColor: '#edf0f6',
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  containerText: {flex: 1, marginRight: 15},
  fontText: {color: '#333', fontWeight: '500'},
  containerCheck: {flexDirection: 'row', alignItems: 'center'},
  containerButtonIr: {transform: [{rotateZ: '180deg'}], marginLeft: 8},
  containerSalvarDespesa: {
    padding: 25,
    backgroundColor: '#09498F',
    alignItems: 'center',
  },
  fontSalvarDespesa: {fontSize: 16, color: '#FFF', fontWeight: '700'},
});