import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Screen = () => {
  const [listaDeTextos, setListaDeTextos] = useState([]);
  const [textRecebido, setTextRecebido] = useState('');
  const onChangeText = e => {
    setTextRecebido(e);
  };
  console.log(listaDeTextos);
  return (
    <View style={styles.container}>
      {listaDeTextos.map(e => (
        <Text key={Math.random()}>{e}</Text>
      ))}
      <TextInput
        onChangeText={onChangeText}
        style={styles.containerTextInput}
        placeholder="digita aqui"
        placeholderTextColor={'rgba(0,0,0,0.65)'}></TextInput>
      <Button
        title="me aperte"
        onPress={() => {
          setListaDeTextos(prev => [...prev, textRecebido]);
        }}></Button>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.08)',
    justifyContent: 'center',
  },
  containerTextInput: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
});
