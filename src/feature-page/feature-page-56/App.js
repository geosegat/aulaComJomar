import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SvgVoltar from './svgs/seta-esquerda.svg';
import BotaoAdd from './svgs/botao-adicionar.svg';
import BotaoEdit from './svgs/icon-editar.svg';
import BotaoClose from './svgs/icon-close.svg';

const App = () => {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.container2}>
        <TouchableOpacity style={styles.containerBotaoVoltar}>
          <View>
            <SvgVoltar width={18} height={18} color="white"></SvgVoltar>
          </View>
          <Text style={styles.fontBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.fontReembolsoCassi}>Reembolso Cassi</Text>
        <TouchableOpacity style={styles.containerBotaoAdicionar}>
          <BotaoAdd width={25} height={25} color="white"></BotaoAdd>
        </TouchableOpacity>
      </View>
      <Text style={styles.fontContainerTitulo}>Rascunhos</Text>
      <View style={styles.containerDadosSolicitacao}>
        <Text style={styles.fontNumSolicitacao}>482394829</Text>
        <View style={styles.containerBotoesCloseEdit}>
          <View style={styles.containerBotaoEdit}>
            <TouchableOpacity>
              <BotaoEdit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <BotaoClose />
          </TouchableOpacity>
        </View>

        <View style={styles.containerChaveValor}>
          <View>
            <Text style={styles.fontChave}>Situação</Text>
            <Text style={styles.fontRascunho}>Rascunho</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor solicitado</Text>
              <Text style={styles.fontValor}>R$ 450,00</Text>
            </View>
          </View>
          <View style={styles.containerAbsoluto}>
            <Text style={styles.fontChave}>Data solicitação</Text>
            <Text style={styles.fontValor}>20/10/2020</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor liberado</Text>
              <Text style={styles.fontValor}>-</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.fontContainerTitulo}>Rembolsos solicitados</Text>
      <View style={styles.containerDadosSolicitacao}>
        <Text style={styles.fontNumSolicitacao}>482394829</Text>
        <View style={styles.containerBotoesCloseEdit}>
          <View style={styles.containerBotaoEdit}>
            <TouchableOpacity>
              <BotaoEdit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <BotaoClose />
          </TouchableOpacity>
        </View>

        <View style={styles.containerChaveValor}>
          <View>
            <Text style={styles.fontChave}>Situação</Text>
            <Text style={styles.fontRascunho}>Rascunho</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor solicitado</Text>
              <Text style={styles.fontValor}>R$ 450,00</Text>
            </View>
          </View>
          <View style={styles.containerAbsoluto}>
            <Text style={styles.fontChave}>Data solicitação</Text>
            <Text style={styles.fontValor}>20/10/2020</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor liberado</Text>
              <Text style={styles.fontValor}>-</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerDadosSolicitacao}>
        <Text style={styles.fontNumSolicitacao}>482394829</Text>
        <View style={styles.containerBotoesCloseEdit}>
          <View style={styles.containerBotaoEdit}>
            <TouchableOpacity>
              <BotaoEdit />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <BotaoClose />
          </TouchableOpacity>
        </View>

        <View style={styles.containerChaveValor}>
          <View>
            <Text style={styles.fontChave}>Situação</Text>
            <Text style={styles.fontRascunho}>Rascunho</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor solicitado</Text>
              <Text style={styles.fontValor}>R$ 450,00</Text>
            </View>
          </View>
          <View style={styles.containerAbsoluto}>
            <Text style={styles.fontChave}>Data solicitação</Text>
            <Text style={styles.fontValor}>20/10/2020</Text>
            <View style={styles.containerMarginVertical}>
              <Text style={styles.fontChave}>Valor liberado</Text>
              <Text style={styles.fontValor}>-</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F6F6F6'},
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
  fontReembolsoCassi: {fontSize: 17, color: '#FFFFFF', fontWeight: '500'},
  containerBotaoAdicionar: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 10,
    alignItems: 'center',
  },
  fontContainerTitulo: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  containerDadosSolicitacao: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 6,
    borderLeftWidth: 7,
    borderStartColor: '#888888',
    borderWidth: 1,
    borderColor: '#0000000D',
    marginVertical: 5,
  },

  containerChaveValor: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  containerAbsoluto: {position: 'absolute', left: 165, paddingVertical: 10},

  fontNumSolicitacao: {fontSize: 16, color: '#333333', fontWeight: '600'},
  fontChave: {fontSize: 11, color: '#555555'},
  fontValor: {fontSize: 14, color: '#333333'},
  fontRascunho: {fontSize: 14, color: '#888888', fontWeight: '600'},
  containerBotoesCloseEdit: {
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    right: 40,
  },
  containerBotaoEdit: {
    marginHorizontal: 12,
  },
  containerMarginVertical: {
    marginVertical: 10,
  },
});
