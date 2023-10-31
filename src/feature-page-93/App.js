import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';

const App = () => {
  return (
    <View style={styles.containerFundo0}>
      <View style={styles.containerScreen}>
        <View style={styles.containerStatusBar}>
          <StatusBar backgroundColor={'#09498F'} />
          <TouchableOpacity style={styles.containerButtonVoltar}>
            <SvgVoltar width={18} height={18} color="white" />
            <Text style={styles.fontBotaoVoltar}>Voltar</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.fontDadosDaDespesaStatusBar}>
              Dados da despesa
            </Text>
          </View>
        </View>
        <View style={styles.containerBenificiario}>
          <View style={styles.marginBenificiario}>
            <Text style={styles.fontChave}>Beneficiário</Text>
            <Text style={styles.fontValor}>Victor Hugo Prando da Silva</Text>
          </View>

          <View>
            <Text style={styles.fontChave}>Grupo de procedimento</Text>
            <Text style={styles.fontValor}>Assistência farmacêutica</Text>
          </View>
        </View>

        <View style={styles.containerDadosDaDespesa}>
          <Text style={styles.fontDadosDaDespesa}>Dados da despesa</Text>
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.fontCard}>Quantidade</Text>
        </View>
        <View style={styles.containerCard}>
          <Text style={styles.fontCard}>Valor unitário (R$)</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.containerBotaoProximo}>
        <Text style={styles.fontButtonContinuar}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerFundo0: {backgroundColor: '#ecf2f2', flex: 1},
  containerScreen: {backgroundColor: '#fff', flex: 1},
  containerStatusBar: {
    backgroundColor: '#09498F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  containerButtonVoltar: {
    flexDirection: 'row',
    position: 'absolute',
    left: 3,
    top: 15,
    alignItems: 'center',
  },
  containerBenificiario: {
    backgroundColor: '#EEE',
    padding: 15,
    marginBottom: 20,
  },
  marginBenificiario: {marginBottom: 10},
  containerDadosDaDespesa: {
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 20,
  },
  containerCard: {
    backgroundColor: '#edf0f6',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  containerBotaoProximo: {
    backgroundColor: '#09498F',
    alignItems: 'center',
    padding: 25,
  },
  fontBotaoVoltar: {fontSize: 18, color: '#fff'},
  fontDadosDaDespesaStatusBar: {fontSize: 18, color: '#fff', fontWeight: '500'},
  fontChave: {fontSize: 11, color: '#555'},
  fontValor: {color: '#555', fontWeight: '500'},
  fontDadosDaDespesa: {fontSize: 16, color: '#333', fontWeight: '500'},
  fontCard: {fontSize: 16, color: '#9ab5d1'},
  fontButtonContinuar: {fontSize: 16, color: '#fff', fontWeight: '700'},
});
