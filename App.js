import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.container2}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 15,
            top: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginRight: 5}}>
            <SvgVoltar width={16} height={16} color="white"></SvgVoltar>
          </View>
          <Text style={{color: 'white'}}>Voltar</Text>
        </TouchableOpacity>
        <View style={styles.container3}>
          <Text style={styles.fontMinhasDespesas}>Minhas despesas</Text>
          <Text style={styles.fontEtapa}>Etapa 1 de 3</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.containerDespesa}>
        <Text style={styles.fontAddDespesa}>+ ADICIONAR DESPESA</Text>
      </TouchableOpacity>
      <Text style={styles.fontSize14}>
        Você pode adicionar quantas despesas quiser num mesmo pedido.
      </Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.fontSize18}>Nenhuma despesa incluída</Text>
        <Text style={styles.fontSize14}>
          Toque em ADICIONAR DESPESA para incluir quantos procedimentos quiser.
          Quando terminar de incluir toque em PRÓXIMO
        </Text>
      </View>

      <TouchableOpacity style={styles.containerButtom}>
        <Text style={styles.textProximo}>PRÓXIMO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  container2: {
    backgroundColor: '#09498F',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container3: {
    alignItems: 'center',
  },
  fontMinhasDespesas: {color: '#FFFFFF', fontSize: 17, fontWeight: 'bold'},
  fontEtapa: {color: '#FFFFFF', fontSize: 12, marginBottom: 10},
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 20, height: 25},
  fontVoltar: {color: '#FFFFFF', fontSize: 18},

  containerDespesa: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#09498F',
    margin: 15,
    borderRadius: 5,
  },
  fontAddDespesa: {
    color: '#09498F',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },
  fontSize14: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },
  fontSize18: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    margin: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerButtom: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    paddingVertical: 25,
  },
  textProximo: {fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'},
});
