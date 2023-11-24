import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Screen = () => {
  const [listaTextos, setListaTextos] = useState > [];
  const [input, setInput] = useState('');
  const [inputDelete, setInputDelete] = useState('');

  const onPress = () => {
    if (input === '') {
      return;
    }
    setListaTextos(prev => [...prev, input]);
    setInput('');
  };

  const onChangeText = e => {
    setInput(e);
  };

  const onPressDeleteText = () => {
    setListaTextos(prev => {
      return prev.filter(i => i.toLowerCase() !== inputDelete.toLowerCase());
    });
  };

  const onChangeTextDelete = e => {
    setInputDelete(e);
  };

  return (
    <View>
      {listaTextos.map(i => (
        <Text style={styles.text} key={Math.random()}>
          {i}
        </Text>
      ))}
      <TextInput
        value={input}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Button title="adicionar texto" onPress={onPress} />
      <TextInput
        value={inputDelete}
        onChangeText={onChangeTextDelete}
        style={styles.input}
      />
      <Button title="deletar texto" onPress={onPressDeleteText} />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  input: {backgroundColor: 'rgba(0,255,0,0.4)'},
  text: {fontSize: 18, fontWeight: '500'},
});
