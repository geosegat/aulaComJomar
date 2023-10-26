import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#09498F" />
      <View style={styles.container2}>
        <View style={styles.container4}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/657/657001.png',
            }}
            style={styles.image}
          />
          <Text style={styles.fontVoltar}>Voltar</Text>
        </View>

        <View style={styles.container3}>
          <Text style={styles.fontMinhasDespesas}>Minhas despesas</Text>
          <Text style={styles.fontEtapa}>Etapa 1 de 3</Text>
        </View>
      </View>

      <View style={styles.containerDespesa}>
        <Text style={styles.fontAddDespesa}>+ ADICIONAR DESPESA</Text>
      </View>
      <Text style={styles.fontSize14}>
        Você pode adicionar quantas despesas quiser num mesmo pedido.
      </Text>
      <Text style={styles.fontSize18}>Nenhuma despesa incluída</Text>
      <Text style={styles.fontSize14}>
        Toque em ADICIONAR DESPESA para incluir quantos procedimentos quiser.
        Quando terminar de incluir toque em PRÓXIMO
      </Text>
      <View style={styles.containerButtom}>
        <TouchableOpacity>
          <Text style={styles.textProximo}>PRÓXIMO</Text>
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
    flexDirection: 'row',
  },
  container3: {
    alignItems: 'center',
    marginLeft: 64,
  },
  fontMinhasDespesas: {color: '#FFFFFF', fontSize: 17, fontWeight: 'bold'},
  fontEtapa: {color: '#FFFFFF', fontSize: 12, marginBottom: 10},
  container4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    margin: 15,
    marginTop: 10,
  },
  fontSize18: {
    fontSize: 18,
    color: '#555555',
    textAlign: 'center',
    margin: 15,
    marginTop: 139,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerButtom: {
    marginTop: 140,
    flex: 1,
    backgroundColor: '#09498F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textProximo: {fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'},
});
