import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../../../components/AppText';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const addContador = () => {
    setContador(contador + 1);
  };

  const diminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      setContador(0);
    }
  };

  const zerarContador = () => {
    setContador(contador * 0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaHeight} />
      <AppText size="super" variant="bold" color="#fff">
        Contador
      </AppText>
      <View style={styles.caixaHeight} />
      <AppText size="xhuge" variant="bold" color="#fff">
        {contador}
      </AppText>
      <View style={styles.caixaHeight} />

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.containerButton}
          onPress={diminuirContador}>
          <AppText size="huge" color="#fff">
            -
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerButton, styles.marginLeft]}
          onPress={zerarContador}>
          <AppText size="huge" color="#fff">
            Zerar
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.containerButton, styles.marginLeft]}
          onPress={addContador}>
          <AppText size="huge" color="#fff">
            +
          </AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2A2A2B',
  },
  textoContador: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
  },
  containerButton: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
  },
  marginLeft: {marginLeft: 20},
  caixaHeight: {height: 50},
});

export default Contador;
