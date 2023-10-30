import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SvgCheck from './svgs/check-sucess.svg';

const App = () => {
  return (
    <View style={styles.containerScreen}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.containerBoxCenter}>
        <View style={styles.containerCheck}>
          <SvgCheck />
        </View>
        <View style={styles.containerHeader}>
          <Text style={styles.fontHeaderText}>
            Solicitação de reembolso enviada com sucesso
          </Text>
        </View>
        <View style={styles.containerNumeroDoProtocolo}>
          <Text style={styles.fontHeaderProtocolo}>
            Número de seu protocolo:
          </Text>
          <Text style={styles.fontNumeroProtocolo}># 340124-14</Text>
        </View>
        <View style={styles.containerResponseSolicitacao}>
          <Text style={styles.fontFeedBeck}>
            Recebemos sua solicitação de reembolso de número
            <View />
            <Text style={styles.fontFeedBeckNumero}>41764234</Text> e já está na
            fila de análise. O prazo de pagamento do ressarcimento é de até 30
            dias e documentações complementares poderão ser solicitadas.
          </Text>
        </View>
        <TouchableOpacity style={styles.containerButtonConcluir}>
          <Text style={styles.fontButtonConcluir}>CONCLUIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#09498F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  containerBoxCenter: {
    padding: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: 15,
    borderTopWidth: 3,
    borderColor: '#BBB',
  },
  containerCheck: {marginBottom: 22, alignItems: 'center'},
  containerHeader: {marginBottom: 20, alignItems: 'center'},

  fontHeaderText: {fontSize: 18, color: '#09498F', fontWeight: '500'},
  containerNumeroDoProtocolo: {
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerResponseSolicitacao: {alignItems: 'center', marginBottom: 15},
  fontHeaderProtocolo: {fontSize: 12, color: '#888'},
  fontNumeroProtocolo: {fontSize: 18, color: '#888', fontWeight: '500'},
  fontFeedBeck: {color: '#333'},
  fontFeedBeckNumero: {fontWeight: '500', color: '#333'},
  containerButtonConcluir: {
    padding: 15,
    backgroundColor: '#09498F',
    alignItems: 'center',
    borderRadius: 10,
  },
  fontButtonConcluir: {color: '#FFF', fontWeight: '500'},
});
