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
      <View style={styles.container2}>
        <TouchableOpacity style={styles.subContainer}>
          <Text style={styles.fontAddNovaConta}>+ ADICIONAR NOVA CONTA</Text>
        </TouchableOpacity>
        <View style={styles.containerTextContadasCadastradas}>
          <Text style={styles.fontContasCadastradas}>Contas cadastradas</Text>
        </View>
        <View style={styles.containerDadosCadastrados}>
          <View style={styles.containerTextDadosCadastrados}>
            <View style={styles.fontMarginBot2}>
              <Text style={styles.fontBancoNome}>Banco do Brasil SA</Text>
            </View>
            <View style={styles.fontMarginBot2}>
              <Text style={styles.fontInformacoesDasContas}>
                Victor Hugo Prando da Silva
              </Text>
            </View>
            <View style={styles.containerAgCc}>
              <Text style={styles.fontInformacoesDasContas}>Ag.: 0070</Text>
              <View style={styles.containerEspaco}></View>
              <Text style={styles.fontInformacoesDasContas}>CC: 12099-0</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.containerSetaIr}>
            <SvgSeta color="#09498F" width={15} height={15} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerDadosCadastrados}>
          <View style={styles.containerTextDadosCadastrados}>
            <View style={styles.fontMarginBot2}>
              <Text style={styles.fontBancoNome}>Banco do Brasil SA</Text>
            </View>
            <View style={styles.fontMarginBot2}>
              <Text style={styles.fontInformacoesDasContas}>
                Victor Hugo Prando da Silva
              </Text>
            </View>
            <View style={styles.containerAgCc}>
              <Text style={styles.fontInformacoesDasContas}>Ag.: 0070</Text>
              <View style={styles.containerEspaco}></View>
              <Text style={styles.fontInformacoesDasContas}>CC: 12099-0</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.containerSetaIr}>
            <SvgSeta color="#09498F" width={15} height={15} />
          </TouchableOpacity>
        </View>
      </View>
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
  container2: {flex: 1, backgroundColor: 'white', padding: 15},
  subContainer: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#09498F',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
  },
  fontAddNovaConta: {fontSize: 14, fontWeight: '500', color: '#09498F'},
  containerTextContadasCadastradas: {marginBottom: 10},
  fontContasCadastradas: {fontSize: 20, color: '#333', fontWeight: '500'},
  containerDadosCadastrados: {
    backgroundColor: '#edf0f6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
  containerTextDadosCadastrados: {flex: 1},
  fontMarginBot2: {marginBottom: 3},
  fontBancoNome: {color: '#333', fontWeight: '500'},
  fontInformacoesDasContas: {fontSize: 12, color: '#555'},
  containerAgCc: {flexDirection: 'row'},
  containerEspaco: {marginHorizontal: 15},
  containerSetaIr: {transform: [{rotateZ: '180deg'}]},
});
